import { Link } from 'react-router-dom';
import DogMascot from '../components/DogMascot';
import { ArrowRightIcon } from '../components/Icons';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <div className="empty-state">
          <DogMascot size={150} mood="sniffing" />
          <h1 className="empty-title">This trail went cold.</h1>
          <p className="empty-copy">
            We couldn’t sniff out that page. Let’s head back to a known station.
          </p>
          <div className="empty-actions">
            <Link className="btn btn-primary" to="/">
              Back home <ArrowRightIcon size={17} />
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
