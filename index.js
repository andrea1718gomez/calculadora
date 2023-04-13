let numeros = [];
let respuesta = 0;

const btns = document.querySelectorAll(".btns")
const label = document.querySelector("#label")
const limpiar = document.querySelector("#limpiar")
const igual = document.querySelector("#igual")


// En es for son los botones numericos
for (i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", (event) => {
        label.textContent += event.target.value;

    });

}

// Esto evalua la oporacion y nuestra el resultado
igual.addEventListener("click",() => {
    try{
        let respuesta = eval(label.textContent);
        label.textContent = respuesta;
    }catch(error){
        label.textContent = "Expreción mal formada"
    }
})

// Esto es para linpiar 
limpiar.addEventListener("click", () => {
    label.innerHTML = "";
})
