document.addEventListener('DOMContentLoaded', function () {
  const burgerMenuIcon = document.querySelector('#menu-icon');
  const burgerMenu = document.querySelector('#menu');
  const burgerLinks = document.querySelectorAll('.menu-link');

  if (burgerMenuIcon && burgerMenu) {
    burgerMenuIcon.addEventListener('click', () => {
      toggleMenu(burgerMenu);
    });
  }

  document.addEventListener('click', (event) => {
    if (burgerMenu) hideMenu(event, burgerMenuIcon, burgerMenu);
  });

  if (burgerLinks && burgerLinks.length) {
    burgerLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        toggleMenuLink(e);
        if (burgerMenu && !burgerMenu.classList.contains('hidden')) burgerMenu.classList.add('hidden');
      });
    });
  }

  let sectionLinks = document.querySelectorAll('.section-link');
  if (sectionLinks && sectionLinks.length) {
    sectionLinks.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });
  }

  if (typeof L !== 'undefined') {
    try {
      // Center the map on Bordeaux, France
      const map = L.map('map').setView([44.8378, -0.5792], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
    } catch (err) {
      console.error('Leaflet map init error:', err);
    }
  } else {
    console.warn('Leaflet (L) is not defined. Map will not be initialized.');
  }
});

function toggleMenu(menu) {
  if (!menu) return;
  menu.classList.toggle('hidden');
}

function hideMenu(event, burgerMenuIcon, burgerMenu) {
  if (!burgerMenu) return;
  if (event.target === burgerMenuIcon || burgerMenu.contains(event.target)) {
    return;
  }

  burgerMenu.classList.add('hidden');
}

function toggleMenuLink(event) {
  const links = document.querySelectorAll('.menu-link');
  links.forEach((link) => {
    link.classList.remove('bg-black', 'text-white');
  });

  const target = event.currentTarget || event.target;
  target.classList.add('bg-black', 'text-white');
}

function handleLinkClick(event) {
  const el = event.currentTarget || event.target;
  if (!el) return;
  const href = el.getAttribute('href');
  if (!href || !href.startsWith('#')) return;
  event.preventDefault();
  const target = document.querySelector(href);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
