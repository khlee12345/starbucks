const saerchEl = document.querySelector('.search');
const saerchInputEl = saerchEl.querySelector('input');

saerchEl.addEventListener('click', function () {
  saerchInputEl.focus();
});

saerchInputEl.addEventListener('focus', function () {
  saerchEl.classList.add('focused');
  saerchInputEl.setAttribute('placeholder','통합검색');
});

saerchInputEl.addEventListener('blur', function () {
    saerchEl.classList.remove('focused');
    saerchInputEl.setAttribute('placeholder','');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();