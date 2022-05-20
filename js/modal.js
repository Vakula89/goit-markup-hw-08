(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    mobileMenuOpenBtn: document.querySelector('[data-menu-open]'),
    mobileMenuCloseBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  refs.mobileMenuOpenBtn.addEventListener('click', toggleMenu);
  refs.mobileMenuCloseBtn.addEventListener('click', toggleMenu);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden")
  }
})();