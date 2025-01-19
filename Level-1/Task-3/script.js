document.addEventListener('DOMContentLoaded', function () {
   const hamButton = document.getElementById('hamButton');
   const nav = document.querySelector('nav');
   const hamIcon = document.getElementById('hamIcon');
   const closeIcon = document.getElementById('closeIcon');

   hamButton.addEventListener('click', function () {
      nav.classList.toggle('menu-active');

      if (nav.classList.contains('menu-active')) {
         hamIcon.style.display = 'none';  
         closeIcon.style.display = 'block';  
      } else {
         hamIcon.style.display = 'block';  
         closeIcon.style.display = 'none';   
      }
   });
});
