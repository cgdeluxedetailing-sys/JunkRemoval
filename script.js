const cgcoStyles = document.createElement('link');
cgcoStyles.rel = 'stylesheet';
cgcoStyles.href = 'cgco.css';
document.head.appendChild(cgcoStyles);

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    menuToggle.textContent = isOpen ? 'Close' : 'Menu';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
      menuToggle.textContent = 'Menu';
    });
  });
}

const footer = document.querySelector('.site-footer');
if (footer && !document.querySelector('.cgco-section')) {
  const cgcoSection = document.createElement('section');
  cgcoSection.className = 'cgco-section';
  cgcoSection.setAttribute('aria-labelledby', 'cgco-title');
  cgcoSection.innerHTML = `
    <div class="container">
      <div class="cgco-head">
        <div>
          <span class="cgco-kicker">CG CO. / MORE LOCAL SERVICES</span>
          <h2 id="cgco-title">One local group.<br><em>Three ways to help.</em></h2>
        </div>
        <p>CG Co. brings together practical local services across Gippsland. If you need something cleaned, cleared or maintained, there’s a CG business built for the job.</p>
      </div>
      <div class="cgco-grid">
        <article class="cgco-card">
          <span class="cgco-number">01 / VEHICLE CARE</span>
          <h3>CG Mobile Detailing</h3>
          <p>Professional mobile car detailing brought to your home or workplace, including interior and exterior detailing, paint protection and ceramic coating services across Gippsland.</p>
          <a class="cgco-card-link" href="https://www.cgmobiledetailing.com/" target="_blank" rel="noopener noreferrer">Visit CG Mobile Detailing <span>↗</span></a>
        </article>
        <article class="cgco-card">
          <span class="cgco-number">02 / LAWN & GARDEN</span>
          <h3>CG Lawn Mowing</h3>
          <p>Local lawn care for homes and properties, including mowing, edging, whipper snipping and garden tidy-ups across Sale, Maffra and surrounding Gippsland areas.</p>
          <a class="cgco-card-link" href="https://cglawnmowing.org/" target="_blank" rel="noopener noreferrer">Visit CG Lawn Mowing <span>↗</span></a>
        </article>
        <article class="cgco-card">
          <span class="cgco-number">03 / JUNK & CLEAR-OUTS</span>
          <h3>CG Junk Removal</h3>
          <p>Furniture removal, household junk, garage clean-outs, green waste and property clearances. Point at what needs to go and we’ll handle the lifting and loading.</p>
          <a class="cgco-card-link" href="#top">You’re on CG Junk Removal <span>↑</span></a>
        </article>
      </div>
      <p class="cgco-note"><strong>CG Co.</strong> Local services. One team behind them.</p>
    </div>`;
  footer.parentNode.insertBefore(cgcoSection, footer);
}

const lawnFooterLink = document.querySelector('.footer-links a[href="#"]');
if (lawnFooterLink) {
  lawnFooterLink.href = 'https://cglawnmowing.org/';
  lawnFooterLink.target = '_blank';
  lawnFooterLink.rel = 'noopener noreferrer';
}

document.querySelectorAll('#year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

const quoteForm = document.querySelector('.quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(quoteForm);
    const name = String(data.get('Name') || '').trim();
    const phone = String(data.get('Phone') || '').trim();
    const area = String(data.get('Area') || '').trim();
    const details = String(data.get('Job details') || '').trim();
    const subject = `CG Junk Removal quote request${area ? ` - ${area}` : ''}`;
    const body = [
      'Hi CG Junk Removal,',
      '',
      'I would like a quote for junk removal.',
      '',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Suburb / area: ${area}`,
      '',
      'What needs removing:',
      details,
      '',
      'I can send photos by email if required.'
    ].join('\n');
    window.location.href = `mailto:quotes@cgjunkremoval.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
