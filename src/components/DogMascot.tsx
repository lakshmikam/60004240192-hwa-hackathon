type DogMascotProps = {
  size?: number;
  mood?: 'happy' | 'sniffing';
  className?: string;
  title?: string;
};

export default function DogMascot({
  size = 180,
  mood = 'happy',
  className,
  title,
}: DogMascotProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <defs>
        <linearGradient id="dogBodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4c28a" />
          <stop offset="1" stopColor="#e89575" />
        </linearGradient>
        <linearGradient id="dogHeadGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6d19a" />
          <stop offset="1" stopColor="#e89575" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="100" cy="182" rx="52" ry="12" fill="#2a241f" opacity="0.1" />

      {/* Body (sitting) */}
      <path
        d="M42 120 C32 120 28 130 34 142 C40 154 56 158 68 152 C80 146 86 136 82 126 C78 116 68 116 58 122 C50 128 46 124 42 120 Z"
        fill="url(#dogBodyGrad)"
      />
      <path
        d="M112 120 C122 120 126 130 120 142 C114 154 98 158 86 152 C74 146 68 136 72 126 C76 116 86 116 96 122 C104 128 108 124 112 120 Z"
        fill="#e89575"
        opacity="0.7"
      />

      {/* Back leg */}
      <ellipse cx="62" cy="156" rx="12" ry="8" fill="#d4a373" />

      {/* Tail */}
      <path
        d="M70 128 Q85 118 92 126"
        stroke="#e89575"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Head */}
      <circle cx="100" cy="82" rx="34" ry="30" fill="url(#dogHeadGrad)" />

      {/* Left floppy ear */}
      <path
        d="M72 72 Q60 60 68 90 Q72 100 82 90 Q86 82 78 76 Z"
        fill="#e89575"
      />
      <path
        d="M74 76 Q68 66 70 94 Q74 102 84 92 Q88 84 80 78 Z"
        fill="#d4a373"
        opacity="0.6"
      />

      {/* Right floppy ear */}
      <path
        d="M128 72 Q140 60 132 90 Q128 100 118 90 Q114 82 122 76 Z"
        fill="#e89575"
      />
      <path
        d="M126 76 Q132 66 130 94 Q126 102 116 92 Q112 84 120 78 Z"
        fill="#d4a373"
        opacity="0.6"
      />

      {/* Inner ears */}
      <ellipse cx="76" cy="86" rx="8" ry="10" fill="#f6d19a" transform="rotate(-15 76 86)" />
      <ellipse cx="124" cy="86" rx="8" ry="10" fill="#f6d19a" transform="rotate(15 124 86)" />

      {/* Snout / muzzle */}
      <ellipse cx="100" cy="104" rx="20" ry="16" fill="#f9e3c8" />
      <ellipse cx="100" cy="100" rx="14" ry="10" fill="#fffdf8" opacity="0.8" />

      {/* Nose */}
      <ellipse cx="100" cy="110" rx="7" ry="5" fill="#4a3728" />

      {/* Mouth / smile */}
      <path
        d="M92 116 Q100 124 108 116"
        stroke="#4a3728"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {mood === 'happy' && (
        <path d="M96 122 Q100 128 104 122" stroke="#e5988b" strokeWidth="3" strokeLinecap="round" fill="none" />
      )}

      {/* Eyes */}
      <circle cx="86" cy="76" r="5" fill="#3e2723" />
      <circle cx="114" cy="76" r="5" fill="#3e2723" />
      <circle cx="87" cy="74.5" r="2" fill="#ffffff" opacity="0.8" />
      <circle cx="115" cy="74.5" r="2" fill="#ffffff" opacity="0.8" />

      {/* Eyebrows */}
      <path d="M82 70 Q86 66 90 70" stroke="#4a3728" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M110 70 Q106 66 102 70" stroke="#4a3728" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Cheeks */}
      <ellipse cx="74" cy="100" rx="5" ry="4" fill="#f0b49a" opacity="0.6" />
      <ellipse cx="126" cy="100" rx="5" ry="4" fill="#f0b49a" opacity="0.6" />

      {/* Collar */}
      <ellipse cx="100" cy="122" rx="24" ry="8" fill="#c8694f" />
      <circle cx="100" cy="122" r="4" fill="#fffdf8" />

      {/* Chest patch */}
      <ellipse cx="100" cy="140" rx="16" ry="10" fill="#f9e3c8" opacity="0.6" />

      {/* Front paws */}
      <ellipse cx="88" cy="156" rx="10" ry="7" fill="#f9e3c8" />
      <ellipse cx="112" cy="156" rx="10" ry="7" fill="#f9e3c8" />

      {/* Sniffing expression */}
      {mood === 'sniffing' && (
        <>
          <path
            d="M84 82 Q88 88 92 82"
            stroke="#4a3728"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M116 82 Q112 88 108 82"
            stroke="#4a3728"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </>
      )}
    </svg>
  );
}
