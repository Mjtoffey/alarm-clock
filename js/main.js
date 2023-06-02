function updateTime() {
    const display = document.getElementById('clock');
    const date = new Date();
        console.log(display)
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
        
    display.innerText=`${hour} : ${minutes} : ${seconds}`
}

function formatTime(time) {
    if ( time < 10 ) {
        return `0${hour} : 0${minutes} : 0${seconds}`
    }
    return time;
}

setInterval(updateTime, 1000);
