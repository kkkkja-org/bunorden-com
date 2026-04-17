/**
 * Bunorden.com - Main Script
 * Handles filter bar functionality and generic interactions
 */

// ── Filter Bar Functionality ──
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  if (filterButtons.length === 0) return; // No filter buttons on this page

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      handleFilter(filter, this);
    });
  });

  function handleFilter(category, buttonElement) {
    // Update active state
    filterButtons.forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');

    // Filter cards
    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-cat');
      const shouldShow = category === 'all' || cardCategory === category;

      if (shouldShow) {
        card.classList.remove('hidden-card');
        card.classList.add('visible-card');
      } else {
        card.classList.remove('visible-card');
        card.classList.add('hidden-card');
      }
    });
  }
});

// ── Smooth Scroll for Hash Links ──
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Fade in cards on initial load (staggered)
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.display = '';
        setTimeout(() => { card.style.opacity = '1'; }, i * 100);
    });
});

// Page transition: fade on navigate between internal pages
document.addEventListener('DOMContentLoaded', () => {
    // Reveal page
    requestAnimationFrame(() => { document.body.classList.add('is-loaded'); });

    // Respect reduced motion
    const shouldReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a');
        if (!anchor) return;
        const href = anchor.getAttribute('href');
        if (!href) return;
        // Allow mailto, external and target=_blank links
        if (anchor.target === '_blank') return;
        if (href.startsWith('mailto:')) return;
        if (href.startsWith('#')) return;
        let url;
        try { url = new URL(href, location.href); } catch (err) { return; }
        if (url.origin !== location.origin) return; // external link

        // Internal navigation: fade out then navigate
        e.preventDefault();
        if (shouldReduce) { location.href = url.href; return; }
        document.body.classList.add('is-exiting');
        setTimeout(() => { location.href = url.href; }, 300);
    });

    // Initialize accordions (accessible toggles)
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(acc => {
        acc.querySelectorAll('.accordion-button').forEach(btn => {
            const panelId = btn.getAttribute('aria-controls');
            const panel = document.getElementById(panelId);
            // Ensure panel is hidden initially
            if (panel) panel.hidden = true;

            btn.addEventListener('click', () => {
                const expanded = btn.getAttribute('aria-expanded') === 'true';
                btn.setAttribute('aria-expanded', (!expanded).toString());

                if (!panel) return;
                if (!expanded) {
                    // open
                    panel.hidden = false;
                    const height = panel.scrollHeight;
                    if (!shouldReduce) {
                        panel.style.maxHeight = '0px';
                        panel.style.opacity = '0';
                        requestAnimationFrame(() => {
                            panel.style.transition = 'max-height 300ms ease, opacity 300ms ease';
                            panel.style.maxHeight = height + 'px';
                            panel.style.opacity = '1';
                        });
                    } else {
                        panel.style.maxHeight = 'none';
                        panel.style.opacity = '1';
                    }
                } else {
                    // close
                    if (!shouldReduce) {
                        panel.style.maxHeight = panel.scrollHeight + 'px';
                        requestAnimationFrame(() => {
                            panel.style.maxHeight = '0px';
                            panel.style.opacity = '0';
                        });
                        setTimeout(() => {
                            panel.hidden = true;
                            panel.style.maxHeight = '';
                        }, 300);
                    } else {
                        panel.hidden = true;
                        panel.style.maxHeight = '';
                        panel.style.opacity = '';
                    }
                }
            });

            // Keyboard support
            btn.addEventListener('keydown', (ev) => {
                if (ev.key === 'Enter' || ev.key === ' ') {
                    ev.preventDefault();
                    btn.click();
                }
            });
        });
    });
});