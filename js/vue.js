const app = Vue.createApp({
    data(){
        return{
            counter: 0,
        }
    },
    methods:{
        updateCounter(valor){
            this.counter += valor
        }
    }
})

app.mount(".container")