
//Get the number of drum btns
let numberOfDrumButtons = document.querySelectorAll('.drum').length;

// looping through the btns and listening to the btns
for (let i =0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener('click', function () {

    let buttonInnerHTML = this.innerHTML;
    // Button Press
    makeSound;
(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

// Key Press
document.addEventListener('keypress', function(e){
  makeSound(e.key);
  buttonAnimation(e.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
    let tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
      break;

      case "a":
      let crash = new Audio ('sounds/crash.mp3')
      crash.play();
        break;

      case "s":
      let tom2 = new Audio ('sounds/tom-2.mp3')
      tom2.play();
        break;

      case "d":
      let tom4 = new Audio ('sounds/tom-4.mp3')
      tom4.play();
        break;

      case "j":
      let snare = new Audio ('sounds/snare.mp3')
      snare.play();
        break;

      case "k":
      let tom3 = new Audio ('sounds/tom-3.mp3')
      tom3.play();
        break;

      case "l":
      let kick = new Audio ('sounds/kick-bass.mp3')
      kick.play();
        break;

    default: console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  let activeKey = document.querySelector('.'+currentKey);
  activeKey.classList.add('pressed');

  setTimeout(function() {
    activeKey.classList.remove('pressed');
  }, 100);
}
