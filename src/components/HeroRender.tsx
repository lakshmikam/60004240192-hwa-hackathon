type StationProps = {
  time: string;
  room: string;
  accent: string;
  dispensing?: boolean;
};

const ACCENT_COLORS: Record<string, { main: string; dark: string }> = {
  coral: { main: '#e89575', dark: '#c8694f' },
  teal: { main: '#7fc7c1', dark: '#2a9d8f' },
  sun: { main: '#f2cf6b', dark: '#e9c46a' },
};

export function StationRender({ time, room, accent, dispensing = false }: StationProps) {
  const { main, dark } = ACCENT_COLORS[accent];
  return (
    <g className="station">
      {/* shadow */}
      <ellipse cx={0} cy={162} rx={66} ry={12} fill="#2a241f" opacity="0.08" />

      {/* base / feet */}
      <rect x={-44} y={146} width={88} height={14} rx={7} fill="#c3b29a" stroke="#b7a58c" strokeWidth="1" />
      <rect x={-40} y={150} width={80} height="8" rx="4" fill="#b7a58c" />
      <rect x={-38} y={156} width="10" height="6" rx="3" fill="#8f7a66" />
      <rect x={28} y={156} width="10" height="6" rx="3" fill="#8f7a66" />

      {/* body - ceramic */}
      <rect x={-56} y={32} width="112" height="116" rx="24" fill="#fffdf8" stroke="#d9c7ae" strokeWidth="2" />
      <rect x={-52} y={36} width="104" height="108" rx="20" fill="#fbf7ee" />

      {/* lid */}
      <rect x={-50} y={14} width="100" height="24" rx="12" fill="#f3ecdf" stroke="#d9c7ae" strokeWidth="2" />
      <rect x={-46} y={16} width="92" height="18" rx="10" fill="#eadcc8" />
      {/* lid handle */}
      <rect x={-3} y={10} width="6" height="6" rx="3" fill={dark} />
      <circle cx={0} cy={13} r="1.5" fill="#fffdf8" />

      {/* timer control dial */}
      <circle cx={0} cy={34} r="13" fill="#e8ddd0" stroke="#d9c7ae" strokeWidth="2" />
      <circle cx={0} cy={34} r="9" fill="#f3ecdf" />
      {/* timer markings */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <path
          key={deg}
          d="M0 -9 L0 -13"
          stroke="#9a8e80"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform={`rotate(${deg} 0 34)`}
        />
      ))}
      {/* timer hand */}
      <path d="M0 34 L4 26" stroke={dark} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx={0} cy={34} r="2" fill="#fffdf8" />

      {/* food compartment window */}
      <rect x={-42} y={46} width="84" height="64" rx="12" fill="url(#hero-glass)" />
      <rect x={-42} y={46} width="84" height="64" rx="12" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />

      {/* kibble inside window */}
      <g opacity="0.9">
        <circle cx={-26} cy={58} r="4" fill={dark} />
        <circle cx={-14} cy={64} r="3.5" fill={main} />
        <circle cx={0} cy={56} r="4" fill={dark} />
        <circle cx={14} cy={62} r="3.5" fill={main} />
        <circle cx={26} cy={58} r="4" fill={dark} />
      </g>

      {/* dispensing opening */}
      <path d="M-30 110 Q0 122 30 110" fill="none" stroke="#9a8e80" strokeWidth="2" strokeLinecap="round" />

      {/* kibble falling from middle station */}
      {dispensing && [
        <circle cx={-16} cy={128} r="3.5" fill={dark} key="k1" />,
        <circle cx={-6} cy={138} r="3" fill={main} key="k2" />,
        <circle cx={4} cy={148} r="3.5" fill={dark} key="k3" />,
        <circle cx={14} cy={158} r="3" fill={main} key="k4" />,
      ]}

      {/* time label */}
      <text x={0} y={180} textAnchor="middle" fontFamily="var(--font-display)" fontSize="12" fontWeight="500" fill="#2a241f" letterSpacing="-0.01em">
        {time}
      </text>
      <text x={0} y={196} textAnchor="middle" fontSize="9" fontWeight="500" letterSpacing="0.1em" style={{ textTransform: 'uppercase' }} fill="#9a8e80">
        {room}
      </text>
    </g>
  );
}

export default function HeroRender() {
  return (
    <div className="hero-render">
      <svg
        className="hero-illustration"
        viewBox="0 0 700 540"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="SniffQuest concept illustration: three physical feeder stations with timers, one dispensing kibble into a bowl for a dog"
      >
        <defs>
          <linearGradient id="hero-glass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.25" />
            <stop offset="1" stopColor="#e8ddd0" stopOpacity="0.45" />
          </linearGradient>
          <radialGradient id="hero-bowl-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#e89575" stopOpacity="0.35" />
            <stop offset="1" stopColor="#e89575" stopOpacity="0" />
          </radialGradient>
          <filter id="hero-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation={12} />
            <feOffset dx={0} dy={18} result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.12" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* soft backdrop card */}
        <rect x={18} y={16} width="664" height="476" rx="38" fill="#fffdf8" />
        <rect x={18} y={16} width="664" height="476" rx="38" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
        <rect x={18} y={16} width="664" height="476" rx="38" fill="none" stroke="rgba(42,36,31,0.06)" strokeWidth="1" />

        {/* title card area (copy sits outside in HTML) */}
        <rect x={34} y={34} width="270" height="70" rx="16" fill="rgba(255,255,255,0.5)" />

        {/* stations row */}
        <g transform="translate(150, 70)">
          <StationRender time="09:30" room="Kitchen" accent="coral" />
        </g>
        <g transform="translate(350, 55)">
          <StationRender time="10:15" room="Hallway" accent="teal" dispensing />
        </g>
        <g transform="translate(550, 70)">
          <StationRender time="11:00" room="Living room" accent="sun" />
        </g>

        {/* bowl directly beneath the middle feeder dispensing opening */}
        <g transform="translate(350, 185)" filter="url(#hero-shadow)">
          {/* bowl shadow */}
          <ellipse cx={0} cy="78" rx="56" ry="10" fill="#2a241f" opacity="0.09" />
          {/* bowl */}
          <ellipse cx={0} cy="68" rx="60" ry="38" fill="#fbf7ee" stroke="#d9c7ae" strokeWidth="3" />
          <ellipse cx={0} cy="64" rx="54" ry="32" fill="#fffdf8" />
          <ellipse cx={0} cy="50" rx="48" ry="6" fill="rgba(42,36,31,0.06)" />
          {/* kibble in bowl */}
          <circle cx={-22} cy="38" r="5" fill="#c8694f" />
          <circle cx={-10} cy="32" r="4.5" fill="#e89575" />
          <circle cx={2} cy="40" r="5" fill="#c8694f" />
          <circle cx={14} cy="34" r="4.5" fill="#e89575" />
          <circle cx={-4} cy="46" r="5" fill="#c8694f" />
          <circle cx={18} cy="48" r="4.5" fill="#e89575" />
          <circle cx={-26} cy="48" r="4" fill="#c8694f" />
          <circle cx={28} cy="50" r="4" fill="#c8694f" />
          <text x={0} y="94" textAnchor="middle" fontSize="10.5" fontWeight="600" letterSpacing="0.12em" style={{ textTransform: 'uppercase' }} fill="#9a8e80">
            Fresh portion
          </text>
        </g>

        {/* dog beside bowl */}
        <g transform="translate(500, 185)" filter="url(#hero-shadow)">
          {/* sitting shadow */}
          <ellipse cx={0} cy="96" rx="50" ry="10" fill="#2a241f" opacity="0.08" />

          {/* body */}
          <path d="M-26 70 C-20 70 -24 76 -28 86 C-32 96 -22 106 -14 100 C-6 94 -4 82 -8 74 C-16 68 -26 68 -26 70 Z" fill="#f4c28a" />
          <path d="M-26 70 C-16 70 -20 76 -24 86 C-28 96 -18 106 -10 100 C-2 94 0 82 -6 74 C-14 68 -22 68 -26 70 Z" fill="#e89575" opacity="0.85" />

          {/* neck/chest */}
          <ellipse cx={-12} cy="66" rx="18" ry="14" fill="#fbf7ee" />

          {/* head */}
          <ellipse cx={-20} cy="36" rx="28" ry="24" fill="#f4c28a" />
          <ellipse cx={-24} cy="30" rx="22" ry="18" fill="#e89575" />

          {/* floppy ears */}
          <path d="M-42 28 Q-50 18 -44 46 Q-40 56 -34 46 Q-36 36 -42 28 Z" fill="#e89575" />
          <path d="M-44 30 Q-48 22 -42 42 Q-38 52 -32 42 Q-34 34 -44 30 Z" fill="#f4c28a" opacity="0.7" />
          <path d="M-4 28 Q4 18 -2 46 Q2 56 8 46 Q6 36 -4 28 Z" fill="#e89575" />
          <path d="M-6 30 Q-2 22 2 42 Q6 52 10 42 Q8 34 -6 30 Z" fill="#f4c28a" opacity="0.7" />

          {/* inner ears */}
          <ellipse cx={-42} cy="38" rx="7" ry="9" fill="#f6d19a" transform="rotate(-15 -42 38)" />
          <ellipse cx={2} cy="38" rx="7" ry="9" fill="#f6d19a" transform="rotate(15 2 38)" />

          {/* muzzle */}
          <ellipse cx={-26} cy="44" rx="16" ry="12" fill="#f9e3c8" />
          <ellipse cx={-26} cy="42" rx="10" ry="7" fill="#fffdf8" opacity="0.8" />

          {/* nose */}
          <ellipse cx={-30} cy="42" rx="5" ry="4" fill="#4a3728" />

          {/* smile */}
          <path d="M-32 48 Q-26 54 -20 48" stroke="#4a3728" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* eyes */}
          <circle cx={-34} cy="32" r="4" fill="#3e2723" />
          <circle cx={-18} cy="32" r="4" fill="#3e2723" />
          <circle cx={-35} cy="31" r="1.5" fill="#ffffff" opacity="0.8" />
          <circle cx={-19} cy="31" r="1.5" fill="#ffffff" opacity="0.8" />

          {/* collar */}
          <ellipse cx={-20} cy="52" rx="20" ry="7" fill="#c8694f" />
          <circle cx={-20} cy="52" r="3" fill="#fffdf8" />

          {/* front paws */}
          <ellipse cx={-30} cy="68" rx="10" ry="7" fill="#f9e3c8" />
          <ellipse cx={-10} cy="68" rx="10" ry="7" fill="#f9e3c8" />

          {/* tail */}
          <path d="M-46 44 Q-56 36 -58 52" stroke="#e89575" strokeWidth="5" strokeLinecap="round" fill="none" />
        </g>

        {/* soft glow behind bowl */}
        <ellipse cx={350} cy="203" rx="90" ry="50" fill="url(#hero-bowl-glow)" />
      </svg>
    </div>
  );
}
