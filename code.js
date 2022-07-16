setInterval(MyClock, 1000)

const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

function MyClock() { 

let now = new Date();
let seconds = now.getSeconds() / 60
const minutes = (seconds + now.getMinutes()) / 60
const hours = (minutes + now.getHours()) / 12


setRotation(second, seconds)
setRotation(minute, minutes)
setRotation(hour, hours)

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
  }

MyClock()
/*************************************************************************************** */
const clock = document.querySelector('.horloge');

 const myOclock = () => {

     let now = new Date();

     let hour = now.getHours();
     let minute = now.getMinutes();
     let second = now.getSeconds();

     let html = `
       <span>${ hour }</span> :
       <span>${ minute }</span> :
       <span>${ second }</span>
     `

     clock.innerHTML = html
 } 


  setInterval(myOclock, 1000)