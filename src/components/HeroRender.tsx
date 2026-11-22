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
      <ellipse cx={0} cy={150} rx={62} ry={14} fill="#2a241f" opacity="0.08" />
      {/* body */}
      <rect x={-60} y={20} width={120} height={130} rx={20} fill="#fbf7ee" stroke="#d9c7ae" strokeWidth="2" />
      <rect x={-54} y={26} width={108} height={118} rx={16} fill="#fffdf8" />
      {/* hopper top */}
      <rect x={-52} y={8} width={104} height={22} rx={11} fill="#f3ecdf" stroke="#d9c7ae" strokeWidth="2" />
      <circle cx={0} cy={8} r={5} fill={dark} />
      {/* glass window */}
      <rect x={-44} y={36} width={88} height={92} rx={14} fill="url(#hero-glass)" />
      <rect x={-44} y={36} width={88} height={92} rx={14} fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      {/* kibble falling from middle station */}
      {dispensing && [
        <circle cx={-14} cy={106} r={3.5} fill={dark} key="k1" />,
        <circle cx={-6} cy={116} r={3} fill={main} key="k2" />,
        <circle cx={2} cy={124} r={3.5} fill={dark} key="k3" />,
        <circle cx={10} cy={132} r={3} fill={main} key="k4" />,
      ]}
      {/* food line */}
      <rect x={-38} y={134} width={76} height={4} rx={2} fill="#e8ddd0" />
      {/* base */}
      <rect x={-50} y={138} width={100} height={18} rx={9} fill="#c3b29a" />
      <rect x={-46} y={142} width={92} height={10} rx={6} fill="#b7a58c" />
      {/* feet */}
      <rect x={-44} y={152} width={10} height={6} rx={2} fill="#8f7a66" />
      <rect x={34} y={152} width={10} height={6} rx={2} fill="#8f7a66" />
      {/* time label */}
      <text x={0} y={178} textAnchor="middle" fontFamily="var(--font-display)" fontSize="13" fontWeight="500" fill="#2a241f" letterSpacing="-0.01em">
        {time}
      </text>
      <text x={0} y={194} textAnchor="middle" fontSize="9.5" fontWeight="500" letterSpacing="0.1em" style={{ textTransform: 'uppercase' }} fill="#9a8e80">
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
        viewBox="0 0 660 500"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="SniffQuest concept illustration: three timed feeder stations, one dispensing kibble into a bowl for a dog"
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
        <rect x={18} y={16} width={624} height={436} rx={38} fill="#fffdf8" />
        <rect x={18} y={16} width={624} height={436} rx={38} fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
        <rect x={18} y={16} width={624} height={436} rx={38} fill="none" stroke="rgba(42,36,31,0.06)" strokeWidth="1" />

        {/* title card area (copy sits outside in HTML) */}
        <rect x={34} y={34} width={270} height={70} rx={16} fill="rgba(255,255,255,0.5)" />
        <rect x={34} y={34} width={6} height={70} rx={3} fill="#c8694f" />

        {/* stations row */}
        <g transform="translate(155, 100)">
          <StationRender time="09:30" room="Kitchen" accent="coral" />
        </g>
        <g transform="translate(330, 85)">
          <StationRender time="10:15" room="Hallway" accent="teal" dispensing />
        </g>
        <g transform="translate(505, 100)">
          <StationRender time="11:00" room="Living room" accent="sun" />
        </g>

        {/* bowl under dispensing station */}
        <g transform="translate(330, 258)" filter="url(#hero-shadow)">
          {/* bowl shadow */}
          <ellipse cx={0} cy={70} rx={52} ry={10} fill="#2a241f" opacity="0.09" />
          {/* bowl */}
          <ellipse cx={0} cy={60} rx={56} ry={34} fill="#fbf7ee" stroke="#d9c7ae" strokeWidth="2.5" />
          <ellipse cx={0} cy={56} rx={50} ry={28} fill="#fffdf8" />
          <ellipse cx={0} cy={42} rx={44} ry={6} fill="rgba(42,36,31,0.06)" />
          {/* kibble in bowl */}
          <circle cx={-20} cy={34} r={4.5} fill="#c8694f" />
          <circle cx={-8} cy={28} r={4} fill="#e89575" />
          <circle cx={6} cy={36} r={4.5} fill="#c8694f" />
          <circle cx={18} cy={30} r={4} fill="#e89575" />
          <circle cx={-2} cy={42} r={4.5} fill="#c8694f" />
          <circle cx={22} cy={44} r={4} fill="#e89575" />
          <circle cx={-28} cy={44} r={3.5} fill="#c8694f" />
          <circle cx={30} cy={46} r={3.5} fill="#c8694f" />
          <text x={0} y={86} textAnchor="middle" fontSize="10.5" fontWeight="600" letterSpacing="0.12em" style={{ textTransform: 'uppercase' }} fill="#9a8e80">
            Fresh portion
          </text>
        </g>

        {/* dog beside bowl */}
        <g transform="translate(450, 260)" filter="url(#hero-shadow)">
          {/* sitting shadow */}
          <ellipse cx={0} cy={90} rx={52} ry={10} fill="#2a241f" opacity="0.08" />
          {/* body */}
          <path d="M-22 62c0 20-18 28-28 28s-28 -8 -28 -28c0-12 14-24 28-24s28 12 28 24z" fill="#f2a65a" />
          <path d="M-22 62c0 10-14 14-22 14s-22 -4 -22 -14c0-6 8-14 22-14s22 8 22 14z" fill="#e89575" opacity="0.9" />
          {/* neck/chest */}
          <ellipse cx={-26} cy={56} rx={16} ry={14} fill="#fbf7ee" />
          {/* head */}
          <ellipse cx={-36} cy={30} rx={28} ry={24} fill="#f2a65a" />
          <ellipse cx={-40} cy={24} rx={22} ry={18} fill="#e89575" />
          {/* floppy dog ears (hang down, not pointy cat ears) */}
          <ellipse cx={-54} cy={22} rx={10} ry={18} fill="#e89575" transform="rotate(-15 -54 22)" />
          <ellipse cx={-30} cy={22} rx={10} ry={18} fill="#e89575" transform="rotate(15 -30 22)" />
          {/* inner ears */}
          <ellipse cx={-54} cy={22} rx={5} ry={9} fill="#f2a65a" transform="rotate(-15 -54 22)" />
          <ellipse cx={-30} cy={22} rx={5} ry={9} fill="#f2a65a" transform="rotate(15 -30 22)" />
          {/* longer dog muzzle */}
          <ellipse cx={-50} cy={36} rx={12} ry={10} fill="#fbf7ee" />
          <path d="M-50 44c-2 2 -4 2 -6 2s-4 0 -6 -2" stroke="#2e211d" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* eyes - softer, dog-like */}
          <circle cx={-44} cy={26} r={3} fill="#2e211d" />
          <circle cx={-38} cy={26} r={3} fill="#2e211d" />
          <circle cx={-45} cy={25} r={1.2} fill="#fffdf7" opacity="0.6" />
          <circle cx={-39} cy={25} r={1.2} fill="#fffdf7" opacity="0.6" />
          {/* nose - dog nose */}
          <ellipse cx={-54} cy={34} rx={4} ry={3} fill="#2e211d" />
          {/* happy open mouth */}
          <path d="M-52 42c0 3 5 3 5 0z" fill="#e5988b" />
          {/* collar */}
          <ellipse cx={-36} cy={48} rx={18} ry={7} fill="#c8694f" />
          <circle cx={-36} cy={48} r={3} fill="#fffdf7" />
          {/* front paws */}
          <ellipse cx={-46} cy={64} rx={8} ry={6} fill="#e89575" />
          <ellipse cx={-28} cy={64} rx={8} ry={6} fill="#e89575" />
          {/* tail */}
          <path d="M-58 46c-8 8 -12 16 -12 26" stroke="#e89575" strokeWidth="6" strokeLinecap="round" fill="none" />
          {/* label */}
          <text x={0} y={112} textAnchor="middle" fontSize="10" fontWeight="600" letterSpacing="0.12em" style={{ textTransform: 'uppercase' }} fill="#9a8e80">
            Waiting for the drop
          </text>
        </g>

        {/* soft glow behind bowl */}
        <ellipse cx={330} cy={278} rx={86} ry={46} fill="url(#hero-bowl-glow)" />
      </svg>
    </div>
  );
}
