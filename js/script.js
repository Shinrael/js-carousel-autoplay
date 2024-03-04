// Creo la const con il contenitore delle immagini e i pulsanti

const imageContainer = document.querySelector('.image-container');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const cardsContainer = document.querySelector('.card-lat');
let intervalId;

let counterImg = 0;

// Creo l'array con tutte le immagini

const images = [
  'assets/img/01.webp',
  'assets/img/02.webp',
  'assets/img/03.webp',
  'assets/img/04.webp',
  'assets/img/05.webp',
]

// Avvio il ciclo per aggiungere la classe alle immagini

for (let i = 0; i < images.length; i++) {
  const img = images[i];
  imageContainer.innerHTML += `<img class="image hidden" src="${img}">`
  cardsContainer.innerHTML += ` <div class="card-container">
  <img src="${img}"> 
  `
}

// Prendiamo tutte le immagini

const imgCollection = document.getElementsByClassName('image');
const cardCollection = document.getElementsByClassName('card-container');


// Rimuoviamo la classe hidden alla prima immagine


imgCollection[0].classList.remove('hidden');

// BONUS 2 aggiungo la classe .active-card alla prima card

cardCollection[counterImg].classList.add('active-card');

// Incrementiamo e decrementiamo il counter con le frecce

up.addEventListener('click', function (){
   // Prima aggiungo la classe hidden

   imgCollection[counterImg].classList.add('hidden');

   //  BONUS 2

   cardCollection[counterImg].classList.remove('active-card');

  //  BONUS 1

   counterImg = (counterImg - 1 + images.length) % images.length;


   // Dopo la rimuovo
 
   imgCollection[counterImg].classList.remove('hidden');

   cardCollection[counterImg].classList.add('active-card');
})

down.addEventListener('click', function (){  

  goAhead();

})

// Creo l'evento per settare uno stop quando vado sopra al cardsContainer

cardsContainer.addEventListener('mouseover', function() {
  clearInterval(intervalId);
});

// Creo l'evento per far avanzare automaticamente lo slider quando il mouse sta fuori dal cardsContainer

cardsContainer.addEventListener('mouseout', function() {
  intervalId = setInterval(goAhead, 3000);
});



//////////////////////////////////// FUNCTION

function goAhead() {

  // Prima aggiungo la classe hidden

  imgCollection[counterImg].classList.add('hidden');

  // BONUS 2

  cardCollection[counterImg].classList.remove('active-card');


  // BONUS 1
 
  counterImg = (counterImg + 1) % images.length;


  // Dopo la rimuovo

  imgCollection[counterImg].classList.remove('hidden');

  cardCollection[counterImg].classList.add('active-card');
}