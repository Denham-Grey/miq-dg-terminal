import { IdentityLogo } from './IdentityLogo';
import { TerminalSignature } from './TerminalSignature';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="product-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <TerminalSignature />
        </div>
        <IdentityLogo />
      </div>
    </section>
  );
}
