(() => {
  const refs = {
    mobileMenuOpenBtn: document.querySelector('[data-menu-open]'),
    mobileMenuCloseBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.mobileMenuOpenBtn.addEventListener('click', toggleMenu);
  refs.mobileMenuCloseBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden")
  }
})();