(function () {
  // Contact form (demo): validate, then show a message instead of sending.
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      status.classList.add('form__status--error');
      status.textContent = 'Please fill in your name, a valid email, and a short message.';
      var firstInvalid = form.querySelector(':invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    status.classList.remove('form__status--error');
    status.textContent = 'Thanks! This is a demo, so messages aren’t sent yet.';
    form.reset();
  });

  // Back to top: show the button once the visitor scrolls past the hero.
  var toTop = document.getElementById('to-top');

  function updateToTop() {
    toTop.classList.toggle('is-visible', window.scrollY > 600);
  }

  window.addEventListener('scroll', updateToTop, { passive: true });
  updateToTop();
})();
