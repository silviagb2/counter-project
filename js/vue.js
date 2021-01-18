const app = Vue.createApp({
    data(){
        return{
            counter: 0,
            textStyle:{
                color:""
            }
        }
    },
    methods:{
        updateCounter(valor){
            this.counter += valor
            if(this.counter < 0){
                this.textStyle.color="red"
            }
            else if(this.counter === 0){
                this.textStyle.color="#333333"
            }
            else{
                this.textStyle.color="green"
            }
        }
    }
})

app.mount(".container")