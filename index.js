const time = document.getElementById('time');
const timeFormat = document.getElementById('timeFormat');


document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(showTime ,1000);
});

const showTime = () =>{
    let date = new Date();

    
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    
    let format = hour >= 12 ? "PM"  : "AM";
    
    hour = hour % 12;
    
    hour = hour<10 ? `0${hour}` : hour;
    minute = minute<10 ? `0${minute}` : minute;
    second = second<10 ? `0${second}` :second ;

    time.innerHTML = `${hour} : ${minute} : ${second}`;
    timeFormat.innerHTML = format;
    
}