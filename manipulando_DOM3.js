
const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo_a')
const input2 = document.querySelector('#calculo_b')
const form = document.querySelector('#formulario')
const boton = document.querySelector('#btncalculador')
const result = document.querySelector('#result')

form.addEventListener('submit', btnOnClick)

function btnOnClick(event){
    event.preventDefault()
    let resultado = Number(input1.value) + Number(input2.value)
    result.innerText = "El resultado es: " + resultado
}