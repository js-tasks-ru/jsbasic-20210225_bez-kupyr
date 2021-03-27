function hideSelf() {
  let button = document.querySelector("button");
  button.onclick = getHideElement;
  function getHideElement (){
    button.hidden = true;
  }
}
