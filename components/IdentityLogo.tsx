import { RingMotion } from './RingMotion';

export function IdentityLogo() {
  return (
    <figure className="identity">
      <div className="identity-field" aria-hidden="true">
        <span className="corner tl" />
        <span className="corner tr" />
        <span className="corner bl" />
        <span className="corner br" />
      </div>
      <div className="logo-art">
        <img
          className="logo-poster"
          src="/logo-poster.webp"
          alt="Market IQ logo, an orange ring of curved lines"
          width={610}
          height={610}
          fetchPriority="high"
        />
        <RingMotion />
      </div>
      <img
        className="logo-wordmark"
        src="/wordmark.png"
        alt=""
        width={390}
        height={48}
      />
    </figure>
  );
}
