import { useState, type FormEvent } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/format';
import { saveOrder } from '../lib/orders';
import type { Customer, Order } from '../types';
import {
  ArrowLeftIcon,
  LockIcon,
  SparkleIcon,
} from '../components/Icons';

const COUNTRIES = [
  'United States',
  'Canada',
  'United Kingdom',
  'Ireland',
  'Australia',
  'New Zealand',
  'Germany',
  'France',
  'Netherlands',
  'Spain',
  'Italy',
  'India',
  'Singapore',
];

type CheckoutForm = Customer & { agree: boolean };

const EMPTY_FORM: CheckoutForm = {
  name: '',
  email: '',
  address: '',
  city: '',
  postcode: '',
  country: 'United States',
  agree: false,
};

export default function Checkout() {
  const { lines, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState<CheckoutForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const shipping = 0;
  const total = subtotal + shipping;

  if (lines.length === 0) {
    return <Navigate to="/kits" replace />;
  }

  const updateField = <K extends keyof CheckoutForm>(
    field: K,
    value: CheckoutForm[K],
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next: Record<string, string> = {};
      for (const key of Object.keys(prev)) {
        if (key !== field) next[key] = prev[key];
      }
      return next;
    });
  };

  const validate = (): Record<string, string> => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = 'Please add a name for the test order.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'Please add a valid email address.';
    }
    if (!form.address.trim()) next.address = 'Please add a test address.';
    if (!form.city.trim()) next.city = 'Please add a city.';
    if (!form.postcode.trim()) next.postcode = 'Please add a postcode.';
    if (!form.agree) {
      next.agree = 'Please confirm you understand this is a simulation.';
    }
    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const order: Order = {
      id: `SQ-${new Date().getFullYear()}-${Math.floor(
        1000 + Math.random() * 9000,
      )}`,
      createdAt: new Date().toISOString(),
      items: lines.map(({ kit, qty }) => ({
        kitId: kit.id,
        name: kit.name,
        qty,
        price: kit.price,
      })),
      subtotal,
      shipping,
      total,
      customer: {
        name: form.name.trim(),
        email: form.email.trim(),
        address: form.address.trim(),
        city: form.city.trim(),
        postcode: form.postcode.trim(),
        country: form.country,
      },
    };

    saveOrder(order);
    navigate('/confirmation', { replace: true });
    clear();
  };

  return (
    <section className="section">
      <div className="container">
        <div className="page-heading page-heading--left">
          <span className="eyebrow">
            <LockIcon size={14} /> Test checkout
          </span>
          <h1>One last stop.</h1>
          <p>Use any details — no payment is taken and no real order is placed.</p>
        </div>

        <form className="checkout-grid" onSubmit={handleSubmit} noValidate>
          <div className="form-card">
            <div className="test-banner">
              <LockIcon size={18} />
              <p>
                <strong>Test mode.</strong> No payment step. Submitting creates a
                mock order and clears the demo cart.
              </p>
            </div>

            <h2 className="form-title">Test delivery details</h2>

            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  placeholder="Riley's human"
                />
                {errors.name && (
                  <p className="field-error" id="name-error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="field-error" id="email-error">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="field field--full">
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  autoComplete="street-address"
                  value={form.address}
                  onChange={(event) =>
                    updateField('address', event.target.value)
                  }
                  aria-invalid={Boolean(errors.address)}
                  aria-describedby={errors.address ? 'address-error' : undefined}
                  placeholder="123 Test Street"
                />
                {errors.address && (
                  <p className="field-error" id="address-error">
                    {errors.address}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  value={form.city}
                  onChange={(event) => updateField('city', event.target.value)}
                  aria-invalid={Boolean(errors.city)}
                  aria-describedby={errors.city ? 'city-error' : undefined}
                  placeholder="Sniffville"
                />
                {errors.city && (
                  <p className="field-error" id="city-error">
                    {errors.city}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="postcode">Postcode</label>
                <input
                  id="postcode"
                  name="postcode"
                  type="text"
                  autoComplete="postal-code"
                  value={form.postcode}
                  onChange={(event) =>
                    updateField('postcode', event.target.value)
                  }
                  aria-invalid={Boolean(errors.postcode)}
                  aria-describedby={
                    errors.postcode ? 'postcode-error' : undefined
                  }
                  placeholder="12345"
                />
                {errors.postcode && (
                  <p className="field-error" id="postcode-error">
                    {errors.postcode}
                  </p>
                )}
              </div>

              <div className="field field--full">
                <label htmlFor="country">Country</label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  value={form.country}
                  onChange={(event) =>
                    updateField('country', event.target.value)
                  }
                >
                  {COUNTRIES.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="agree-block">
              <label className="check-row">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={(event) =>
                    updateField('agree', event.target.checked)
                  }
                  aria-invalid={Boolean(errors.agree)}
                  aria-describedby={errors.agree ? 'agree-error' : undefined}
                />
                <span>
                  I understand this is a demo checkout: no payment is taken and
                  no real order will be placed.
                </span>
              </label>
              {errors.agree && (
                <p className="field-error" id="agree-error">
                  {errors.agree}
                </p>
              )}
            </div>

            <Link className="text-link back-link" to="/cart">
              <ArrowLeftIcon size={15} /> Back to cart
            </Link>
          </div>

          <aside className="summary-card">
            <h2 className="summary-title">Your test order</h2>

            <ul className="summary-items">
              {lines.map(({ kit, qty }) => (
                <li key={kit.id}>
                  <span>
                    {kit.name} <small>× {qty}</small>
                  </span>
                  <span>{formatPrice(kit.price * qty)}</span>
                </li>
              ))}
            </ul>

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
              <p>Simulated payment — no card details are collected.</p>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              <LockIcon size={17} /> Place test order
            </button>
            <p className="muted-note">A mock confirmation appears next.</p>
          </aside>
        </form>
      </div>
    </section>
  );
}
