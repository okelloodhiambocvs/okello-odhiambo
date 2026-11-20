import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2, Maximize2, Upload, RefreshCw, ShieldCheck } from "lucide-react";
import { USER_ATTACHED_IMAGES, AttachedUserImage } from "../userImages";

interface FounderGalleryProps {
  onSelectAction?: (actionId: string) => void;
}

export default function FounderGallery({ onSelectAction }: FounderGalleryProps) {
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
    <section className="py-20 sm:py-24 relative overflow-hidden bg-[#0C1E36] text-white border-t border-white/10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(36, 69, 112, 0.55) 0%, rgba(12, 30, 54, 0.96) 55%, #071426 100%)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Okello Odhiambo in Action
            </h3>
            <div className="h-1 w-16 bg-[#f80d05] mt-3 mb-3" />
            <p className="text-slate-300 text-base max-w-2xl font-sans leading-relaxed">
              A personal visual gallery capturing real-world software engineering sprints at Zone01 Kisumu, Google tech summits, live podcast broadcasts, and executive consulting milestones.
            </p>
          </div>

          {/* Action button to manage / sync photos */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowUploader(!showUploader)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/25 bg-white/10 hover:bg-white/20 text-xs font-mono font-bold text-white transition-all cursor-pointer whitespace-nowrap"
            >
              <Upload className="w-3.5 h-3.5 text-[#f80d05]" />
              {showUploader ? "Hide Photo Sync" : "Sync Attached Photos"}
            </button>
          </div>
        </div>

        {/* Interactive Photo Sync Panel */}
        {showUploader && (
          <div className="mb-10 p-6 rounded-2xl bg-white text-[#0C1E36] border border-slate-200 shadow-lg animate-in fade-in duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-[#0C1E36] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#f80d05]" /> Synced Authentic Photos to Website Storage
                </h4>
                <p className="text-sm text-slate-600 max-w-2xl">
                  Upload or drop your attached files (<code className="bg-[#f80d05]/10 text-[#f80d05] px-1 py-0.5 rounded font-mono text-xs">.jpg</code>, <code className="bg-[#f80d05]/10 text-[#f80d05] px-1 py-0.5 rounded font-mono text-xs">.png</code>) to store them permanently into <code className="bg-slate-100 text-slate-700 px-1 py-0.5 rounded font-mono text-xs">/public/images/user/</code>.
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
                  type="button"
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
                    <div key={img.id} className="flex items-center gap-2 text-[11px] font-mono p-1.5 rounded bg-slate-50 border border-slate-100">
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

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-2 rounded text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === cat
                  ? "bg-[#f80d05] text-white shadow-sm"
                  : "bg-white/10 text-slate-200 border border-white/15 hover:bg-white/20 hover:text-white"
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
              onExpand={() => onSelectAction?.(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ImageCardProps {
  key?: string;
  item: AttachedUserImage;
  onExpand: () => void;
}

function ImageCard({ item, onExpand }: ImageCardProps) {
  return (
    <button
      type="button"
      onClick={onExpand}
      className="group relative text-left flex flex-col w-full bg-transparent border-0 p-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f80d05]"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <SafeImage
          primarySrc={item.userPath}
          fallbackSrc={item.fallbackAsset}
          alt={item.title}
          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-xs font-mono flex items-center gap-1.5 font-bold">
            <Maximize2 className="w-3.5 h-3.5" /> Read Full Story
          </span>
        </div>
      </div>

      <div className="pt-4 flex-1 flex flex-col justify-between w-full">
        <div>
          <h4 className="font-serif font-bold text-lg text-white group-hover:text-[#f80d05] transition-colors leading-snug">
            {item.title}
          </h4>
          <p className="text-sm text-slate-300 font-mono mt-1 mb-2 line-clamp-1">
            {item.context}
          </p>
          <p className="text-sm text-slate-300/90 font-sans line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-mono">
          <span className="text-slate-300 font-bold">{item.category}</span>
          <span className="text-[#f80d05] group-hover:translate-x-0.5 transition-transform font-bold">
            Expand →
          </span>
        </div>
      </div>
    </button>
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
