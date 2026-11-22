import { useState } from 'react';
import { Link } from 'react-router-dom';
import DogMascot from '../components/DogMascot';
import StationArt from '../components/StationArt';
import { KITS } from '../data/kits';
import { formatPrice } from '../lib/format';
import { useCart } from '../context/CartContext';
import {
  ArrowRightIcon,
  CheckIcon,
  MinusIcon,
  PawIcon,
  PlusIcon,
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

const FEATURES = [
  {
    title: 'Timer controls',
    copy: 'Set a different release time for each of the three stations. Space the drops across your time away so your dog gets three separate sniff-and-search moments instead of one meal in one spot.',
  },
  {
    title: 'Food compatible',
    copy: 'Uses your dog’s usual dry or wet food — no special diet required. Each station holds one portion, so you stay within their normal daily meal.',
  },
  {
    title: 'Easy to clean',
    copy: 'Removable food cups and a wipe-clean body make resetting between quests quick. All food-contact parts are dishwasher safe.',
  },
  {
    title: 'Power & dimensions',
    copy: 'Each station runs on a long-life coin cell (included). Compact footprint fits on a floor or low shelf — about the size of a large dog bowl.',
  },
];

const DOUBLE = KITS[1];
const TRIPLE = KITS[2];

export default function Product() {
  const starter = KITS[0];
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const clampQty = (value: number) => Math.max(1, Math.min(9, value));

  const handleAdd = () => {
    add(starter.id, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

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

              <div className="qty-picker" role="group" aria-label="Quantity">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((v) => clampQty(v - 1))}
                  disabled={qty <= 1}
                >
                  <MinusIcon size={16} />
                </button>
                <span className="qty-value" aria-live="polite">
                  {qty}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((v) => clampQty(v + 1))}
                  disabled={qty >= 9}
                >
                  <PlusIcon size={16} />
                </button>
              </div>

              {added ? (
                <div className="add-feedback">
                  <CheckIcon size={20} />
                  <div>
                    <strong>{qty} added to cart</strong>
                    <p>Demo store — no payment is taken.</p>
                  </div>
                  <div className="add-feedback-actions">
                    <Link className="btn btn-primary btn-block" to="/cart">
                      View cart <ArrowRightIcon size={15} />
                    </Link>
                    <Link className="btn btn-ghost btn-block" to="/checkout">
                      Checkout
                    </Link>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={handleAdd}
                >
                  Add to cart <ArrowRightIcon size={17} />
                </button>
              )}

              <ul className="product-points">
                <li>3 timed stations per quest</li>
                <li>Separate release time for each</li>
                <li>Holds everyday dog food</li>
                <li>Removable food cups</li>
              </ul>

              <div className="feature-grid">
                {FEATURES.map((feature) => (
                  <article className="feature-card" key={feature.title}>
                    <h4>{feature.title}</h4>
                    <p>{feature.copy}</p>
                  </article>
                ))}
              </div>

              <div className="recommend-callout">
                <span className="eyebrow">Our recommendation</span>
                <h3>Start with the Starter Quest.</h3>
                <p>
                  One three-station trail is the best way to introduce your dog
                  to timed feeding. You can add Double or Triple Quest kits
                  later for more trails or more rooms.
                </p>
              </div>

              <div className="extra-kits">
                <span className="eyebrow">Need more trails?</span>
                <h3>Extra kits explained.</h3>
                <div className="extra-kit-row">
                  <div>
                    <strong>{DOUBLE.name}</strong>
                    <p>{DOUBLE.tagline}</p>
                    <p>
                      {DOUBLE.description} Ideal for bigger homes or rotating
                      the trail between rooms.
                    </p>
                    <span className="extra-price">{formatPrice(DOUBLE.price)}</span>
                  </div>
                  <div>
                    <strong>{TRIPLE.name}</strong>
                    <p>{TRIPLE.tagline}</p>
                    <p>
                      {TRIPLE.description} Best for multi-dog homes or
                      back-to-back days away.
                    </p>
                    <span className="extra-price">{formatPrice(TRIPLE.price)}</span>
                  </div>
                </div>
                <p className="muted-note">
                  Prices are demo prices. All kits are simulated — no real
                  product is sold and no payment is taken.
                </p>
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
