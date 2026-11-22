import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { CartIcon, CloseIcon, MenuIcon, PawIcon, SparkleIcon } from './Icons';
import { useCart } from '../context/CartContext';

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/product', label: 'SniffQuest' },
  { to: '/demo', label: 'Demo' },
  { to: '/kits', label: 'Shop' },
];

export default function Layout() {
  const { totalQty } = useCart();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const cartLabel = `Cart, ${totalQty} ${totalQty === 1 ? 'item' : 'items'}`;

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="top-bar">
        <div className="container top-bar-inner">
          <SparkleIcon size={14} />
          <span>Concept store — all products, prices and test orders are simulated.</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/" aria-label="Happy While Away home">
            <span className="brand-mark">
              <PawIcon size={20} />
            </span>
            <span className="brand-text">
              <span className="brand-name">Happy While Away</span>
              <span className="brand-sub">SniffQuest concept store</span>
            </span>
          </Link>

          <nav className="main-nav" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  isActive ? 'nav-link is-active' : 'nav-link'
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <Link className="cart-button" to="/cart" aria-label={cartLabel}>
              <CartIcon size={20} />
              <span className="cart-label">Cart</span>
              <span className="cart-count" aria-hidden="true">
                {totalQty}
              </span>
            </Link>
            <button
              type="button"
              className="menu-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile">
            <div className="container mobile-nav-inner">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    isActive ? 'mobile-nav-link is-active' : 'mobile-nav-link'
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link className="mobile-nav-link" to="/cart">
                Cart ({totalQty})
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link className="brand brand--footer" to="/" aria-label="Happy While Away home">
                <span className="brand-mark">
                  <PawIcon size={20} />
                </span>
                <span className="brand-text">
                  <span className="brand-name">Happy While Away</span>
                  <span className="brand-sub">SniffQuest concept store</span>
                </span>
              </Link>
              <p className="footer-blurb">
                SniffQuest is a three-station timed food puzzle for dogs. Three
                drops, three little hunts while you’re away.
              </p>
            </div>

            <div className="footer-col">
              <h2>Explore</h2>
              <Link to="/product">SniffQuest</Link>
              <Link to="/demo">Interactive demo</Link>
              <Link to="/kits">Shop kits</Link>
              <Link to="/cart">Your cart</Link>
            </div>

            <div className="footer-col footer-col--note">
              <h2>Demo notes</h2>
              <p>
                A front-end design demo. Products, prices, orders and delivery
                are simulated. No payment is taken.
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Happy While Away</span>
            <span>Demo only · no real orders</span>
          </div>
        </div>
      </footer>
    </>
  );
}
