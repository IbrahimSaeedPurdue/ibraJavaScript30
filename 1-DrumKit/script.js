window.onload = function() {
  //CLICK EVENTS
  var musicElements = document.getElementsByClassName("musicButton");
  for(var i = 0; i < musicElements.length; i++) {
    console.log("here");
    musicElements[i].onclick = function(e) {
      let btn = e.srcElement;
      let btnBounds = btn.getBoundingClientRect();
      let X = btnBounds.left  + (btn.offsetWidth / 2);
      let Y = btnBounds.top + window.scrollY+ (btn.offsetHeight / 2);

      let rippleDiv = document.createElement("div");
      rippleDiv.setAttribute("style","top:"+Y+"px; left:"+X+"px;");
      rippleDiv.classList.add("ripple");
      document.body.appendChild(rippleDiv);

      setTimeout(function(){
        rippleDiv.parentElement.removeChild(rippleDiv);
      }, 700);
    }
  }
}

//KEY DOWN EVENT
window.addEventListener('keydown', (e) => {
  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if(audio == null){
    return;
  } 
  var musicButton = document.querySelector(`.musicButton[data-key="${e.keyCode}"]`);
  
  let btn = musicButton;
  let btnBounds = musicButton.getBoundingClientRect();
  let X = btnBounds.left  + (musicButton.offsetWidth / 2);
  let Y = btnBounds.top + window.scrollY+ (musicButton.offsetHeight / 2);

  

  let rippleDiv = document.createElement("div");
  rippleDiv.setAttribute("style","top:"+Y+"px; left:"+X+"px;");
  rippleDiv.classList.add("ripple");
  document.body.appendChild(rippleDiv);

  setTimeout(function(){
    rippleDiv.parentElement.removeChild(rippleDiv);
  }, 700);
  audio.currentTime = 0;
  audio.play();


});
