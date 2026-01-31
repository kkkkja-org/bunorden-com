function filterBrand(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-cat');

        // Clear any pending hide timeouts so rapid clicks don't conflict
        if (card._hideTimeout) {
            clearTimeout(card._hideTimeout);
            card._hideTimeout = null;
        }

        if (category === 'all' || cardCat === category) {
            // Show card (use default display); animate opacity via CSS transition
            card.style.display = '';
            requestAnimationFrame(() => { card.style.opacity = '1'; });
        } else {
            // Fade out then hide after transition completes
            card.style.opacity = '0';
            card._hideTimeout = setTimeout(() => {
                card.style.display = 'none';
                card._hideTimeout = null;
            }, 300);
        }
    });
}

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