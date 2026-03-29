(() => {
  const navButton = document.querySelector('[data-nav-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');

  if (navButton && mobileNav) {
    navButton.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }

  const yearNode = document.querySelector('[data-year]');
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  const enquiryForm = document.querySelector('[data-enquiry-form]');
  const notice = document.querySelector('[data-form-notice]');

  if (enquiryForm && notice) {
    enquiryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      notice.textContent = 'Thanks. Your enquiry has been captured in this demo page.';
      enquiryForm.reset();
    });
  }
})();
