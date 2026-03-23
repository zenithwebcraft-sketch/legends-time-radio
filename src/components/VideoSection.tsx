import { Play } from "lucide-react";

const videos = [
  { id: "placeholder1", title: "Rock Clásico en Vivo" },
  { id: "placeholder2", title: "Especial Black Sabbath" },
  { id: "placeholder3", title: "Lo Mejor de los 70s" },
  { id: "placeholder4", title: "Heavy Metal Nights" },
];

const VideoSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-gold glow-gold text-center mb-16 tracking-wider">
          VIDEOS
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative aspect-video bg-card border border-border overflow-hidden group cursor-pointer"
            >
              {/* Placeholder dark frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center transition-all group-hover:bg-gold/20 group-hover:scale-110 group-hover:shadow-[0_0_30px_hsl(43_52%_54%/0.3)]">
                  <Play className="w-6 h-6 text-gold ml-1" fill="currentColor" />
                </div>
              </div>
              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-foreground font-body text-sm">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
