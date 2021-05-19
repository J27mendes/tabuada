

function tabuada (){
    resX.innerHTML = "Multiplicação"
    resD.innerHTML = "Divisão"
    resS.innerHTML = "Soma"
    resM.innerHTML = "Subtração"

    let nTabuada = document.getElementById('numerosTabuada')
    let tab = Number(nTabuada.value)       
        
    for(let t = 1; t<=10; t++){
        resX.innerHTML += `<br><br>${tab} x ${t} = ${tab * t}<br>`              
    }
    for(let t = 1; t<=10; t++){
        resD.innerHTML += `<br><br>${tab} ÷ ${t} = ${tab / t}<br>`
    }
    for(let t = 1; t<=10; t++){
        resS.innerHTML += `<br><br>${tab} + ${t} = ${tab + t}<br>`
    }
    for(let t = 1; t<=10; t++){
        resM.innerHTML += `<br><br>${tab} - ${t} = ${tab - t}<br>`
    }
    
}
