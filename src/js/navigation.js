const layout = document.querySelectorAll('.o-layout')[0];
const toggleButtons = document.querySelectorAll('.js-menu-toggle');
const navigationClass = '.o-layout__navigation';

const toggleMenu = () => {
  const isOpen = layout.classList.contains('o-layout--open');
  layout.classList[isOpen ? 'remove' : 'add']('o-layout--open');
};

const closeOnClickOutside = selector => {
  const outsideClickListener = event => {
    if (event.target.closest(selector) === null) {
      toggleMenu();
      document.removeEventListener('click', outsideClickListener);
    }
  };

  document.addEventListener('click', outsideClickListener);
};

const initNavigation = () => {
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      toggleMenu();
      closeOnClickOutside(navigationClass);
    });
  });
};

document.addEventListener('DOMContentLoaded', initNavigation);
