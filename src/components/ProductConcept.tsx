type StepProps = {
  step: number;
  title: string;
  copy: string;
};

export default function ProductConcept() {
  const steps: StepProps[] = [
    {
      step: 1,
      title: 'Load',
      copy: 'Fill each station with a portion of your dog’s usual food. Removable cups make it quick.',
    },
    {
      step: 2,
      title: 'Set',
      copy: 'Turn the timer dial on each station to its own release time — three drops, spaced apart.',
    },
    {
      step: 3,
      title: 'Release',
      copy: 'Each station opens at its set time, dropping food into its bowl. Three hunts, one meal.',
    },
  ];

  return (
    <section className="product-concept">
      <div className="container">
        <span className="eyebrow">How it works</span>
        <h2>Load · Set · Release</h2>
        <p className="concept-lede">
          Three physical stations, each with its own timer. Load once, set three
          times, and let your dog hunt while you’re away.
        </p>

        {/* Three-step illustration */}
        <div className="steps-row">
          {steps.map((s) => (
            <article key={s.step} className={`step-card step-card--${s.step}`}>
              <div className="step-number">{s.step}</div>
              <div className="step-illustration">
                {s.step === 1 && <StationState type="load" />}
                {s.step === 2 && <StationState type="set" />}
                {s.step === 3 && <StationState type="release" />}
              </div>
              <h4>{s.title}</h4>
              <p>{s.copy}</p>
            </article>
          ))}
        </div>

        {/* Kit placement around home */}
        <div className="placement-wrap">
          <div className="placement-left">
            <span className="eyebrow">Kit placement</span>
            <h2>One kit, three rooms.</h2>
            <p>
              The Starter Quest includes three stations. Place them around your
              home — kitchen, hallway, living room — so your dog follows a
              scent trail instead of eating from one bowl.
            </p>
          </div>

          <div className="placement-right">
            <div className="home-map">
              <div className="room room--kitchen">
                <StationMini number={1} room="Kitchen" time="09:30" accent="coral" />
              </div>
              <div className="room room--hallway">
                <StationMini number={2} room="Hallway" time="10:15" accent="teal" />
              </div>
              <div className="room room--living">
                <StationMini number={3} room="Living room" time="11:00" accent="sun" />
              </div>
              <div className="home-label label--start">You head out</div>
              <div className="home-label label--end">Last drop</div>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="comparison-wrap">
          <div className="comparison-head">
            <span className="eyebrow">Vs a single timed feeder</span>
            <h2>Three stations beat one bowl.</h2>
          </div>
          <div className="comparison-table">
            <div className="comp-row">
              <div className="comp-label">Single timed feeder</div>
              <div className="comp-cell comp-cell--no">
                <span className="comp-icon">✕</span>
                One bowl, one release — dog gulps it in seconds
              </div>
            </div>
            <div className="comp-row">
              <div className="comp-label">SniffQuest (3 stations)</div>
              <div className="comp-cell comp-cell--yes">
                <span className="comp-icon">✓</span>
                Three releases in three rooms — a real treasure hunt
              </div>
            </div>
            <div className="comp-row">
              <div className="comp-label">Time occupied</div>
              <div className="comp-cell comp-cell--no">
                <span className="comp-icon">✕</span>
                Seconds
              </div>
            </div>
            <div className="comp-row">
              <div className="comp-label">SniffQuest</div>
              <div className="comp-cell comp-cell--yes">
                <span className="comp-icon">✓</span>
                Hours — sniff, eat, search again
              </div>
            </div>
            <div className="comp-row">
              <div className="comp-label">Mental enrichment</div>
              <div className="comp-cell comp-cell--no">
                <span className="comp-icon">✕</span>
                None
              </div>
            </div>
            <div className="comp-row">
              <div className="comp-label">SniffQuest</div>
              <div className="comp-cell comp-cell--yes">
                <span className="comp-icon">✓</span>
                Nose work, problem solving, calm
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type StationStateProps = { type: 'load' | 'set' | 'release' };

function StationState({ type }: StationStateProps) {
  return (
    <svg
      viewBox="0 0 200 220"
      className="station-svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fffdf8" />
          <stop offset="1" stopColor="#eadcc8" />
        </linearGradient>
        <linearGradient id="dialGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c8694f" />
          <stop offset="1" stopColor="#a44f38" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="1" stopColor="#e8ddd0" stopOpacity="0.4" />
        </linearGradient>
        <radialGradient id="foodGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#e89575" stopOpacity="0.5" />
          <stop offset="1" stopColor="#c8694f" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="100" cy="195" rx="60" ry="12" fill="#2a241f" opacity="0.08" />

      {/* Station body */}
      <rect x="30" y="25" width="140" height="140" rx="22" fill="url(#bodyGrad)" stroke="#d9c7ae" strokeWidth="2" />
      <rect x="36" y="31" width="128" height="128" rx="18" fill="#fffdf8" />

      {/* Top rim */}
      <rect x="34" y="19" width="132" height="14" rx="10" fill="#e8ddd0" stroke="#d9c7ae" strokeWidth="1.5" />

      {/* Timer dial */}
      <circle cx="100" cy="52" r="18" fill="url(#dialGrad)" stroke="#8f5a32" strokeWidth="2" />
      <circle cx="100" cy="52" r="4" fill="#fffdf8" />
      {/* Dial hand */}
      {type === 'load' && (
        <path d="M100 52 L116 42" stroke="#fffdf8" strokeWidth="3" strokeLinecap="round" />
      )}
      {type === 'set' && (
        <path d="M100 52 L110 38" stroke="#fffdf8" strokeWidth="3" strokeLinecap="round" />
      )}
      {type === 'release' && (
        <path d="M100 52 L104 36" stroke="#fffdf8" strokeWidth="3" strokeLinecap="round" />
      )}
      {/* Dial ticks */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <path
          key={deg}
          d={`M100 36 L100 30`}
          stroke="#8f5a32"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${deg} 100 52)`}
        />
      ))}

      {/* Food compartment window */}
      <rect x="52" y="72" width="96" height="56" rx="12" fill="url(#glassGrad)" stroke="#d9c7ae" strokeWidth="1.5" />
      <rect x="52" y="72" width="96" height="56" rx="12" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />

      {/* Food inside */}
      {type === 'load' && (
        <g opacity="0.9">
          <circle cx="70" cy="88" r="5" fill="#c8694f" />
          <circle cx="85" cy="94" r="4" fill="#e89575" />
          <circle cx="100" cy="86" r="5" fill="#c8694f" />
          <circle cx="115" cy="92" r="4" fill="#e89575" />
          <circle cx="130" cy="88" r="5" fill="#c8694f" />
          <circle cx="88" cy="98" r="4" fill="#e89575" />
          <circle cx="108" cy="90" r="5" fill="#c8694f" />
          <text x="100" y="116" textAnchor="middle" fontSize="10" fontWeight="600" fill="#9a8e80" style={{ textTransform: 'uppercase' }}>
            Food compartment
          </text>
        </g>
      )}
      {type === 'set' && (
        <g opacity="0.6">
          <circle cx="70" cy="88" r="5" fill="#c8694f" />
          <circle cx="85" cy="94" r="4" fill="#e89575" />
          <circle cx="100" cy="86" r="5" fill="#c8694f" />
          <circle cx="115" cy="92" r="4" fill="#e89575" />
          <circle cx="130" cy="88" r="5" fill="#c8694f" />
          <circle cx="88" cy="98" r="4" fill="#e89575" />
          <circle cx="108" cy="90" r="5" fill="#c8694f" />
          <text x="100" y="116" textAnchor="middle" fontSize="10" fontWeight="600" fill="#9a8e80" style={{ textTransform: 'uppercase' }}>
            Timer set
          </text>
        </g>
      )}
      {type === 'release' && (
        <g>
          {/* Food falling */}
          <circle cx="92" cy="128" r="5" fill="#c8694f" />
          <circle cx="108" cy="122" r="4" fill="#e89575" />
          <circle cx="96" cy="136" r="5" fill="#c8694f" />
          <circle cx="104" cy="130" r="4" fill="#e89575" />
          <text x="100" y="116" textAnchor="middle" fontSize="10" fontWeight="600" fill="#9a8e80" style={{ textTransform: 'uppercase' }}>
            Releasing
          </text>
        </g>
      )}

      {/* Base */}
      <rect x="40" y="155" width="120" height="22" rx="11" fill="#c3b29a" />
      <rect x="44" y="159" width="112" height="14" rx="8" fill="#b7a58c" />

      {/* Bowl under release state */}
      {type === 'release' && (
        <g transform="translate(100, 168)">
          <ellipse cx="0" cy="6" rx="34" ry="6" fill="#2a241f" opacity="0.08" />
          <ellipse cx="0" cy="2" rx="38" ry="14" fill="#fbf7ee" stroke="#d9c7ae" strokeWidth="2" />
          <ellipse cx="0" cy="0" rx="32" ry="10" fill="#fffdf8" />
          <circle cx={-14} cy={-2} r={4} fill="#c8694f" />
          <circle cx={-6} cy={-6} r={3.5} fill="#e89575" />
          <circle cx={2} cy={-2} r={4} fill="#c8694f" />
          <circle cx={10} cy={-6} r={3.5} fill="#e89575" />
          <circle cx={-2} cy={2} r={4} fill="#c8694f" />
          <text x={0} y={18} textAnchor="middle" fontSize="9" fontWeight="600" fill="#9a8e80" style={{ textTransform: 'uppercase' }}>
            Bowl
          </text>
        </g>
      )}
    </svg>
  );
}

type StationMiniProps = {
  number: number;
  room: string;
  time: string;
  accent: string;
};

function StationMini({ number, room, time, accent }: StationMiniProps) {
  const accentColors: Record<string, string> = {
    coral: '#c8694f',
    teal: '#2a9d8f',
    sun: '#e9c46a',
  };
  const color = accentColors[accent];

  return (
    <div className="station-mini">
      <svg viewBox="0 0 120 140" className="mini-svg" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={`bodyMini${number}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fffdf8" />
            <stop offset="1" stopColor="#eadcc8" />
          </linearGradient>
        </defs>
        <rect x="10" y="10" width="100" height="90" rx="14" fill="url(#bodyMini${number})" stroke="#d9c7ae" strokeWidth="1.5" />
        <circle cx="60" cy="28" r="12" fill={color} />
        <rect x="20" y="32" width="80" height="40" rx="8" fill="#fbf7ee" stroke="#d9c7ae" strokeWidth="1" />
        <rect x="20" y="62" width="80" height="12" rx="6" fill="#c3b29a" />
        {/* kibble dots */}
        {number === 1 && (
          <g fill="#c8694f">
            <circle cx="40" cy="44" r="2.5" />
            <circle cx="55" cy="42" r="2.5" />
            <circle cx="70" cy="46" r="2.5" />
          </g>
        )}
        {number === 2 && (
          <g fill="#c8694f">
            <circle cx="45" cy="44" r="2.5" />
            <circle cx="60" cy="46" r="2.5" />
            <circle cx="75" cy="44" r="2.5" />
          </g>
        )}
        {number === 3 && (
          <g fill="#c8694f">
            <circle cx="42" cy="46" r="2.5" />
            <circle cx="58" cy="42" r="2.5" />
            <circle cx="74" cy="46" r="2.5" />
          </g>
        )}
      </svg>
      <div className="mini-label">
        <strong>Station {number}</strong>
        <span>{room}</span>
        <span className="mini-time">{time}</span>
      </div>
    </div>
  );
}
