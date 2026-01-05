import { Play, Pause, Maximize2, Volume2, Settings } from "lucide-react";
import { useState } from "react";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Mock detection boxes for people in the bus
  const detectionBoxes = [
    { id: 1, x: 15, y: 35, width: 12, height: 28 },
    { id: 2, x: 32, y: 32, width: 11, height: 30 },
    { id: 3, x: 50, y: 38, width: 10, height: 26 },
    { id: 4, x: 68, y: 34, width: 11, height: 29 },
    { id: 5, x: 82, y: 40, width: 10, height: 24 },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Live Monitoring Preview
          </h2>
          <p className="text-muted-foreground">
            Real-time person detection in public transport
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-lg border border-border overflow-hidden shadow-sm">
            {/* Video header info */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-3 bg-gradient-to-b from-black/60 to-transparent">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-xs text-white font-medium">LIVE</span>
                </span>
                <span className="text-xs text-white/80">CAM-001 | Bus Route 42</span>
              </div>
              <span className="text-xs text-white/80 font-mono">14:32:45</span>
            </div>

            {/* Mock video frame - bus interior representation */}
            <div className="relative aspect-video bg-gradient-to-br from-muted to-accent">
              {/* Bus interior mock */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  {/* Bus seats representation */}
                  <div className="absolute inset-x-8 top-1/4 bottom-1/4 grid grid-cols-4 gap-4">
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i} 
                        className="bg-muted-foreground/20 rounded-sm border border-border/50"
                      />
                    ))}
                  </div>
                  
                  {/* Aisle */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-16 -ml-8 bg-muted-foreground/10" />
                  
                  {/* Detection boxes */}
                  {detectionBoxes.map((box) => (
                    <div
                      key={box.id}
                      className="absolute border-2 border-green-500 rounded"
                      style={{
                        left: `${box.x}%`,
                        top: `${box.y}%`,
                        width: `${box.width}%`,
                        height: `${box.height}%`,
                      }}
                    >
                      <span className="absolute -top-5 left-0 text-[10px] text-green-500 font-mono bg-black/50 px-1 rounded">
                        ID:{box.id}
                      </span>
                    </div>
                  ))}

                  {/* Detection count overlay */}
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded text-sm">
                    <span className="font-mono">Detected: </span>
                    <span className="font-bold text-green-400">5 people</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video controls */}
            <div className="flex items-center justify-between p-3 bg-card border-t border-border">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 hover:bg-accent rounded-md transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 text-foreground" />
                  ) : (
                    <Play className="h-5 w-5 text-foreground" />
                  )}
                </button>
                <button className="p-2 hover:bg-accent rounded-md transition-colors">
                  <Volume2 className="h-5 w-5 text-muted-foreground" />
                </button>
                
                {/* Progress bar */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-mono">00:00</span>
                  <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
                    <div className="w-0 h-full bg-foreground rounded-full" />
                  </div>
                  <span className="font-mono">LIVE</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-accent rounded-md transition-colors">
                  <Settings className="h-5 w-5 text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-accent rounded-md transition-colors">
                  <Maximize2 className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
