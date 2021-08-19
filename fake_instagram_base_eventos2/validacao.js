// console.log("arquivo inserido")

let divErros = document.querySelector(".form-auth .erros")
let inputDate = document.createElement("input");
inputDate.setAttribute("type", "date");
inputDate.setAttribute("name", "birthday");


let divPai = document.querySelector(".form-auth")
divPai.insertBefore (inputDate, divErros)


// ---------- tentativas:
// let novoHTML = "<input type="date" name="birthday" placeholder="Digite sua data de nascimento">";
// const novoHTML = "Olha eu aqui!"
// let allInput = document.querySelectorAll("form-auth input");
// let lastInput = allInput[allInput.lenght-1];
// allInput.insertBefore(novoHTML, lastInput)
// allInput.innerHTML="Olha eu aqui!"
// console.log(allInput)
// formulario.insertBefore(novoHTML, divErros)
// let allInput = document.querySelectorAll("form-auth input");
// let lastInput = allInput[allInput.lenght-1];
// lastInput.innerText += "Olha eu aqui!"
// ---------


// evento disparado quando a janela termina de carregar
window.addEventListener("load", (event_load)=> {
    let formulario = document.querySelector(".form-auth");
    // console.log(formulario)
    let btnSubmit = document.querySelector(".form-auth button");
    
    

    // elemento.addEventListener(nome-do-evento), (função disparada ) => {}
    btnSubmit.addEventListener("click", (event_submit) => {
        // interrompe o envio
        event_submit.preventDefault();
        
        let listaErros = document.querySelector(".erros ul");
        let erros = []; 
        //  para apagar a lista de erros anteriores:
        listaErros.innerHTML = "";

        // Imprimir erros:
        let inputNome = document.getElementsByName("name");
        // console.log(inputNome[0].value)
        let nomeValue = inputNome[0].value;
        if(nomeValue == "" || nomeValue.length < 2 || nomeValue.length > 80) {
            erros.push("Campo Nome está inválido!") 
        }

        let inputSobrenome = document.getElementsByName("surname");
        let sobrenomeValue = inputSobrenome[0].value;
        if(sobrenomeValue == "" || sobrenomeValue.length < 2 || sobrenomeValue.length > 100) {
            erros.push("Campo Sobrenome está inválido!") 
        }

        let inputEmail = document.getElementsByName("email"); 
        let emailValue = inputEmail[0].value;
        if(emailValue == "" || emailValue.length < 10 || emailValue.length > 180 || emailValue.indexOf("@") == -1 || emailValue.indexOf(".") == -1) {
            erros.push("Campo Email está inválido!") 
        }

        let inputSenha = document.getElementsByName("password"); 
        let senhaValue = inputSenha[0].value;
        if(senhaValue == "" || senhaValue.length < 8 || senhaValue.length > 100) {
            erros.push("Campo Senha está inválido!") 
        }

        let inputUsername = document.getElementsByName("username"); 
        let usernameValue = inputUsername[0].value;
        if(usernameValue == "" || usernameValue.length < 10 || usernameValue.length > 15) {
            erros.push("Campo Username está inválido!") 
        }
       
        let inputNascimento = document.getElementsByName("birthday");
        let birthdayValue = inputNascimento[0].value
        function calcAge(dateString) {
            var dataAtual = +new Date(dateString);
            return ~~((Date.now() - dataAtual) / 31557600000)
        }
        // console.log(calcAge(birthdayValue))
        
        if(birthdayValue == "" || calcAge(birthdayValue) < 16 || calcAge(birthdayValue) > 120) {
            erros.push("Campo Data de nascimento está inválido!") 
        }

        for (const erro of erros) {
            listaErros.innerHTML += "<li>" + erro +"</li>"
            //     template sprint
            //     listaErros.innerHTML += `<li> ${erro} </li>`;
        }
        
    })
})