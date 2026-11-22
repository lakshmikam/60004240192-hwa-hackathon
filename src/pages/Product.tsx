import { Link } from 'react-router-dom';
import DogMascot from '../components/DogMascot';
import StationArt from '../components/StationArt';
import { KITS } from '../data/kits';
import { formatPrice } from '../lib/format';
import {
  ArrowRightIcon,
  PawIcon,
} from '../components/Icons';

const DROPS = [
  {
    number: 1,
    time: '09:30',
    room: 'Kitchen corner',
    label: 'Portion 1 releases',
  },
  {
    number: 2,
    time: '10:15',
    room: 'Hallway rug',
    label: 'Portion 2 releases',
  },
  {
    number: 3,
    time: '11:00',
    room: 'Living room',
    label: 'Portion 3 releases',
  },
];

export default function Product() {
  const starter = KITS[0];

  return (
    <>
      <section className="page-head">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">SniffQuest</span>
          </nav>

          <div className="product-grid">
            <div className="product-visual">
              <span className="product-visual-label">
                Product concept · Starter Quest
              </span>
              <div className="product-dog">
                <DogMascot
                  size={210}
                  title="The SniffQuest cartoon dog mascot"
                />
              </div>
              <div className="product-stations" aria-hidden="true">
                {[1, 2, 3].map((number) => (
                  <div className="product-station" key={number}>
                    <StationArt number={number} size={76} />
                    <span>Station {number}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="product-info">
              <span className="eyebrow">
                <PawIcon size={14} /> SniffQuest
              </span>
              <h1>SniffQuest Starter Quest</h1>
              <p className="product-lede">
                Three stations, each holding a portion of your dog’s usual food
                and opening at a different time.
              </p>

              <div className="price-row">
                <strong>{formatPrice(starter.price)}</strong>
                <span className="price-sub">One quest · 3 stations</span>
              </div>

              <ul className="product-points">
                <li>3 timed stations per quest</li>
                <li>Separate release time for each</li>
                <li>Holds everyday dog food</li>
                <li>Removable food cups</li>
              </ul>

              <div className="product-actions">
                <Link className="btn btn-primary" to="/kits">
                  Shop kits <ArrowRightIcon size={17} />
                </Link>
                <Link className="link-arrow" to="/demo">
                  Try the demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container product-detail-grid">
          <div>
            <h2 className="h2-sm">A quest in three drops</h2>
            <p className="body-copy">
              Each station opens once. Spaced across the day, the three drops
              make three separate sniff-and-search moments.
            </p>

            <ol className="drop-timeline">
              {DROPS.map((drop) => (
                <li className="drop-row" key={drop.number}>
                  <div className="drop-time">{drop.time}</div>
                  <div className="drop-main">
                    <div className="drop-title">
                      <StationArt number={drop.number} size={42} />
                      <strong>{drop.label}</strong>
                    </div>
                    <p>{drop.room} · a portion of your dog’s usual food</p>
                  </div>
                  <span className="drop-tag">Station {drop.number}</span>
                </li>
              ))}
            </ol>

            <p className="muted-note">
              Times shown are an example schedule. Set the spacing to suit your
              dog and your day.
            </p>
          </div>

          <aside className="info-stack">
            <div className="info-card">
              <h3>What’s in the box</h3>
              <ul className="tick-list">
                {starter.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="muted-note">
                Illustrative contents for this concept demo.
              </p>
            </div>

            <div className="info-card info-card--sun">
              <h3>Good to know</h3>
              <ul className="tick-list">
                <li>
                  SniffQuest is a food puzzle toy — not a medical device or
                  training programme.
                </li>
                <li>
                  Introduce new feeders with supervision, and follow your vet’s
                  advice on portions.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta-band">
            <div>
              <span className="eyebrow">Ready to try it?</span>
              <h2>See the trail first.</h2>
              <p>Play, pause and skip between all three timed drops.</p>
            </div>
            <div className="cta-band-actions">
              <Link className="btn btn-primary" to="/kits">
                Shop kits
              </Link>
              <Link className="link-arrow" to="/demo">
                Open the demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
