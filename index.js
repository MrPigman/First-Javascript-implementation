'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');

  const className = document.body.className

  if(className == "light-mode"){
    this.textContent = "Dark";
  } else{
    this.textContent = "Light";
  }
});

