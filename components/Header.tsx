import { navItems } from '@/content/site';
import { BrandMark } from './BrandMark';

export function Header() {
  return (
    <header className="header">
      <div className="container topbar">
        <a className="brand" href="#top" aria-label="Market IQ home">
          <BrandMark />
          <span>MARKET IQ</span>
        </a>
        <nav aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
