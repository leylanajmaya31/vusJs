Vue.createApp({
    data() {
    return {
        unLivre: 'Les mémoires de Steven Seagal',
    };
    },
    methods: {
    afficherLivreRandom() {
        const nombreRandom = Math.random();
        if (nombreRandom > 0.5) {
            return 'Le livre de La Jungle';
        } 
        else {
            return 'Le livre de la savane';
        }
    },
    },
}).mount('#bookListApp');

