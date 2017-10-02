const button = document.getElementById("button");
const after = document.getElementById("after");
const buttons = document.getElementsByClassName("click");

function showPopUp(){
  button.style.width = "0px";
  button.style.height = "0px";
  after.style.width = "400px";
  after.style.height = "100px";

}

function noPopUp(){
  button.style.width = "30px";
  button.style.height = "30px";
  after.style.width = "0px";
  after.style.height = "0px";

}
