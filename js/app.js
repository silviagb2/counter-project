// Tu código aquí
let buttonLow = document.querySelector(".prevBtn")
let buttonAdd = document.querySelector('.nextBtn')
let counter = document.querySelector('#counter')
let counter_number = parseInt(counter.textContent)


buttonLow.addEventListener('click', Reducir)

function Reducir(){
    let result_reducir
    counter_number--
    result_reducir = counter_number
    counter.textContent = result_reducir

    if(counter.textContent<0){    
        counter.style.color = "red";
    }
    else if (counter.textContent==0){
        counter.style.color = "#333333";
    }
    else{
        counter.style.color="green";
    }
}


buttonAdd.addEventListener('click', Aumentar)

function Aumentar(){
    let result_aumentar
    counter_number++
    result_aumentar = counter_number
    counter.textContent = result_aumentar

    if(counter.textContent<0){    
        counter.style.color = "red";
    }
    else if (counter.textContent==0){
        counter.style.color = "#333333";
    }
    else{
        counter.style.color="green";
    }
}






