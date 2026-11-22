type StationRenderProps = {
  room: string;
  time: string;
  accent: 'coral' | 'teal' | 'sun';
  featured?: boolean;
};

const ACCENT_COLORS: Record<'coral' | 'teal' | 'sun', string> = {
  coral: '#c8694f',
  teal: '#2a9d8f',
  sun: '#e9c46a',
};

export function StationRender({
  room,
  time,
  accent,
  featured = false,
}: StationRenderProps) {
  const color = ACCENT_COLORS[accent];
  return (
    <article
      className={`station-render station-render--${accent}${
        featured ? ' station-render--featured' : ''
      }`}
      style={{ '--station-accent': color } as React.CSSProperties}
    >
      <div className="station-deck">
        <div className="station-lid" />
        <div className="station-collar" />
        <div className="station-window">
          <div className="station-glass" />
          <div className="station-food" />
        </div>
        <div className="station-base" />
        <div className="station-feet" />
      </div>
      <div className="station-shadow" />
      <div className="station-label">
        <span className="station-time">{time}</span>
        <span className="station-room">{room}</span>
      </div>
    </article>
  );
}

export default function HeroRender() {
  const stations: StationRenderProps[] = [
    { room: 'Kitchen corner', time: '09:30', accent: 'coral' },
    { room: 'Hallway rug', time: '10:15', accent: 'teal', featured: true },
    { room: 'Living room', time: '11:00', accent: 'sun' },
  ];

  return (
    <div className="hero-render">
      <div className="render-deck">
        {stations.map((s, index) => (
          <StationRender key={index} {...s} />
        ))}
      </div>
    </div>
  );
}
