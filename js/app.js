const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form #btn");
const h1 = document.querySelector("h1");
const changeBtn = document.querySelector("#change-user");
//querySelector를 통해 html속성들을 가져올 수 있다.
const nick = document.querySelector("h3");
const joo = ["<염주>","<암주>","<연주>","<수주>","<풍주>","<충주>"]
function onLoginSubmit(e) {
    e.preventDefault();
    const value = loginInput.value;
    loginForm.classList.add("hidden");
    localStorage.setItem("username", value);
    paintGreeting(value);
}
function paintGreeting(name){
    nick.innerText = joo[Math.floor(Math.random()*joo.length)];
    if(nick.innerText === "<염주>"){
        nick.style.color = "red";
    }
    else if(nick.innerText == "<암주>"){
        nick.style.color = "#a85735";
    }
    else if(nick.innerText == "<연주>"){
        nick.style.color = "#ff71f0";
    }
    else if(nick.innerText == "<수주>"){
        nick.style.color = "#006dff";
    }
    else if(nick.innerText == "<풍주>"){
        nick.style.color = "#0cab00";
    }
    else if(nick.innerText == "<충주>"){
        nick.style.color = "#b167ff";
    }
    nick.classList.remove("hidden");
    h1.classList.remove("hidden");
    changeBtn.classList.remove("hidden");
    h1.innerText = `${name} 님`;
}
function changeBtnClick(e){
    e.preventDefault();
    localStorage.removeItem("username");
    loginForm.classList.remove("hidden");
    nick.classList.add("hidden");
    h1.classList.add("hidden");
    changeBtn.classList.add("hidden");
    //window.location.reload();
}

changeBtn.addEventListener("click",changeBtnClick);
loginForm.addEventListener("submit",onLoginSubmit);
if(localStorage.getItem("username") !== null){
   paintGreeting(localStorage.getItem("username"));
}
else{
    changeBtn.classList.add("hidden");
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",onLoginSubmit);
}
//염주, 암주, 음주, 하주, 수주, 풍주