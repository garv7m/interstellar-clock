const hourEl= document.getElementById("hours");
const minEl= document.getElementById("minutes");
const secEl= document.getElementById("seconds");
const ampmEl= document.getElementById("ampm");

var mysong= document.getElementById("bgmusic");
var icon= document.getElementById("icon");

icon.onclick= function(){
    if(mysong.paused){
        mysong.play();
        icon.src="https://i.ibb.co/RzKvjrx/muted.png";
    }
    else{
        mysong.pause();
        icon.src="https://i.ibb.co/zXJWdj0/unmuted.png";
    }
}

function updateclock(){
    const time= new Date();
    let h= time.getHours();
    let m= time.getMinutes();
    let s= time.getSeconds();
    let ampm= "AM";
    if(h>12){
        h = h-12;
        ampm= "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerHTML= h;
    minEl.innerHTML= m;
    secEl.innerHTML = s;
    ampmEl.innerHTML= ampm;

    setInterval(()=>{
        updateclock()}, 1000);

}

updateclock();