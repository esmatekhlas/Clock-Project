setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hover.style.transform = `rotate(${hrotation}deg)`
    minot.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
   
}, 1000);

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    document.getElementById('clockis').innerHTML=`${htime}:`;
    document.getElementById('clockis1').innerHTML= `${mtime}:`;
    document.getElementById('clockis2').innerHTML= `${stime}`;
    
}, 1000);