



// Struttura Vanilla JS
// const slides = [
// {
//     image: 'img/01.webp',
//         title: 'Marvel\'s Spiderman Miles Morale',
//         text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//     }, {
//         image: 'img/02.webp',
//         title: 'Ratchet & Clank: Rift Apart',
//         text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//     }, {
//         image: 'img/03.webp',
//         title: 'Fortnite',
//         text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//     }, {
//         image: 'img/04.webp',
//         title: 'Stray',
//         text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//     }, {
//         image: 'img/05.webp',
//         title: "Marvel's Avengers",
//         text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
//     }
// ];
// 
// console.log(slides);
// 

// Partendo dal markup dato, rifare lo slider
// ma questa volta usando Vue
// con le thumbnails.




const { createApp } = Vue;
  createApp ({
    data (){
      return {

        // Indice
        activeImage: 0,


        // Array id oggetti 

        slides: [
          {
            image: 'img/01.webp',
            title: 'Marvel\'s Spiderman Miles Morales',
            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
          }, 
          {
            image: 'img/02.webp',
            title: 'Ratchet & Clank: Rift Apart',
            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
          }, 
          {
            image: 'img/03.webp',
            title: 'Fortnite',
            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
          }, 
          {
            image: 'img/04.webp',
            title: 'Stray',
            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
          },
          {
            image: 'img/05.webp',
            title: "Marvel's Avengers",
            text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
          }
          ],
      }
    },
    // metodo di navigazione immagini
    methods: {

      nextImage() {
        // Incremento INDICE
        this.activeImage++;
        // poi valuta se siamo oltre come indice allora torna alla prima posizione
        // In questo caso la lunghezza sarà di tutto slides perché deve comprendere anche text e title
        if(this.activeImage > this.slides.length - 1) {
          this.activeImage = 0;
        }
      },

      prevImage() {
        // decremento INDICE
        this.activeImage--;
        if(this.activeImage < 0) {
            // In questo caso la lunghezza sarà di tutto slides perché deve comprendere anche text e title
          this.activeImage = this.slides.length - 1;
        }
      },

      // Bonus 1- al click su una thumb, visualizzare in grande l’immagine corrispondente
      thumbClickImg(i) {
        this.activeImage = i;
      }
    }
  }).mount('#app')