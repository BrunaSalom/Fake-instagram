console.log("Arquivo externo vinculado!")

// alert("Hello!");

let divUsuario = document.querySelector("header .avatar-content div");
// console.log("divUsuario");

// substituindo texto dentro do elemento
divUsuario.innerText = "bruna";

// add texto sem perder o conteúdo anterior
divUsuario.innerText += ".salom";

// selecionar input; getElementsByName retorna array;
let inputNome = document.getElementsByName("name");
let inputSobrenome = document.getElementsByName("surname");

// pegar input Nome com querySelector: document.querySelectorAll ("form input")[1];

// console.log(inputNome, inputSobrenome);
inputNome[0].placeholder = "Digite seu nome";
inputSobrenome[0].placeholder = "Digite seu sobrenome";

// trocar cor de fundo do body
let body = document.querySelector("body");
// console.log(body);
body.style.backgroundColor = "#FAFAFA"

// ----------------------

let inputMax = document.querySelectorAll("input");

inputMax[1].style.borderRadius = "4px";
inputMax[1].style.width = "100%";
inputMax[1].style.boxSizing = "border-box";
inputMax[2].style.borderRadius = "4px";
inputMax[2].style.width = "100%";
inputMax[2].style.boxSizing = "border-box";
inputMax[3].style.borderRadius = "4px";
inputMax[3].style.width = "100%";
inputMax[3].style.boxSizing = "border-box";
inputMax[4].style.borderRadius = "4px";
inputMax[4].style.width = "100%";
inputMax[4].style.boxSizing = "border-box";
inputMax[5].style.borderRadius = "4px";
inputMax[5].style.width = "100%";
inputMax[5].style.boxSizing = "border-box";


let buttonMax = document.querySelector("button");

buttonMax.style.width = "100%";
buttonMax.style.boxSizing = "border-box";


// ----------
// Hendy's way:  ;
// for (let input of inputMax) {
//     input.style.cssText = "border-radius: 4px; box-sizing: border-box; width: 100%;";
// }

// let buttonMax = document.querySelector("form button");
// buttonMax.style.width = "100%"