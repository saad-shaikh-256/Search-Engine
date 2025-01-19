document.addEventListener('DOMContentLoaded', function () {
   const hamButton = document.getElementById('hamButton');
   const nav = document.querySelector('nav');

   hamButton.addEventListener('click', function () {
      nav.classList.toggle('menu-active');
   });
});
