



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

// console.log(slides);


// Partendo dal markup dato, rifare lo slider
// ma questa volta usando Vue
// con le thumbnails.


const { createApp } = Vue;

    createApp({
        data() {
            return {
                // INDICE posizione immagine
                activeImage: 0,
                // prima proprietà
                slides: {
                    images: [
                        'img/01.webp',
                        'img/02.webp',
                        'img/03.webp',
                        'img/04.webp',
                        'img/05.webp',
                    ],
                    // Seconda e terza proprietà
                    
                },
            }

        },
        methods: {
            // metodo di navigazione immagine successiva
            nextImage() {
                // Incrementa INDICE posizione
                this.activeImage++;
                // poi valuta se siamo oltre come indice allora torna alla prima posizione
                if(this.activeImage > this.slides.images.length - 1){
                    this.activeImage = 0;
                }
            },

            prevImage() {
                // decremento INDICE posizione
                this.activeImage--;
                // Loop contrario a prima
                if(this.activeImage < 0) {
                    this.activeImage = this.slides.images.length -1;
                }
            }
        }
    }).mount('#app')

