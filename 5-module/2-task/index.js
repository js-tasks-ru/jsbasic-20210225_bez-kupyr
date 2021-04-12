function toggleText () {
  let button = document.querySelector(".toggle-text-button");
  let divElement = document.querySelector("#text");
  button.onclick = () => divElement.hidden = !divElement.hidden; 
}