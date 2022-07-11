console.log('JS OK')
/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

console.log('VUE OK' + Vue)

const root = new Vue({
    el: '#root',
    data: {
        textMessage: 'ciao, sono Gabriele e ho 23 anni',
        image: 'img/Gabry.png'
    }

})