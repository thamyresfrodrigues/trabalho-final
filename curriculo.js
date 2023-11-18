// let slide = new Array('nothing yet.jpg','nothing yet.png')

// let tam = slide.length - 1

// let slideatual = 0

// let tempslide

// let valor = 0

// // document.getElementById('slide').style.backgroundImage = `url('${slide[slideatual]}')`

// function troca(valor) {
// slideatual += valor
// if(slideatual < 0){
// slideatual = tam
// }
// else if(slideatual >= tam){
// slideatual = 0
// }
// document.getElementById('slide').style.backgroundImage = `url('${slide[slideatual]}')`
// }


const header = document.querySelector('.header');
const botaoN = document.querySelector('.botaoNoturno');
var cont = 0;
botaoN.addEventListener('click', () => {
header.classList.toggle('dark');
botaoN.innerHTML = "&#9790; ON";
cont++;
botaoN.style.cssText = 
'background-color: lightblue;' +
'color: black';
if(cont % 2 == 0){
    botaoN.innerHTML = "&#9790; OFF";
    botaoN.style.cssText = 
'background-color: darkblue;' +
'color: white';
}
})