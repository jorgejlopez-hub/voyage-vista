import { Section } from "@/components/Section";
import { Landing } from "@/components/Landing";
import { OutroSection } from "@/components/OutroSection";

// Video Imports
import landingVideo from "@assets/generated_videos/cinematic_waves_at_sunset.mp4";
import cartagenaVideo from "@assets/generated_videos/cartagena_walled_city_sunset.mp4";
import medellinVideo from "@assets/generated_videos/medellin_city_lights_dusk.mp4";
import bogotaVideo from "@assets/generated_videos/bogota_monserrate_golden_hour.mp4";
import santaMartaVideo from "@assets/generated_videos/santa_marta_tayrona_beach.mp4";
import barranquillaVideo from "@assets/generated_videos/barranquilla_carnival_and_river.mp4";

const destinations = [
  {
    id: "cartagena",
    title: "Cartagena",
    subtitle: "The Heroic City",
    description: "A romantic walk through history, where colonial balconies overflow with flowers and the Caribbean sun sets over ancient stone walls.",
    video: cartagenaVideo
  },
  {
    id: "medellin",
    title: "Medellín",
    subtitle: "City of Eternal Spring",
    description: "A modern metropolis nestled in the Andes, where innovation meets warmth and the lights of the valley shimmer like stars at dusk.",
    video: medellinVideo
  },
  {
    id: "bogota",
    title: "Bogotá",
    subtitle: "The Capital",
    description: "A cultural giant at 2,600 meters closer to the stars. Historic cobblestones, vibrant street art, and the dramatic backdrop of Monserrate.",
    video: bogotaVideo
  },
  {
    id: "santa-marta",
    title: "Santa Marta",
    subtitle: "Between Sierra & Sea",
    description: "Where the jungle meets the Caribbean. Ancient Tayrona secrets, golden coves, and the snowy peaks of the Sierra Nevada watching over.",
    video: santaMartaVideo
  },
  {
    id: "barranquilla",
    title: "Barranquilla",
    subtitle: "The Golden Gate",
    description: "The rhythmic heart of the coast. A city of joy, color, and carnival, where the Magdalena River kisses the sea.",
    video: barranquillaVideo
  }
];

export default function Home() {
  return (
    <div className="snap-container bg-black text-white font-sans">
      <Landing 
        destinations={destinations} 
        videoSrc={landingVideo}
      />
      
      {destinations.map((dest, index) => (
        <Section
          key={dest.id}
          index={index}
          id={dest.id}
          title={dest.title}
          subtitle={dest.subtitle}
          description={dest.description}
          videoSrc={dest.video}
        />
      ))}

      <OutroSection />
    </div>
  );
}
