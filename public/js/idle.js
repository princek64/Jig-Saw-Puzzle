var idleTime = 0;
var timer = setInterval(timerIncrement,1000);
window.addEventListener('mousemove',()=>{
    idleTime = 0;
});

window.addEventListener('keypress',()=>{
    idleTime = 0;
});

window.addEventListener('touchmove',()=>{
    idleTime = 0;
});

function timerIncrement() {
    idleTime = idleTime + 1;
    // console.log(idleTime);
    if (idleTime > 90) {
        window.location.href="./index.html";
    }
}