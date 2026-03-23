import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const PlayerBar = () => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div id="player" className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a] border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Left: Station + Live dot */}
        <div className="flex items-center gap-3 min-w-0 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse-live inline-block" />
          <div className="hidden sm:block">
            <p className="text-gold font-display text-sm tracking-wider">LEGENDS IN THE TIME</p>
            <p className="text-muted-foreground text-xs">EN VIVO</p>
          </div>
        </div>

        {/* Center: Player iframe */}
        <div className="flex items-center justify-center">
          <iframe src='https://cloudstream2036.conectarhosting.com/cp/widgets/player/single/?p=8272' width='300' height='50' frameBorder='0' scrolling='no' style={{border:'none', background:'transparent'}} />
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
            value={isMuted ? 0 : 0.8}
            onChange={() => {}}
            className="w-20 sm:w-28 accent-gold h-1 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;
