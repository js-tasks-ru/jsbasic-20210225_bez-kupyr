function toggleText () {
  let button = document.querySelector(".toggle-text-button");
  let divElement = document.querySelector("#text");
  button.onclick = сhangeAttributeButton;
  function сhangeAttributeButton () {
    divElement.hidden = !divElement.hidden;
  }
}