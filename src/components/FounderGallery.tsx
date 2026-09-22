import React, { useState, useEffect, useRef } from "react";
import { Camera, ExternalLink, Sparkles, CheckCircle2, Maximize2, X, Upload, RefreshCw, Image as ImageIcon, ShieldCheck } from "lucide-react";
import { USER_ATTACHED_IMAGES, AttachedUserImage } from "../userImages";

export default function FounderGallery() {
  const [selectedImage, setSelectedImage] = useState<AttachedUserImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [availableFiles, setAvailableFiles] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const [showUploader, setShowUploader] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchAvailableImages = async () => {
    try {
      const res = await fetch("/api/user-images/list");
      if (res.ok) {
        const data = await res.json();
        setAvailableFiles(data.images || []);
      }
    } catch {
      // benign fallback
    }
  };

  useEffect(() => {
    fetchAvailableImages();
  }, []);

  const handleFilesUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    setUploadSuccess(null);

    let count = 0;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      try {
        const base64Data = await readFileAsBase64(file);
        const res = await fetch("/api/user-images/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            filename: file.name,
            base64Data
          })
        });
        if (res.ok) {
          count++;
        }
      } catch (err) {
        console.error("Upload error:", err);
      }
    }

    setUploading(false);
    if (count > 0) {
      setUploadSuccess(`Successfully synchronized ${count} authentic photo${count > 1 ? "s" : ""}!`);
      await fetchAvailableImages();
      setTimeout(() => setUploadSuccess(null), 5000);
    }
  };

  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const categories = ["All", "Software Engineering", "Leadership & Ecosystem", "Executive Branding", "Media & Podcast"];

  const filteredImages = activeFilter === "All"
    ? USER_ATTACHED_IMAGES
    : USER_ATTACHED_IMAGES.filter(img => img.category === activeFilter);

  return (
    <div className="mt-20 pt-16 border-t border-slate-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0C1E36] tracking-tight">
            Okello Odhiambo in Action
          </h3>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl font-sans leading-relaxed">
            A personal visual gallery capturing real-world software engineering sprints at Zone01 Kisumu, Google tech summits, live podcast broadcasts, and executive consulting milestones.
          </p>
        </div>

        {/* Action button to manage / sync photos */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowUploader(!showUploader)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-mono font-bold text-[#0C1E36] transition-all cursor-pointer shadow-xs"
          >
            <Upload className="w-3.5 h-3.5 text-[#f80d05]" />
            {showUploader ? "Hide Photo Sync" : "Sync Attached Photos"}
          </button>
        </div>
      </div>

      {/* Interactive Photo Sync Panel */}
      {showUploader && (
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-red-50/40 via-white to-slate-50 border border-red-200/70 shadow-sm animate-in fade-in duration-300">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="font-serif font-bold text-base text-[#0C1E36] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#f80d05]" /> Sync Your 7 Authentic Photos to Website Storage
              </h4>
              <p className="text-xs text-slate-600 max-w-2xl">
                Upload or drop your attached files (<code className="bg-red-50 text-[#f80d05] px-1 py-0.5 rounded font-mono text-[11px]">.jpg</code>, <code className="bg-red-50 text-[#f80d05] px-1 py-0.5 rounded font-mono text-[11px]">.png</code>) to store them permanently into <code className="bg-slate-100 text-slate-700 px-1 py-0.5 rounded font-mono text-[11px]">/public/images/user/</code>.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <input
                type="file"
                multiple
                ref={fileInputRef}
                className="hidden"
                accept="image/jpeg,image/png,image/webp"
                onChange={(e) => handleFilesUpload(e.target.files)}
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="w-full md:w-auto px-5 py-2.5 rounded-lg bg-[#0C1E36] hover:bg-[#f80d05] text-white font-mono text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {uploading ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Saving...
                  </>
                ) : (
                  <>
                    <Upload className="w-3.5 h-3.5" /> Select &amp; Sync Images
                  </>
                )}
              </button>
            </div>
          </div>

          {uploadSuccess && (
            <div className="mt-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              {uploadSuccess}
            </div>
          )}

          {/* Quick status checklist */}
          <div className="mt-5 pt-4 border-t border-slate-200/80">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">
              Attached Image Sync Registry
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {USER_ATTACHED_IMAGES.map((img) => {
                const isSynced = availableFiles.includes(img.filename);
                return (
                  <div key={img.id} className="flex items-center gap-2 text-[11px] font-mono p-1.5 rounded bg-white border border-slate-100">
                    <span className={`w-2 h-2 rounded-full ${isSynced ? "bg-emerald-500" : "bg-amber-400"}`} />
                    <span className="truncate flex-1 text-slate-700">{img.filename}</span>
                    <span className={`text-[10px] uppercase font-bold ${isSynced ? "text-emerald-700" : "text-amber-600"}`}>
                      {isSynced ? "Active" : "Ready"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
              activeFilter === cat
                ? "bg-[#0C1E36] text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Authentic Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((item) => (
          <ImageCard
            key={item.id}
            item={item}
            onExpand={() => setSelectedImage(item)}
          />
        ))}
      </div>

      {/* Fullscreen Photo Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-100 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#0C1E36]">
                  {selectedImage.title}
                </h4>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative bg-slate-900 flex items-center justify-center min-h-[300px] max-h-[55vh] overflow-hidden">
              <SafeImage
                primarySrc={selectedImage.userPath}
                fallbackSrc={selectedImage.fallbackAsset}
                alt={selectedImage.title}
                className="max-h-[55vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-100">
              <p className="text-xs font-mono font-bold text-slate-500 mb-1">
                Context: {selectedImage.context}
              </p>
              <p className="text-sm text-slate-700 font-sans leading-relaxed">
                {selectedImage.description}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Asset: {selectedImage.filename}</span>
                <span className="text-[#f80d05] font-bold">Verified Authentic Media</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface ImageCardProps {
  key?: string;
  item: AttachedUserImage;
  onExpand: () => void;
}

function ImageCard({ item, onExpand }: ImageCardProps) {
  return (
    <div 
      onClick={onExpand}
      className="group relative rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-md hover:border-[#f80d05]/40 transition-all duration-300 flex flex-col cursor-pointer"
    >
      <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
        <SafeImage
          primarySrc={item.userPath}
          fallbackSrc={item.fallbackAsset}
          alt={item.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-xs font-mono flex items-center gap-1.5 font-bold">
            <Maximize2 className="w-3.5 h-3.5" /> View Photo Details
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-serif font-bold text-base text-[#0C1E36] group-hover:text-[#f80d05] transition-colors leading-snug">
            {item.title}
          </h4>
          <p className="text-xs text-slate-500 font-mono mt-1 mb-2 line-clamp-1">
            {item.context}
          </p>
          <p className="text-xs text-slate-650 font-sans line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="text-slate-500 font-bold">{item.category}</span>
          <span className="text-[#f80d05] group-hover:translate-x-0.5 transition-transform font-bold">
            Expand →
          </span>
        </div>
      </div>
    </div>
  );
}

export function SafeImage({
  primarySrc,
  fallbackSrc,
  alt,
  className
}: {
  primarySrc: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
}) {
  const [currentSrc, setCurrentSrc] = useState<string>(primarySrc || fallbackSrc);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCurrentSrc(primarySrc || fallbackSrc);
    setHasError(false);
  }, [primarySrc, fallbackSrc]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => {
        if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
          setHasError(true);
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}
