export const CircuitBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* We create a 400x400 repeating tile */}
          <pattern
            id="circuit-board"
            x="0"
            y="0"
            width="400"
            height="400"
            patternUnits="userSpaceOnUse"
          >
            <g className="text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {/* Central 'Chip' Graphic */}
              <rect x="160" y="160" width="80" height="80" rx="8" strokeWidth="3" />
              <rect x="175" y="175" width="50" height="50" rx="4" />
              <path d="M 190 200 L 210 200 M 200 190 L 200 210" />

              {/* Top Left Traces */}
              <path d="M 160 180 H 120 V 100 H 60 V 60" />
              <circle cx="60" cy="60" r="5" fill="currentColor" />
              <path d="M 175 160 V 120 H 140 V 80" />
              <circle cx="140" cy="80" r="4" fill="currentColor" />

              {/* Bottom Left Traces */}
              <path d="M 160 220 H 100 V 280 H 40" />
              <circle cx="40" cy="280" r="6" fill="currentColor" />
              <path d="M 180 240 V 300 H 120 V 340" />
              <circle cx="120" cy="340" r="4" fill="currentColor" />

              {/* Top Right Traces */}
              <path d="M 240 180 H 280 V 140 H 340 V 100" />
              <circle cx="340" cy="100" r="5" fill="currentColor" />
              <path d="M 220 160 V 80 H 260 V 40" />
              <circle cx="260" cy="40" r="6" fill="currentColor" />

              {/* Bottom Right Traces */}
              <path d="M 240 220 H 300 V 260 H 360" />
              <circle cx="360" cy="260" r="5" fill="currentColor" />
              <path d="M 220 240 V 320 H 280 V 360" />
              <circle cx="280" cy="360" r="4" fill="currentColor" />
              
              {/* Floating standalone traces to fill empty space */}
              <path d="M 20 200 H 60 V 160" strokeWidth="1.5" className="opacity-50" />
              <circle cx="20" cy="200" r="3" fill="currentColor" className="opacity-50" />
              
              <path d="M 380 160 H 320 V 200" strokeWidth="1.5" className="opacity-50" />
              <circle cx="380" cy="160" r="3" fill="currentColor" className="opacity-50" />
            </g>
          </pattern>
          
          {/* Subtle radial gradient mask to make the pattern fade out at the edges of the section */}
          <radialGradient id="fade-mask" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.2" />
          </radialGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#circuit-board)" mask="url(#fade-mask)" />
      </svg>
    </div>
  );
};