import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const PlayerBar = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) audioRef.current.volume = val;
    if (val === 0) setIsMuted(true);
    else setIsMuted(false);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume || 0.8;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  return (
    <div id="player" className="fixed bottom-0 left-0 right-0 z-50 bg-secondary border-t border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Left: Station + Live dot */}
        <div className="flex items-center gap-3 min-w-0 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse-live inline-block" />
          <div className="hidden sm:block">
            <p className="text-gold font-display text-sm tracking-wider">LEGENDS IN THE TIME</p>
            <p className="text-muted-foreground text-xs">EN VIVO</p>
          </div>
        </div>

        {/* Center: Play button */}
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center transition-all hover:bg-gold/20 hover:shadow-[0_0_20px_hsl(43_52%_54%/0.3)]"
          >
            {isPlaying ? (
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gold ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
          </button>
        </div>

        {/* Right: Volume */}
        <div className="flex items-center gap-2 shrink-0">
          <button onClick={toggleMute} className="text-muted-foreground hover:text-gold transition-colors">
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolume}
            className="w-20 sm:w-28 accent-gold h-1 cursor-pointer"
          />
        </div>
      </div>

      {/* Audio element - replace src with actual stream URL */}
      <audio ref={audioRef} src="https://stream-placeholder.example.com/live" preload="none" />
    </div>
  );
};

export default PlayerBar;
