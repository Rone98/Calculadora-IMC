const btn = document.getElementById("btn")
function imc() {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value
    const resultado = document.getElementById("resultado")
    const elemento=document.querySelector(".r")


    if (nome === "" || altura === "" || peso === "") {
        resultado.innerHTML="Preencha todos os campos"
        elemento.style.border="2px solid red"
        return

    }

    const calculo = peso / (altura * altura)

    let classificacao = ""


    if(calculo<18.5){

classificacao="Abaixo do peso"
    elemento.style.border="2px solid #3498db"


    }

    else if(calculo<25){
        classificacao="Peso normal"
            elemento.style.border="2px solid #2ecc71"

 
    }



    else if(calculo<30){
        classificacao= "Sobrepeso"
            elemento.style.border="2px solid black"
    }



    else if(calculo<35){
        classificacao="Obesidade grau I"
            elemento.style.border="2px solid #e67e22"
    }

    else if(calculo<40){
        classificacao="Obesidade grau II"
              elemento.style.border="2px solid #e74c3c"

    }

    else{

        classificacao="Obesidade grau III consulte um médico!"
         elemento.style.border="2px solid red"
    }

resultado.innerHTML=`${nome} seu IMC é de ${calculo.toFixed(1)} ${classificacao}`



}




btn.addEventListener("click", imc)