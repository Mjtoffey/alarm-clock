function updateTime() {
    const display = document.getElementById('clock');
    const date = new Date();
        console.log(display)
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
        
    display.innerText=(`${hour} : ${minutes} : ${seconds}`)
}

function formatTime(i) {
    if ( getMinutes, getSeconds < 10 ) {
        time = "0" + getMinutes, getSeconds;
        return time;

    }
    else {
        return time;
    }
}

setInterval(updateTime, 1000);
