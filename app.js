let numero = document.querySelector(".numero")
let boton = document.querySelector(".enviar")
let parrafo = document.querySelector(".resultado")


boton.addEventListener("click",esNumPrimo)


function esNumPrimo(){
    let num = Number(numero.value)
    if (isNaN(num)){
        parrafo.textContent = "Caracter no válido"
    }
    else if(num==1){
        parrafo.textContent = "El número no es primo"
    }
    else{
        esPrimo = true
        for(let i = 2; i < num ; i++){
            if (num % i == 0){
                esPrimo = false
                break
            }
        }
        if (esPrimo == true){
            parrafo.textContent = "El número es primo"
        }
       
        else if (esPrimo== false){
        parrafo.textContent = "El número no es primo"

      }
       
      

    }

}

