import { Link } from 'react-router-dom';
import DogMascot from '../components/DogMascot';
import StationArt from '../components/StationArt';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/format';
import {
  ArrowRightIcon,
  MinusIcon,
  PawIcon,
  PlusIcon,
  SparkleIcon,
  TrashIcon,
} from '../components/Icons';

export default function Cart() {
  const { lines, totalQty, subtotal, setQty, remove, clear } = useCart();
  const shipping = 0;
  const total = subtotal + shipping;

  if (lines.length === 0) {
    return (
      <section className="section">
        <div className="container">
          <div className="empty-state">
            <DogMascot size={150} mood="sniffing" />
            <h1 className="empty-title">Your cart is empty.</h1>
            <p className="empty-copy">
              Pick a quest size to start a trail. Everything here is a demo — no
              real orders.
            </p>
            <div className="empty-actions">
              <Link className="btn btn-primary" to="/kits">
                Choose a kit <ArrowRightIcon size={17} />
              </Link>
              <Link className="link-arrow" to="/demo">
                Try the demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="page-heading">
          <span className="eyebrow">
            <PawIcon size={14} /> Your cart
          </span>
          <h1>Your cart.</h1>
          <p>
            {totalQty} {totalQty === 1 ? 'item' : 'items'} in your cart.
          </p>
        </div>

        <div className="cart-grid">
          <div className="cart-list">
            {lines.map(({ kit, qty }) => (
              <article className="cart-line" key={kit.id}>
                <div
                  className={`cart-line-art cart-line-art--${kit.accent}`}
                  aria-hidden="true"
                >
                  <StationArt number={1} size={58} />
                </div>

                <div className="cart-line-info">
                  <h2>{kit.name}</h2>
                  <p>
                    {kit.stations} stations ·{' '}
                    {kit.quests === 1 ? '1 quest' : `${kit.quests} quests`} ·{' '}
                    {formatPrice(kit.price)} each
                  </p>

                  <div className="cart-line-controls">
                    <div
                      className="qty-stepper"
                      role="group"
                      aria-label={`Quantity for ${kit.name}`}
                    >
                      <button
                        type="button"
                        aria-label={`Decrease ${kit.name} quantity`}
                        onClick={() => setQty(kit.id, qty - 1)}
                        disabled={qty <= 1}
                      >
                        <MinusIcon size={15} />
                      </button>
                      <span className="qty-value" aria-live="polite">
                        {qty}
                      </span>
                      <button
                        type="button"
                        aria-label={`Increase ${kit.name} quantity`}
                        onClick={() => setQty(kit.id, qty + 1)}
                        disabled={qty >= 9}
                      >
                        <PlusIcon size={15} />
                      </button>
                    </div>

                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => remove(kit.id)}
                    >
                      <TrashIcon size={15} /> Remove
                    </button>
                  </div>
                </div>

                <div className="cart-line-total">
                  <strong>{formatPrice(kit.price * qty)}</strong>
                  <span>demo price</span>
                </div>
              </article>
            ))}

            <div className="cart-list-footer">
              <button type="button" className="text-link" onClick={clear}>
                Clear cart
              </button>
              <Link className="text-link" to="/kits">
                Continue shopping <ArrowRightIcon size={15} />
              </Link>
            </div>
          </div>

          <aside className="summary-card">
            <h2 className="summary-title">Order summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="summary-row">
              <span>Demo shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row summary-row--total">
              <span>Total</span>
              <strong>{formatPrice(total)}</strong>
            </div>

            <div className="test-note">
              <SparkleIcon size={16} />
              <p>Demo cart — no payment is taken.</p>
            </div>

            <Link className="btn btn-primary btn-block" to="/checkout">
              Test checkout <ArrowRightIcon size={17} />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
