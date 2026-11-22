import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DogMascot from '../components/DogMascot';
import StationArt from '../components/StationArt';
import { formatQuestTime, formatPrice } from '../lib/format';
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  PawIcon,
  PauseIcon,
  PlayIcon,
  SparkleIcon,
} from '../components/Icons';

const QUEST_MINUTES = 120;
const DEMO_SECONDS = 18;

const DEFAULT_OFFSETS = [30, 75, 120];
const ROOMS = ['Kitchen corner', 'Hallway rug', 'Living room'];

export default function Demo() {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [offsets, setOffsets] = useState([...DEFAULT_OFFSETS]);

  const QUEST = [
    { id: 1, room: ROOMS[0], offset: offsets[0], trail: 20 },
    { id: 2, room: ROOMS[1], offset: offsets[1], trail: 50 },
    { id: 3, room: ROOMS[2], offset: offsets[2], trail: 80 },
  ];

  useEffect(() => {
    if (!running) return;
    const step = QUEST_MINUTES * (0.1 / DEMO_SECONDS);
    const timer = window.setInterval(() => {
      setElapsed((current) => Math.min(QUEST_MINUTES, current + step));
    }, 100);
    return () => window.clearInterval(timer);
  }, [running]);

  useEffect(() => {
    if (running && elapsed >= QUEST_MINUTES) setRunning(false);
  }, [elapsed, running]);

  const released = QUEST.filter((station) => elapsed >= station.offset);
  const active = released.length > 0 ? released[released.length - 1] : null;
  const complete = elapsed >= QUEST_MINUTES;
  const phase = complete
    ? 'complete'
    : running
      ? 'running'
      : elapsed > 0
        ? 'paused'
        : 'ready';

  const statusLabel =
    phase === 'complete'
      ? 'Quest complete'
      : phase === 'running'
        ? 'Quest running'
        : phase === 'paused'
          ? 'Paused'
          : 'Ready to start';

  const progress = Math.min(100, Math.round((elapsed / QUEST_MINUTES) * 100));
  const dogLeft = complete ? 86 : active ? active.trail : 6;

  const announcement = complete
    ? 'Quest complete. All three timed food portions have been released.'
    : active
      ? `Station ${active.id} opened at ${formatQuestTime(active.offset)}. Portion ${released.length} of 3 released.`
      : 'Quest ready. Press start to watch the timed drops.';

  const start = () => {
    if (complete) setElapsed(0);
    setRunning(true);
  };

  const skip = () => {
    const next = QUEST.find((station) => station.offset > elapsed);
    setElapsed(next ? next.offset : QUEST_MINUTES);
    setRunning(false);
  };

  const reset = () => {
    setElapsed(0);
    setRunning(false);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">
            <PawIcon size={14} /> Interactive demo
          </span>
          <h1>Follow the nose.</h1>
          <p>
            Three stations open at 09:30, 10:15 and 11:00 while the dog follows
            its nose — a two-hour window compressed into 18 seconds.
          </p>
          <span className="demo-chip">
            Interactive demo · 18 seconds
          </span>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container demo-layout">
          <div className="quest-board">
            <div className="quest-top">
              <div className="quest-status">
                <span className={`status-pill status-pill--${phase}`}>
                  <span className="status-dot" aria-hidden="true" />
                  {statusLabel}
                </span>
                <span className="away-clock">
                  <ClockIcon size={16} /> Away clock{' '}
                  {formatQuestTime(elapsed)}
                </span>
              </div>
              <span className="quest-total">2-hour window · 3 drops</span>
            </div>

            <div className="room-view">
              <div className="rail-wrap">
                <div className="rail-line" aria-hidden="true" />
                <div
                  className="rail-fill"
                  aria-hidden="true"
                  style={{ width: `${progress}%` }}
                />
                {QUEST.map((station) => (
                  <span
                    key={station.id}
                    className={`rail-node ${
                      elapsed >= station.offset ? 'is-open' : ''
                    }`}
                    style={{ left: `${station.trail}%` }}
                    aria-hidden="true"
                  >
                    {station.id}
                  </span>
                ))}
                <div
                  className={`dog-marker ${running ? 'is-sniffing' : ''}`}
                  style={{ left: `${dogLeft}%` }}
                  aria-hidden="true"
                >
                  <DogMascot
                    size={76}
                    mood={elapsed > 0 && !complete ? 'sniffing' : 'happy'}
                  />
                </div>
                <span className="rail-end rail-end--start">You head out</span>
                <span className="rail-end rail-end--finish">Last drop</span>
              </div>

              <div className="station-grid">
                {QUEST.map((station) => {
                  const open = elapsed >= station.offset;
                  return (
                    <article
                      className={`station-card ${open ? 'is-open' : ''}`}
                      key={station.id}
                    >
                      <StationArt
                        number={station.id}
                        size={58}
                        open={open}
                      />
                      <div className="station-body">
                        <h2>Station {station.id}</h2>
                        <p>{station.room}</p>
                        <span className="station-status">
                          {open
                            ? `Opened ${formatQuestTime(station.offset)}`
                            : `Opens ${formatQuestTime(station.offset)}`}
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="progress-wrap">
              <div className="progress-track-outer" aria-hidden="true">
                <span
                  className="progress-track-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="progress-label">
                {progress}% of the away window
              </span>
            </div>

            <div className="demo-controls">
              {complete ? (
                <button type="button" className="btn btn-primary" onClick={start}>
                  <PlayIcon size={17} /> Replay quest
                </button>
              ) : running ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setRunning(false)}
                >
                  <PauseIcon size={17} /> Pause
                </button>
              ) : (
                <button type="button" className="btn btn-primary" onClick={start}>
                  <PlayIcon size={17} /> {elapsed > 0 ? 'Resume' : 'Start quest'}
                </button>
              )}

              {!complete && (
                <button type="button" className="btn btn-ghost" onClick={skip}>
                  Next drop <ArrowRightIcon size={17} />
                </button>
              )}

              <button
                type="button"
                className="text-link"
                onClick={reset}
                disabled={elapsed === 0 && !running}
              >
                Reset
              </button>
            </div>

            <div className="time-settings">
              <span className="time-settings-label">Set release times</span>
              <div className="time-inputs">
                {QUEST.map((station) => (
                  <div className="time-input" key={station.id}>
                    <label>
                      Station {station.id} ({station.room})
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={QUEST_MINUTES}
                      step={5}
                      value={station.offset}
                      onChange={(event) => {
                        const next = [...offsets];
                        next[station.id - 1] = Math.min(
                          QUEST_MINUTES,
                          Math.max(0, Number(event.target.value) || 0)
                        );
                        setOffsets(next);
                      }}
                    />
                    <span className="time-unit">min from start</span>
                  </div>
                ))}
                <button
                  type="button"
                  className="text-link"
                  onClick={() => setOffsets([...DEFAULT_OFFSETS])}
                  disabled={
                    offsets[0] === DEFAULT_OFFSETS[0] &&
                    offsets[1] === DEFAULT_OFFSETS[1] &&
                    offsets[2] === DEFAULT_OFFSETS[2]
                  }
                >
                  Reset to default
                </button>
              </div>
            </div>

            <p className="demo-live" aria-live="polite">
              {announcement}
            </p>
            <p className="muted-note">
              Timings shown are an example two-hour window. Portions and spacing
              should suit your dog’s normal feeding routine.
            </p>
          </div>

          <aside className="demo-side">
            <div className="side-card">
              <h2 className="side-title">What you’re watching</h2>
              <ul className="side-steps">
                <li>
                  <span>1</span>
                  <p>
                    <strong>Three stations</strong> placed around one room.
                  </p>
                </li>
                <li>
                  <span>2</span>
                  <p>
                    <strong>A portion of usual food</strong> in each.
                  </p>
                </li>
                <li>
                  <span>3</span>
                  <p>
                    <strong>One release time each</strong> — three little hunts
                    while you’re away.
                  </p>
                </li>
              </ul>
              <p className="muted-note" style={{ marginTop: 10 }}>
                Start with the <strong>Starter Quest</strong> ({formatPrice(36)}) —
                one three-station trail. Need more? Double Quest ({formatPrice(
                  64
                )}) adds six stations, Triple Quest ({formatPrice(89)}) adds nine.
              </p>
            </div>

            <div className="side-card">
              <h2 className="side-title">Quest log</h2>
              <ul className="quest-log">
                {QUEST.map((station) => {
                  const open = elapsed >= station.offset;
                  return (
                    <li
                      key={station.id}
                      className={`log-item ${open ? 'is-done' : ''}`}
                    >
                      <span className="log-dot" aria-hidden="true">
                        {open ? <CheckIcon size={14} /> : station.id}
                      </span>
                      <div>
                        <strong>
                          Station {station.id} ·{' '}
                          {formatQuestTime(station.offset)}
                        </strong>
                        <p>
                          {open
                            ? `Portion ${station.id} of 3 is out.`
                            : `Waiting to release portion ${station.id} of 3.`}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              {complete && (
                <p className="log-complete">
                  <SparkleIcon size={15} /> All three portions released. Quest
                  complete.
                </p>
              )}
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta-band">
            <div>
              <span className="eyebrow">Like the trail?</span>
              <h2>Build your own quest.</h2>
              <p>Pick a kit, or read how the stations and timed drops work.</p>
            </div>
            <div className="cta-band-actions">
              <Link className="btn btn-primary" to="/kits">
                Shop kits
              </Link>
              <Link className="link-arrow" to="/product">
                Product details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
