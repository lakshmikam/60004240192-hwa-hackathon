import KitCard from '../components/KitCard';
import { KITS } from '../data/kits';
import { BoxIcon, PawIcon } from '../components/Icons';

export default function Kits() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">
            <BoxIcon size={14} /> Kits
          </span>
          <h1>Choose your quest size.</h1>
          <p>Every kit is built from three-station quests.</p>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container">
          <div className="kit-grid">
            {KITS.map((kit) => (
              <KitCard key={kit.id} kit={kit} />
            ))}
          </div>

          <div className="kits-note">
            <div>
              <span className="eyebrow">
                <PawIcon size={14} /> One quest = three stations
              </span>
              <h2>Which size?</h2>
              <p>
                A quest is a three-station trail: three portions, three release
                times. More stations mean more trails or more rooms in play.
              </p>
            </div>
            <ul className="kits-note-list">
              <li>
                <strong>Starter Quest</strong> — one three-station trail.
              </li>
              <li>
                <strong>Double Quest</strong> — two trails, or six stations.
              </li>
              <li>
                <strong>Triple Quest</strong> — three trails to rotate.
              </li>
            </ul>
          </div>

          <p className="section-note">
            Portions and timing should suit your dog’s normal feeding
            routine.
          </p>
        </div>
      </section>
    </>
  );
}
