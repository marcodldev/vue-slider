var app = new Vue({
    el: '#root',
    data: {
        imgar: [
            { nome: 'img1', url: './img/1.jpg' },
            { nome: 'img2', url: './img/2.jpg' },
            { nome: 'img3', url: './img/3.jpg' },
            { nome: 'img4', url: './img/4.jpg' },
            { nome: 'img5', url: './img/5.jpg' },
        ],
        indice: 0,
    },
    methods: {
        cambiaOggettoRight: function () {
            let lunghezza = this.imgar.length - 1;
            console.log(lunghezza)

            if (this.indice >= lunghezza) {
                return this.indice = 0;
            } else {
                return this.indice++;
            }
        },

        cambiaOggettoLeft: function () {
            let min = 0;

            if (this.indice <= min) {
                return this.indice = this.imgar.length -1;
            } else {
                return this.indice--;
            }
        }
    }
})


