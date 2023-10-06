Vue.createApp({
    data() {
        return {
        nameUser: 'Daffy Duck',
        ageUser: 45,
        image:'/test.png',
        };
    },



    methods: {
functionAge() {
        return this.ageUser+10;
    },
    nombreRandom(){
        return Math.random();
    }
    },
}).mount('#app');



