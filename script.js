'use strict';


let button = document.querySelector('.redBtn');
let body = document.querySelector('.background');
let container = document.querySelector('.vertical-center');
let timeInfo = document.querySelector('.time-info');
let lastUpdate = document.querySelector('.last-update');

button.addEventListener('click', (event)=>{
    pageChange(button.textContent, Date.now());
})

document.addEventListener('DOMContentLoaded', renderState);

function pageChange(textContent, date){

    lastUpdate.innerHTML = '';
    
    if (textContent === 'Turn off'){
        button.innerHTML = 'Turn on';
        body.style.backgroundColor = "black";
        lastUpdate.appendChild(document.createTextNode('Last turn off:'));
    }
    else {
        button.innerHTML = 'Turn off'
        body.style.backgroundColor = "white";
        lastUpdate.appendChild(document.createTextNode('Last turn on:'));
    }

    setTime(new Date(date));
    storeStateInLocalStorage(button.textContent, timeInfo.textContent);
}

function pageSet(textContent, date){

    if (textContent === 'Turn on'){
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
    timeInfo.appendChild(document.createTextNode(date));
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


  function storeStateInLocalStorage(textContent, date){
    
    const buttonTextContent = textContent;
    localStorage.setItem('textContent', JSON.stringify(buttonTextContent));
    
    const dateOfChange = date;
    localStorage.setItem('date', JSON.stringify(dateOfChange));
  }

  function renderState() {
    
    const buttonTextContent = localStorage.getItem('textContent') !== null 
    ? JSON.parse(localStorage.getItem('textContent')) 
    : [];

    const dateOfChange = localStorage.getItem('date') !== null 
    ? JSON.parse(localStorage.getItem('date')) 
    : [];

    if (buttonTextContent.length !== 0 && dateOfChange.length !== 0){
        pageSet(buttonTextContent, dateOfChange);
    }
}