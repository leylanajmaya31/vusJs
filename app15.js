const app = Vue.createApp({
    data() {
        return {
        nomFilm: '',
        mesFilms: [],
        };
    },
    methods: {
        ajouterFilm() {
        this.mesFilms.push(this.nomFilm);
        },
        retirerFilm(index){
           this.mesFilms.splice(index, 1);
            console.log(mesFilms);
        }
     
    },
    });
    app.mount('#monApp');