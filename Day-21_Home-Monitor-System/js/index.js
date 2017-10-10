const buttons = Array.from(document.querySelectorAll(".button"));
const backcolor = Array.from(document.querySelectorAll(".backcolor"));

var arr = [];

for (var i=0; i<buttons.length; i++){
  arr.push(0);
}

console.log("Starting");

buttons.forEach(button => button.addEventListener("click", moveUp));

function moveUp(){
  console.log("in the func");
  for(var i=0; i<buttons.length; i++){
    if(this === buttons[i] && arr[i] === 0){
      console.log("it works");
      buttons[i].style.bottom = "65%";
      backcolor[i].style.top = "0%";
      arr[i] = 1;
    } else if (this === buttons[i] && arr[i] === 1) {
      buttons[i].style.bottom = "0%";
      backcolor[i].style.top = "100%";
      arr[i] = 0;
    }
  }
}