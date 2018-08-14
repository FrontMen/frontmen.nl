const layout = document.querySelectorAll('.o-layout')[0];
const toggleButtons = document.querySelectorAll('.js-menu-toggle');

const toggleMenu = () => {
  const fn = layout.classList.contains('o-layout--open') ? 'remove' : 'add';
  layout.classList[fn]('o-layout--open');
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
  toggleButtons.forEach((btn) => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      toggleMenu();
      closeOnClickOutside('.o-layout__navigation');
    });
  });
};

document.addEventListener('DOMContentLoaded', initNavigation);
