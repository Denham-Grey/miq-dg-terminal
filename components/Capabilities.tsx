import { capabilities, contact } from '@/content/site';

export function Capabilities() {
  return (
    <section className="capabilities" id="capabilities" aria-labelledby="capabilities-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="capabilities-title">Our Capabilities</h2>
        </div>
        <div className="object-grid">
          {capabilities.map((capability) => (
            <article className="object-card" id={capability.id} key={capability.id}>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
        <div className="contact-strip" aria-labelledby="contact-title">
          <h3 id="contact-title">{contact.heading}</h3>
          <address className="contact-details">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            {contact.phones.map((phone) => (
              <a key={phone.href} href={phone.href}>
                {phone.label}
              </a>
            ))}
          </address>
        </div>
      </div>
    </section>
  );
}
