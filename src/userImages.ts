export interface AttachedUserImage {
  id: string;
  filename: string;
  userPath: string;
  fallbackAsset: string;
  title: string;
  category: "Leadership & Ecosystem" | "Software Engineering" | "Executive Branding" | "Media & Podcast";
  tag: string;
  context: string;
  description: string;
}

const suppliedImages: Record<string, string> = {
  "662546653_906604609036614_4587264447012714908_n.jpg": mediaPodcast,
  "670356360_914681931562215_3529270803198657421_n.jpg": buildFromHere,
  "715419344_962213336809074_1185791128368661368_n.jpg": collaborativeLab,
  "717154606_962213273475747_1463907587735742022_n.jpg": techHubSprint,
  "728639560_977517195278688_7903458639153260496_n.jpg": developerBootcamp,
  "Instagram Post (1).png": houseVenturesWriting,
};

const suppliedImage = (filename: string) => suppliedImages[filename];

// Every gallery source is an unchanged file supplied by Okello. The fallback uses
// the same file so an unrelated built-in image can never appear in this gallery.
export const USER_ATTACHED_IMAGES: AttachedUserImage[] = [
  {
    id: "podcast-studio", filename: "662546653_906604609036614_4587264447012714908_n.jpg",
    userPath: suppliedImage("662546653_906604609036614_4587264447012714908_n.jpg"), fallbackAsset: suppliedImage("662546653_906604609036614_4587264447012714908_n.jpg"),
    title: "Media & Thought Leadership", category: "Media & Podcast", tag: "Studio Podcast", context: "Live interview and podcast broadcast", description: "A studio conversation on digital skills, career growth, and practical software solutions for the community."
  },
  {
    id: "build-from-here", filename: "670356360_914681931562215_3529270803198657421_n.jpg",
    userPath: suppliedImage("670356360_914681931562215_3529270803198657421_n.jpg"), fallbackAsset: suppliedImage("670356360_914681931562215_3529270803198657421_n.jpg"),
    title: "Build From Here Conference", category: "Leadership & Ecosystem", tag: "Technology Conference", context: "Build From Here 2026", description: "A gathering of LakeHub, Zone01, Google, and local innovators focused on technology talent and opportunity."
  },
  {
    id: "collaborative-lab", filename: "715419344_962213336809074_1185791128368661368_n.jpg",
    userPath: suppliedImage("715419344_962213336809074_1185791128368661368_n.jpg"), fallbackAsset: suppliedImage("715419344_962213336809074_1185791128368661368_n.jpg"),
    title: "Collaborative Tech Lab", category: "Software Engineering", tag: "Workshop", context: "Hands-on collaborative session", description: "Explaining and working through ideas with fellow technologists."
  },
  {
    id: "tech-hub-sprint", filename: "717154606_962213273475747_1463907587735742022_n.jpg",
    userPath: suppliedImage("717154606_962213273475747_1463907587735742022_n.jpg"), fallbackAsset: suppliedImage("717154606_962213273475747_1463907587735742022_n.jpg"),
    title: "Tech Hub Sprint", category: "Software Engineering", tag: "Team Session", context: "Live collaborative engineering session", description: "A practical peer-learning session where developers shared ideas and worked through engineering challenges together."
  },
  {
    id: "developer-bootcamp", filename: "728639560_977517195278688_7903458639153260496_n.jpg",
    userPath: suppliedImage("728639560_977517195278688_7903458639153260496_n.jpg"), fallbackAsset: suppliedImage("728639560_977517195278688_7903458639153260496_n.jpg"),
    title: "Developer Bootcamp", category: "Leadership & Ecosystem", tag: "Community Event", context: "Kisumu developer bootcamp", description: "Supporting hands-on learning with the developer community."
  },
  {
    id: "writing-services", filename: "Instagram Post (1).png",
    userPath: suppliedImage("Instagram Post (1).png"), fallbackAsset: suppliedImage("Instagram Post (1).png"),
    title: "House Ventures Writing Services", category: "Executive Branding", tag: "Services", context: "Official House Ventures service information", description: "An overview of CV writing, cover letters, LinkedIn optimisation, company profiles, and business proposal support."
  }
];
import buildFromHere from "./assets/images/user/gallery-build-from-here.jpg";
import collaborativeLab from "./assets/images/user/gallery-collaborative-lab.jpg";
import developerBootcamp from "./assets/images/user/gallery-developer-bootcamp.jpg";
import houseVenturesWriting from "./assets/images/user/gallery-house-ventures-writing.png";
import mediaPodcast from "./assets/images/user/gallery-media-podcast.jpg";
import techHubSprint from "./assets/images/user/gallery-tech-hub-sprint.jpg";
