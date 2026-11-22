import { useEffect, useState } from 'react';
import type { Kit } from '../types';
import { formatPrice } from '../lib/format';
import { useCart } from '../context/CartContext';
import { CheckIcon } from './Icons';
import StationArt from './StationArt';

export default function KitCard({ kit }: { kit: Kit }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const timer = window.setTimeout(() => setAdded(false), 1800);
    return () => window.clearTimeout(timer);
  }, [added]);

  return (
    <article className={`kit-card kit-card--${kit.accent}`}>
      <span className="kit-badge">{kit.badge}</span>
      <div className="kit-art" aria-hidden="true">
        <StationArt number={1} size={62} />
        <StationArt number={2} size={62} />
        <StationArt number={3} size={62} />
      </div>
      <h3 className="kit-name">{kit.name}</h3>
      <p className="kit-tagline">{kit.tagline}</p>
      <div className="kit-meta">
        <span>{kit.stations} stations</span>
        <span>
          {kit.quests} {kit.quests === 1 ? 'quest' : 'quests'}
        </span>
      </div>
      <p className="kit-price">
        <span>{formatPrice(kit.price)}</span>
        <span className="kit-price-note">demo price</span>
      </p>
      <p className="kit-desc">{kit.description}</p>
      <ul className="kit-includes">
        {kit.includes.map((item) => (
          <li key={item}>
            <CheckIcon size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="kit-actions">
        <button
          type="button"
          className={`btn btn-primary btn-block ${added ? 'is-added' : ''}`}
          onClick={() => {
            add(kit.id);
            setAdded(true);
          }}
        >
          {added ? (
            <>
              <CheckIcon size={18} /> Added
            </>
          ) : (
            'Add to cart'
          )}
        </button>
      </div>
    </article>
  );
}
