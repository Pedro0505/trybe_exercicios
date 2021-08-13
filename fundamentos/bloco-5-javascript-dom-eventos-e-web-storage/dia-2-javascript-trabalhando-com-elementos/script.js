console.log(document.getElementById('elementoOndeVoceEsta'))

console.log(document.getElementById('elementoOndeVoceEsta').parentElement.style.color = "red") 

document.getElementById('primeiroFilhoDoFilho').innerText = "Exercicio Trybe"

console.log(document.getElementById('pai').firstElementChild)

console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling)

console.log(document.getElementById('elementoOndeVoceEsta'))

console.log(document.getElementById('elementoOndeVoceEsta').nextSibling)

console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling)

console.log(document.getElementById('pai').lastElementChild.previousElementSibling)

// Exercico da segunda parte

let acessDad = document.getElementById('pai')
let creationId =  document.createElement('section')
creationId.id = 'irmaoelementoOndeVoceEsta'
acessDad.appendChild(creationId)

let acessSon = document.getElementById('elementoOndeVoceEsta')
let createSon = document.createElement('section')
createSon.id = 'filhoDoelEmentoOndeVoceEsta'
acessSon.appendChild(createSon) 

let acessGranSon = document.getElementById('primeiroFilhoDoFilho')
let createGrandSon = document.createElement('section')
createGrandSon.id = 'filhoDoPrimeiroFilhoDoFilho'
acessGranSon.appendChild(createGrandSon)

document.getElementById('filhoDoPrimeiroFilhoDoFilho').parentElement.parentElement.nextElementSibling

// Exercico da terceira parte

