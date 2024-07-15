clock= ()=>{
    const timeHour = document.querySelector("#hour");
    const timeMin = document.querySelector("#mins");
    const timeSec = document.querySelector("#sec");
    const timeAm = document.querySelector("#AM");

    let date= new Date();
    let hour= date.getHours()%12 ;
    let ampm= date.getHours() >= 12? "PM": "AM";
    hour= hour===0? 12: hour;
    let mins= date.getMinutes();
    let sec= date.getSeconds();

    timeHour.innerText = zero(hour);
    timeMin.innerText = zero(mins);
    timeSec.innerText = zero(sec);
    timeAm.innerText = (ampm);
}
zero= (number)=>{
    if(number<10){
        return 0+number;
    }
    return number
}
setInterval(clock,1000)
clock()