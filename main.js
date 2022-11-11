var app = new Vue({
    el: '#root',
    data: {
        imgar: [
            { id: 1, nome: 'img1', url: './img/1.jpg' },
            { id: 2, nome: 'img2', url: './img/2.jpg' },
            { id: 3, nome: 'img3', url: './img/3.jpg' },
            { id: 4, nome: 'img4', url: './img/4.jpg' },
            { id: 5, nome: 'img5', url: './img/5.jpg' },
        ],
        indice: 0,
    },
    methods: {
        cambiaOggettoRight: function () {
            let lunghezza = this.imgarray.length - 1;
            console.log(lunghezza)

            if (this.indice >= lunghezza) {
                return this.indice = 0;
            } else {
                return this.indice++;
            }
        }

        cambiaOggettoLeft: function () {
            let lunghezza = this.imgarray.length - 1;

            if (this.indice >= lunghezza) {
                return this.indice = 0;
            } else {
                return this.indice--;
            }
        }
    }
})


