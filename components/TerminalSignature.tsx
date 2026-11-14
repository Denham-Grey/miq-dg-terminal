import { product } from '@/content/site';

export function TerminalSignature() {
  const terminalUrl = process.env.NEXT_PUBLIC_TERMINAL_URL?.trim();

  return (
    <section className="hero-product" id="products" aria-labelledby="product-title">
      <p className="eyebrow">{product.eyebrow}</p>
      <h1 id="product-title" className="terminal-signature" aria-label={product.signatureLabel}>
        <span className="signature-name">
          D<span className="signature-plus">+</span>G
        </span>
        <span className="signature-divider" aria-hidden="true" />
        <span className="signature-terminal">{product.terminal}</span>
      </h1>
      <p className="product-tagline">{product.tagline}</p>
      <p className="product-summary">{product.summary}</p>
      {terminalUrl ? (
        <a className="cta" href={terminalUrl}>
          {product.accessLabel} <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <button className="cta" type="button" disabled>
          {product.accessLabel} <span aria-hidden="true">↗</span>
        </button>
      )}
    </section>
  );
}
