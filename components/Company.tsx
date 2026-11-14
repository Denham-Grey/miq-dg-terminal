import { company, contact } from '@/content/site';

export function Company() {
  return (
    <section className="company" id="company" aria-labelledby="company-title">
      <div className="container company-grid">
        <div>
          <p className="eyebrow">
            <span className="signal" /> {company.eyebrow}
          </p>
          <h2 id="company-title">{company.name}</h2>
        </div>
        <div>
          <p>{company.description}</p>
          <p className="location">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="M19 10c0 5-7 10-7 10s-7-5-7-10a7 7 0 1 1 14 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>{' '}
            {contact.address}
          </p>
        </div>
      </div>
    </section>
  );
}
