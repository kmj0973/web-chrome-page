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
        nick.style.textShadow = ` 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px red, 0 0 82px red, 0 0 92px red, 0 0 102px red, 0 0 151px red`;
    }
    else if(nick.innerText == "<암주>"){
        nick.style.textShadow = ` 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #a85735, 0 0 82px #a85735, 0 0 92px #a85735, 0 0 102px #a85735, 0 0 151px #a85735`;
        //nick.style.color = "#a85735";
    }
    else if(nick.innerText == "<연주>"){
        nick.style.textShadow = ` 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #ff71f0, 0 0 82px #ff71f0, 0 0 92px #ff71f0, 0 0 102px #ff71f0, 0 0 151px #ff71f0`;
        //nick.style.color = "#ff71f0";
    }
    else if(nick.innerText == "<수주>"){
        nick.style.textShadow = ` 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #006dff, 0 0 82px #006dff, 0 0 92px #006dff, 0 0 102px #006dff, 0 0 151px #006dff`;
        //nick.style.color = "#006dff";
    }
    else if(nick.innerText == "<풍주>"){
        nick.style.textShadow = ` 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0cab00, 0 0 82px #0cab00, 0 0 92px #0cab00, 0 0 102px #0cab00, 0 0 151px #0cab00`;
        //nick.style.color = "#0cab00";
    }
    else if(nick.innerText == "<충주>"){
        nick.style.textShadow = ` 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #b167ff, 0 0 82px #b167ff, 0 0 92px #b167ff, 0 0 102px #b167ff, 0 0 151px #b167ff`;
        //nick.style.color = "#b167ff";
    }
    nick.classList.remove("hidden");
    h1.classList.remove("hidden");
    changeBtn.classList.remove("hidden");
    h1.innerText = `『 ${name} 』`;
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
loginForm.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
    };
    }, true);
if(localStorage.getItem("username") !== null){
   paintGreeting(localStorage.getItem("username"));
}
else{
    changeBtn.classList.add("hidden");
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",onLoginSubmit);
}
//염주, 암주, 음주, 하주, 수주, 풍주