function highlight(table) {
  trCollections = table.querySelectorAll("tbody > tr");
  for( let i = 0 ; i < trCollections.length ; i++ ){
    let tdCollections = trCollections[i].cells;
    for( let j = 0 ; j < tdCollections.length ; j++){ 
      if(tdCollections[j].innerHTML < 18){
        trCollections[i].style.textDecoration = "line-through";
      }
      tdCollections[j].attributes.length < 1 ? trCollections[i].hidden = true : trCollections[i].hidden = false;
      switch (tdCollections[j].dataset.available) {
        case "true":
          trCollections[i].classList.add("available");
          break;
        case "false":
          trCollections[i].classList.add("unavailable");
          break;
        default:
          break;
      }
      switch (tdCollections[j].innerHTML) {
        case "m":
          trCollections[i].classList.add("male");
          break;
        case "f":
          trCollections[i].classList.add("female");
          break;
        default:
          break;
      }
    }
  }  
}
