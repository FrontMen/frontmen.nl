const layout = document.querySelector('.o-layout');
const toggleButton = document.querySelector('.js-menu-toggle');
const toggleButtonIcon = toggleButton.querySelector('.c-ico');
const navigationClass = '.o-layout__navigation';

const toggleMenu = () => {
  layout.classList.toggle('o-layout--open');
  toggleButtonIcon.classList.toggle('c-ico--menu-hamburger');
  toggleButtonIcon.classList.toggle('c-ico--menu-close');
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
  toggleButton.addEventListener('click', e => {
    e.stopPropagation();
    toggleMenu();
    closeOnClickOutside(navigationClass);
  });
};

document.addEventListener('DOMContentLoaded', initNavigation);
