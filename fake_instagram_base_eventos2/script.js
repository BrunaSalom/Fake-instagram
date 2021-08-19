// console.log ("hey");

let btnVerMais = document.querySelector("#more");
// console.log(btnVerMais)
let heart = document.querySelector(".likes img");
// console.log(heart)
let pesquisa = document.querySelector("form");
// console.log(pesquisa)
let likesN = document.querySelector(".likes b");
// console.log(likesN)
let expansao = document.querySelector(".card");
let content = document.querySelector('.content');


// toggle coração rosa + trocar a frase do likes
heart.onclick = function(event) {
    if (heart.getAttribute("src") == "/img/icons/heart.svg") {
        heart.src = "img/red-heart.png";
        likesN.innerHTML = "2 likes"}
    else {
        heart.src = "/img/icons/heart.svg";
        likesN.innerHTML = "1 likes"
    }
}
heart.onmouseover = function(event) {
    heart.style.cssText = "cursor: pointer";
}



// barra de pesquisa com sombra
pesquisa.onmouseover = function() {
    pesquisa.style.cssText = "box-shadow: 0px 1px 3px black"
}

pesquisa.onmouseleave = function() {
    pesquisa.style.cssText = "box-shadow: none"
}



// colocando o pointer no botão
btnVerMais.onmouseover = function(event) {
    btnVerMais.style.cssText = "cursor: pointer";
}

// add a expansao

 btnVerMais.onclick = function() {
     let clone = expansao.cloneNode(true);
     content.insertBefore(clone, btnVerMais);
 }
