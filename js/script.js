document.addEventListener('DOMContentLoaded', function () {
  const cartCount = document.querySelector('.badge.bg-dark');
  const addToCartButtons = document.querySelectorAll('.btn-outline-dark.mt-auto, .btn-outline-dark.flex-shrink-0');
  let count = 0;
  addToCartButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      count++;
      cartCount.textContent = count;
    });
  });
});
