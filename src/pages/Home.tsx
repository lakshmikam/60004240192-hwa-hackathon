import { Link } from 'react-router-dom';
import HeroRender, { StationRender } from '../components/HeroRender';
import StationArt from '../components/StationArt';
import KitCard from '../components/KitCard';
import { KITS } from '../data/kits';
import {
  ArrowRightIcon,
  CheckIcon,
  PlayIcon,
} from '../components/Icons';

const STOPS = [
  { number: 1, room: 'Kitchen corner', time: '09:30' },
  { number: 2, room: 'Hallway rug', time: '10:15' },
  { number: 3, room: 'Living room', time: '11:00' },
];

const STEPS = [
  {
    number: 1,
    title: 'Place three stations',
    copy: 'Kitchen, hallway, living room — wherever a nose will find them.',
  },
  {
    number: 2,
    title: 'Add a portion to each',
    copy: 'Use your dog’s usual food. Across all three, keep to their normal meal.',
  },
  {
    number: 3,
    title: 'Set the drop times',
    copy: 'Space the releases across your time away for three separate sniffs.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Happy While Away · SniffQuest</span>
            <h1>
              Three timed drops.
              <br />
              <em>One happy nose.</em>
            </h1>
            <p className="lede">
              A three-station food puzzle that turns your dog’s usual meal into
              a trail of small discoveries while you’re away.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/kits">
                Shop kits <ArrowRightIcon size={16} />
              </Link>
              <Link className="btn btn-ghost" to="/demo">
                <PlayIcon size={16} /> Try the demo
              </Link>
            </div>
            <div className="hero-facts" aria-label="SniffQuest at a glance">
              <span>3 stations</span>
              <span>3 release times</span>
              <span>1 trail</span>
            </div>
          </div>

          <figure className="hero-visual">
            <span className="visual-sheen" aria-hidden="true" />
            <div className="visual-top">
              <span className="visual-label">Concept render</span>
              <span className="visual-sub">SniffQuest · three timed stations</span>
            </div>

            <div className="render-stage">
              <HeroRender />
            </div>

            <figcaption className="concept-caption">
              Polished concept render: three physical feeder stations, each
              opening at its own time.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>A small trail while you’re out.</h2>
            <p>
              Each station holds a portion of your dog’s usual food and opens at
              its own time — a sequence of sniffing moments instead of one meal
              in one spot.
            </p>
          </div>

          <div className="steps">
            {STEPS.map((step) => (
              <article className="step-card" key={step.number}>
                <div className="step-art">
                  <span className="step-number">{step.number}</span>
                  <StationArt number={step.number} size={62} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>

          <p className="section-note">
            Portions and timing should suit your dog’s normal feeding routine.
            Ask your vet if unsure.
          </p>

          <div className="three-device-callout">
            <span className="eyebrow">Why three stations at once</span>
            <h3>A treasure hunt — not just a bowl.</h3>
            <p>
              Three devices placed in different rooms turn your dog’s meal into
              a treasure hunt. Each station is a puzzle: your dog has to find
              it, sniff it out, and wait for its release time.
            </p>
            <ul className="three-device-list">
              <li>
                <strong>Three separate hunts.</strong>
                <span>
                  Stations release one at a time, so your dog searches, eats,
                  then searches again — instead of gulping one bowl in seconds.
                </span>
              </li>
              <li>
                <strong>One puzzle, three pieces.</strong>
                <span>
                  Each station holds one portion. Your dog needs all three to
                  finish the meal, which keeps them occupied across the whole
                  time you’re away.
                </span>
              </li>
              <li>
                <strong>Mental enrichment.</strong>
                <span>
                  Sniffing and searching is natural dog behaviour. Three timed
                  drops give your dog a job to do, not just food to eat.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="demo-teaser">
            <div className="demo-teaser-copy">
              <span className="eyebrow eyebrow--light">Interactive demo</span>
              <h2>See the trail in 18 seconds.</h2>
              <p>
                Three stations open at 09:30, 10:15 and 11:00, following a
                two-hour window in real time.
              </p>
              <div className="demo-teaser-actions">
                <Link className="btn btn-primary" to="/demo">
                  <PlayIcon size={16} /> Play the demo
                </Link>
                <Link className="link-arrow" to="/product">
                  How the drops work
                </Link>
              </div>
            </div>
            <div className="demo-teaser-visual" aria-hidden="true">
              <StationRender room="Hallway rug" time="10:15" accent="teal" />
              <div className="teaser-times">
                {STOPS.map((stop) => (
                  <span key={stop.number}>
                    <strong>{stop.time}</strong>
                    <small>Station {stop.number}</small>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section-head section-head--row">
            <div>
              <span className="eyebrow">Kits</span>
              <h2>Choose a kit.</h2>
              <p>Every kit is built from three-station quests.</p>
            </div>
            <Link className="text-link" to="/kits">
              Compare all kits <ArrowRightIcon size={15} />
            </Link>
          </div>

          <div className="kit-grid">
            {KITS.map((kit) => (
              <KitCard key={kit.id} kit={kit} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="honest-card">
            <div className="honest-head">
              <span className="eyebrow">The honest bit</span>
              <h2>What SniffQuest is — and isn’t.</h2>
            </div>
            <ul className="honest-list">
              <li>
                <CheckIcon size={17} />
                <span>
                  A food puzzle concept — not a medical device, training programme
                  or behaviour treatment.
                </span>
              </li>
              <li>
                <CheckIcon size={17} />
                <span>
                  Introduce new feeders with supervision, and set portions with
                  your vet’s guidance.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
