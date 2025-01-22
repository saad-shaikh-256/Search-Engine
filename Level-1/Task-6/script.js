const moonIcon = document.getElementById('hamIcon');
const body = document.body;
const nav = document.querySelector('nav');
const leftLink = document.getElementById('leftLink');
const centerLink = document.getElementById('centerLink');
const rightLink = document.getElementById('rightLink');
const changeColorButton = document.getElementById('changeColorButton');


let isDarkMode = false;

moonIcon.addEventListener('click', function () {
   isDarkMode = !isDarkMode;

   if (isDarkMode) {
      moonIcon.src = 'Assets/Icons/sunIcon.svg';
      body.style.backgroundColor = '#212121'; 
      body.style.color = '#ffffff';
      nav.style.color = '#ffffff';
      leftLink.style.color = '#ffffff';
      centerLink.querySelectorAll('a').forEach(link => link.style.color = '#ffffff'); 
      rightLink.style.color = '#ffffff';
   } else {
      moonIcon.src = 'Assets/Icons/moonIcon.svg';
      body.style.backgroundColor = '#ffffff'; 
      body.style.color = '#212121'; 
      nav.style.color = '#212121'; 
      leftLink.style.color = '#212121'; 
      centerLink.querySelectorAll('a').forEach(link => link.style.color = '#212121'); 
      rightLink.style.color = '#212121'; 
   }
});


function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

changeColorButton.addEventListener('click', () => {
   let randomColor = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
   changeColorButton.style.backgroundColor = randomColor;
});
