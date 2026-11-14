import { BrandMark } from './BrandMark';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <a className="brand" href="#top" aria-label="Market IQ home">
          <BrandMark size={27} />
          <span>MARKET IQ</span>
        </a>
        <span>Market IQ Limited</span>
        <a href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
