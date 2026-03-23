import { Play } from "lucide-react";

const videos = [
  { id: "7VrBHaGzTBQ", title: "Rock Clásico en Vivo" },
  { id: "1SeAMn5ZjVA", title: "Especial Black Sabbath" },
  { id: "FBPdKP8crKs", title: "Lo Mejor de los 70s" },
  { id: "6U3qCUlRUzU", title: "Heavy Metal Nights" },
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
              className="relative aspect-video bg-[#1a1a1a] border border-[rgba(201,168,76,0.3)] rounded-lg overflow-hidden"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
