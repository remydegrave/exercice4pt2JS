  
var blocAdd = document.querySelector('.blocTotal');

// var height = document.getElementById('presentation').clientHeight; // element.clientHeight donne la hauteur de cet élément en px

window.addEventListener('scroll', animate); // appel de la function 1

//  document.querySelector('body').onscroll = animate; // appel de la function 2
function animate() { //déclaration de la function
   if (window.scrollY > 400) { // valeur en dur(PX)
      // if(window.scrollY > height) { // valeur de la variable height
      blocAdd.classList.add('blocAppear');// ajoute la class blocAppear
   } else {
      blocAdd.classList.remove('blocAppear'); // enlève la class blocAppear
   }

}