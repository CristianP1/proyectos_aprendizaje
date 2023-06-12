const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const p = document.querySelector('p')
const parrafos = document.querySelector('.parrafos')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')

console.log(h1)

console.log(input.value)

console.log({
    h1,
    p,
    parrafos,
    pid,
    input
})

//Ejemplo modificando un texto

h1.innerHTML = 'Cambio de nombre'
h1.innerText = 'Cambio de nombre 3'

// Obteniendo y modificando atributos HTML

console.log(h1.getAttribute('pantalla'))
h1.setAttribute('pantalla', 'nuevo_atributo')
console.log(h1.getAttribute('pantalla'))

// accediendo, Modificando y eliminando clases HTML

h2.classList.add('segunda_clase')
h2.classList.remove('clase_prueba')

// modificando value de un input

input.value = "cambiar_atributo"

// crear elementos desde js a HTML

const imagen = document.createElement('img')
imagen.setAttribute('src', 'https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=376&q=80%20376w,%20https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=676&q=80%20676w,%20https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=752&q=80%20752w,%20https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=976&q=80%20976w,%20https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1276&q=80%201276w,%20https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1352&q=80%201352w,%20https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1576&q=80%201576w,%20https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1876&q=80%201876w,%20https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1952&q=80%201952w,%20https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2176&q=80%202176w,%20https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2476&q=80%202476w,%20https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2552&q=80%202552w,%20https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2776&q=80%202776w,%20https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3076&q=80%203076w,%20https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3152&q=80%203152w,%20https://images.unsplash.com/photo-1576438162986-c685b1cfed7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3352&q=80%203352w')

pid.append(imagen)