//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
        title: 'unLivre',
        text: 'Les mémoires de Steven Seagal',
        num: '1234567890',
        value: '"du texte", 99',
        value2: '"name": "COOL", "tel":12748312',
        };
    },
    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app')