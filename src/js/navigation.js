const layout = document.querySelector('.o-layout');
const toggleButton = document.querySelector('.js-menu-toggle');
const toggleButtonIcon = toggleButton.querySelector('.c-icon');
const navigationClass = '.o-layout__navigation';
const item = document.querySelector('.c-page-navigation__list ');
const link = document.querySelector('.c-page-navigation__link');

const toggleMenu = () => {
  layout.classList.toggle('o-layout--open');
  toggleButtonIcon.classList.toggle('c-icon--menu-hamburger');
  toggleButtonIcon.classList.toggle('c-icon--menu-close');
};

const closeMenu = () => {
  layout.classList.remove('o-layout--open');
};

const closeOnClickOutside = selector => {
  const outsideClickListener = event => {
    if (event.target.closest(selector) === item || link) {
      event.preventDefault();

      if (event.target.innerHTML === 'Work') {
        return '/';
      }
      closeMenu();

      setTimeout(() => {
        window.location.href = event.target.href;
      }, 300);
    }
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
