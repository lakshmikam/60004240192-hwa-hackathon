type StationArtProps = {
  number: number;
  open?: boolean;
  size?: number;
  className?: string;
};

export default function StationArt({
  number,
  open = false,
  size = 64,
  className,
}: StationArtProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <ellipse cx="60" cy="102" rx="36" ry="7" fill="#2a241f" opacity=".08" />
      <rect
        x="24"
        y="48"
        width="72"
        height="52"
        rx="16"
        fill="#fffdf8"
        stroke="#2a241f"
        strokeWidth="3"
      />
      <path d="M24 66h72" stroke="#2a241f" strokeWidth="2.5" />
      <rect x="38" y="76" width="44" height="14" rx="7" fill="#f3ecdf" />
      <circle
        cx="60"
        cy="34"
        r="19"
        fill={open ? '#f3ded4' : '#f6e8dd'}
        stroke="#2a241f"
        strokeWidth="3"
      />
      <path
        d="M60 24v10l7 5"
        stroke="#2a241f"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="60" cy="86" r="12" fill={open ? '#c8694f' : '#f3ecdf'} />
      <text
        x="60"
        y="91"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="13"
        fontWeight="600"
        fill={open ? '#fff8f2' : '#2a241f'}
      >
        {number}
      </text>
      {open ? (
        <>
          <circle cx="46" cy="76" r="3" fill="#a95636" />
          <circle cx="56" cy="72" r="2.5" fill="#8f4a32" />
          <circle cx="67" cy="75" r="3" fill="#a95636" />
        </>
      ) : (
        <rect x="28" y="60" width="64" height="5" rx="2.5" fill="#c8694f" opacity=".85" />
      )}
    </svg>
  );
}
