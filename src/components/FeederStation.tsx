import { useId } from 'react';

type FeederStationProps = {
  number?: number;
  open?: boolean;
  size?: number;
  className?: string;
  title?: string;
};

export default function FeederStation({
  number = 1,
  open = false,
  size = 170,
  className,
  title,
}: FeederStationProps) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const body = `body-${uid}`;
  const lid = `lid-${uid}`;
  const glass = `glass-${uid}`;
  const metal = `metal-${uid}`;
  const coral = `coral-${uid}`;
  const glow = `glow-${uid}`;
  const hopperClip = `hopper-${uid}`;

  const handAngle = number === 1 ? -55 : number === 2 ? 5 : 65;

  return (
    <svg
      width={size}
      height={Math.round(size * 1.18)}
      viewBox="0 0 200 236"
      className={className}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <defs>
        <linearGradient id={body} x1="0.05" y1="0" x2="0.95" y2="1">
          <stop offset="0" stopColor="#fffefa" />
          <stop offset="0.42" stopColor="#f7efe2" />
          <stop offset="0.78" stopColor="#eadcc8" />
          <stop offset="1" stopColor="#d9c7ae" />
        </linearGradient>
        <linearGradient id={lid} x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#fffefa" />
          <stop offset="0.7" stopColor="#f2e8d9" />
          <stop offset="1" stopColor="#e2d4c0" />
        </linearGradient>
        <linearGradient id={glass} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#655a4f" />
          <stop offset="0.45" stopColor="#352e27" />
          <stop offset="1" stopColor="#1d1814" />
        </linearGradient>
        <linearGradient id={metal} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f8f1e6" />
          <stop offset="0.5" stopColor="#ded1bf" />
          <stop offset="1" stopColor="#c3b29a" />
        </linearGradient>
        <linearGradient id={coral} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d47a5e" />
          <stop offset="1" stopColor="#b4573e" />
        </linearGradient>
        <radialGradient id={glow} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#c8694f" stopOpacity="0.38" />
          <stop offset="1" stopColor="#c8694f" stopOpacity="0" />
        </radialGradient>
        <clipPath id={hopperClip}>
          <rect x="54" y="72" width="92" height="62" rx="18" />
        </clipPath>
      </defs>

      {open && (
        <ellipse cx="100" cy="198" rx="72" ry="34" fill={`url(#${glow})`} />
      )}
      <ellipse cx="100" cy="225" rx="58" ry="8" fill="#2a241f" opacity="0.1" />

      <rect x="54" y="207" width="22" height="14" rx="7" fill={`url(#${metal})`} />
      <rect x="124" y="207" width="22" height="14" rx="7" fill={`url(#${metal})`} />

      <rect
        x="34"
        y="46"
        width="132"
        height="168"
        rx="30"
        fill={`url(#${body})`}
        stroke="#d7c5ad"
        strokeWidth="1.6"
      />
      <rect
        x="38.5"
        y="50.5"
        width="123"
        height="159"
        rx="26"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.72"
        strokeWidth="1.2"
      />

      <rect
        x="40"
        y="35"
        width="120"
        height="34"
        rx="17"
        fill={`url(#${lid})`}
        stroke="#d7c5ad"
        strokeWidth="1.5"
      />
      <path d="M44 52h112" stroke="#d7c5ad" strokeWidth="1.2" />
      <circle cx="100" cy="44" r="2.6" fill={`url(#${coral})`} />

      <rect
        x="52"
        y="70"
        width="96"
        height="66"
        rx="20"
        fill={`url(#${metal})`}
      />
      <rect
        x="54"
        y="72"
        width="92"
        height="62"
        rx="18"
        fill={`url(#${glass})`}
      />

      <g clipPath={`url(#${hopperClip})`}>
        <g fill="#b97844">
          <rect x="62" y="108" width="12" height="9" rx="4" transform="rotate(-14 68 112)" />
          <rect x="78" y="114" width="13" height="9" rx="4" transform="rotate(8 84 118)" />
          <rect x="95" y="106" width="12" height="9" rx="4" transform="rotate(-6 101 110)" />
          <rect x="111" y="113" width="13" height="9" rx="4" transform="rotate(16 117 117)" />
          <rect x="126" y="106" width="12" height="9" rx="4" transform="rotate(-10 132 110)" />
        </g>
        <g fill="#8f5a32">
          <rect x="68" y="122" width="12" height="9" rx="4" transform="rotate(10 74 126)" />
          <rect x="86" y="125" width="11" height="8" rx="4" transform="rotate(-8 91 129)" />
          <rect x="102" y="121" width="12" height="9" rx="4" transform="rotate(6 108 125)" />
          <rect x="118" y="125" width="12" height="8" rx="4" transform="rotate(-12 124 129)" />
        </g>
        <path d="M66 74h34L73 132H56z" fill="#ffffff" opacity="0.12" />
        <path d="M112 74h18l-12 58h-8z" fill="#ffffff" opacity="0.07" />
      </g>

      <rect
        x="54"
        y="72"
        width="92"
        height="62"
        rx="18"
        fill="none"
        stroke={`url(#${coral})`}
        strokeOpacity="0.65"
        strokeWidth="1.6"
      />

      <circle cx="100" cy="162" r="18" fill="#f3ecdf" stroke="#d7c5ad" strokeWidth="1.4" />
      <circle cx="100" cy="162" r="14" fill="#fffdf8" />
      <g stroke="#c9b9a2" strokeWidth="1.2" strokeLinecap="round">
        <path d="M100 150v3" />
        <path d="M100 171v3" />
        <path d="M88 162h3" />
        <path d="M109 162h3" />
        <path d="M91.5 153.5l2 2" />
        <path d="M106.5 168.5l2 2" />
        <path d="M108.5 153.5l-2 2" />
        <path d="M93.5 168.5l-2 2" />
      </g>
      <g transform={`rotate(${handAngle} 100 162)`}>
        <path d="M100 162V152" stroke={`url(#${coral})`} strokeWidth="2.4" strokeLinecap="round" />
      </g>
      <circle cx="100" cy="162" r="2.4" fill={`url(#${coral})`} />

      <rect x="86" y="186" width="28" height="9" rx="4.5" fill="#2a241f" opacity="0.82" />
      <rect x="54" y="198" width="92" height="13" rx="6.5" fill={`url(#${metal})`} stroke="#d3c5b2" strokeWidth="1" />

      {open && (
        <g fill="#b97844">
          <circle cx="80" cy="197" r="3" />
          <circle cx="91" cy="195" r="2.4" />
          <circle cx="103" cy="197" r="2.8" />
          <circle cx="115" cy="196" r="2.3" />
        </g>
      )}

      <circle cx="139" cy="187" r="2.6" fill={open ? `url(#${coral})` : '#c6b6a0'} />
      {open && <circle cx="139" cy="187" r="6" fill={`url(#${glow})`} />}

      <g fill="#b8a48c">
        <ellipse cx="68" cy="62" rx="2.1" ry="2.6" />
        <ellipse cx="73" cy="60.5" rx="1.9" ry="2.5" />
        <ellipse cx="78" cy="62" rx="2.1" ry="2.6" />
        <path d="M73 65c2.4 0 4.3 1.5 4.3 3.3 0 1.4-1.2 2.3-2.5 2.3-.7 0-1.2-.3-1.8-.3s-1.1.3-1.8.3c-1.3 0-2.5-.9-2.5-2.3 0-1.8 1.9-3.3 4.3-3.3z" />
      </g>
    </svg>
  );
}
