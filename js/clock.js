const clock = document.querySelector("h2#clock")

function countClock(){
    let color_r = Math.floor(Math.random() * 127 + 128).toString(16);
    let color_g = Math.floor(Math.random() * 127 + 128).toString(16);
    let color_b = Math.floor(Math.random() * 127 + 128).toString(16);
    let count = new Date();
    let hour = count.getHours().toString();
    let minutes = count.getMinutes().toString();
    let second = count.getSeconds().toString();
    
    clock.innerHTML = hour.padStart(2,"0")+":"+ minutes.padStart(2,"0") + ":" + second.padStart(2,"0");
    clock.style.color = `#${color_r+color_g+color_b}`;
}
// hour < 10일떄 second <10
// hour < 10 second >10
// hour >10 second <10
// hour > 10 second > 10
countClock();
setInterval(countClock, 1000);

