//grabs local time 
let time = document.getElementById('clock');

// shows the clock on the page
setInterval(() => {
    let d = new Date ();
    time.innerHTML = d.toLocaleTimeString();
},1000)

// alert 
setTimeout(function () { alert("get up and move."); }, 20000); // thousands refers to milliseconds (20,000 is 20 seconds)
