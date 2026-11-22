import { useState } from 'react';
import { Link } from 'react-router-dom';
import DogMascot from '../components/DogMascot';
import { readLastOrder } from '../lib/orders';
import { formatOrderDate, formatPrice } from '../lib/format';
import {
  ArrowRightIcon,
  CheckIcon,
  LockIcon,
  SparkleIcon,
} from '../components/Icons';

export default function Confirmation() {
  const [order] = useState(() => readLastOrder());

  if (!order) {
    return (
      <section className="section">
        <div className="container">
          <div className="empty-state">
            <DogMascot size={140} mood="sniffing" />
            <h1 className="empty-title">No test order yet.</h1>
            <p className="empty-copy">
              Place a test order and a mock confirmation appears here. No payment
              is ever taken.
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

  const itemCount = order.items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <section className="section">
      <div className="container confirm-wrap">
        <div className="confirm-badge" aria-hidden="true">
          <CheckIcon size={36} />
        </div>
        <span className="eyebrow">
          <SparkleIcon size={14} /> Test order confirmed
        </span>
        <h1>Your demo order is in.</h1>
        <p className="confirm-sub">
          Demo order confirmed. No payment was taken, nothing was charged, and
          nothing will ship.
        </p>

        <div className="receipt">
          <span className="stamp">SIMULATED</span>

          <div className="receipt-head">
            <div>
              <span className="receipt-label">Test order</span>
              <strong className="receipt-id">{order.id}</strong>
            </div>
            <div className="receipt-date">
              <span className="receipt-label">Created</span>
              <span>{formatOrderDate(order.createdAt)}</span>
            </div>
          </div>

          <div className="receipt-block">
            <h2 className="receipt-title">
              Your quest kit{itemCount === 1 ? '' : 's'}
            </h2>
            <ul className="receipt-items">
              {order.items.map((item) => (
                <li key={item.kitId}>
                  <span>
                    {item.name} <small>× {item.qty}</small>
                  </span>
                  <span>{formatPrice(item.price * item.qty)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="receipt-block receipt-totals">
            <div>
              <span>Subtotal</span>
              <span>{formatPrice(order.subtotal)}</span>
            </div>
            <div>
              <span>Demo shipping</span>
              <span>Free</span>
            </div>
            <div className="receipt-total">
              <span>Total</span>
              <strong>{formatPrice(order.total)}</strong>
            </div>
          </div>

          <div className="receipt-block receipt-delivery">
            <h2 className="receipt-title">Test delivery details</h2>
            <p>{order.customer.name}</p>
            <p>
              {order.customer.address}, {order.customer.city},{' '}
              {order.customer.postcode}
            </p>
            <p>{order.customer.country}</p>
            <p className="muted-note">{order.customer.email}</p>
          </div>

          <div className="receipt-foot">
            <LockIcon size={15} />
            <span>
              Demo order receipt — no payment was processed.
            </span>
          </div>
        </div>

        <div className="setup-guide">
          <span className="eyebrow">Setup guide</span>
          <h2>Getting your first quest ready.</h2>
          <ol className="setup-steps">
            <li>
              <strong>Place the stations.</strong>
              <span>Put one in the kitchen, hallway, and living room — wherever your dog’s nose will find them.</span>
            </li>
            <li>
              <strong>Add a portion to each.</strong>
              <span>Use your dog’s usual food. Across all three stations, keep to their normal meal size.</span>
            </li>
            <li>
              <strong>Set the release times.</strong>
              <span>Space the drops across your time away — for example 09:30, 10:15 and 11:00.</span>
            </li>
            <li>
              <strong>Let your dog explore.</strong>
              <span>Supervise the first few uses and adjust portions with your vet’s guidance.</span>
            </li>
          </ol>
          <p className="muted-note">
            SniffQuest is a food puzzle concept — not a medical device, training
            programme, or behaviour treatment.
          </p>
        </div>

        <div className="confirm-actions">
          <Link className="btn btn-primary" to="/kits">
            Start a new test order <ArrowRightIcon size={17} />
          </Link>
          <Link className="link-arrow" to="/demo">
            Replay the demo
          </Link>
        </div>
      </div>
    </section>
  );
}
