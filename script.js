'use strict';


let button = document.querySelector('.redBtn');
let body = document.querySelector('.background');
let container = document.querySelector('.vertical-center');
let timeInfo = document.querySelector('.time-info');
let lastUpdate = document.querySelector('.last-update');

button.addEventListener('click', (event)=>{
    pageChange([button.textContent, Date.now()]);
})

document.addEventListener('DOMContentLoaded', renderState);

function pageChange(state){

    lastUpdate.innerHTML = '';
    
    if (state[0] === 'Turn off'){
        button.innerHTML = 'Turn on';
        body.style.backgroundColor = "black";
        lastUpdate.appendChild(document.createTextNode('Last turn off:'));
    }
    else {
        button.innerHTML = 'Turn off'
        body.style.backgroundColor = "white";
        lastUpdate.appendChild(document.createTextNode('Last turn on:'));
    }

    setTime(new Date(state[1]));
    storeStateInLocalStorage(button.textContent, timeInfo.textContent);
}

function pageSet(state){

    if (state[0] === 'Turn on'){
        button.innerHTML = 'Turn on';
        body.style.backgroundColor = "black";
        lastUpdate.appendChild(document.createTextNode('Last turn off:'));
    }
    else {
        button.innerHTML = 'Turn off'
        body.style.backgroundColor = "white";
        lastUpdate.appendChild(document.createTextNode('Last turn on:'));
    }
    
    timeInfo.innerHTML = '';
    timeInfo.appendChild(document.createTextNode(state[1]));
}

function setTime(date){

    timeInfo.innerHTML = '';
    timeInfo.appendChild(document.createTextNode(formatDate(date)));

}

function formatDate(date) {
    return (
      [
        padTwoDigits(date.getDate()),
        padTwoDigits(date.getMonth() + 1),
        date.getFullYear()
      ].join("-") +
      " " +
      [
        padTwoDigits(date.getHours()),
        padTwoDigits(date.getMinutes()),
        padTwoDigits(date.getSeconds()),
      ].join(":")
    );
  }

  function padTwoDigits(num) {
    return num.toString().padStart(2, "0");
  }


  function storeStateInLocalStorage(btnState, lastTimeChange){
    
    const state = [btnState,lastTimeChange];
    localStorage.setItem(['btnState', 'lastTimeChange'], JSON.stringify(state));
  }

  function renderState() {
    
    const state = localStorage.getItem(['btnState', 'lastTimeChange']) !== null 
    ? JSON.parse(localStorage.getItem(['btnState', 'lastTimeChange'])) 
    : [];

    if (state.length !== 0){
        pageSet(state);
    }
}