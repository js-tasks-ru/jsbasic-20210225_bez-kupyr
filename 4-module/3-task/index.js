function highlight(table) {
  trCollections = table.rows;
  console.log(trCollections);
  for( let i = 0 ; i < trCollections.length ; i++ ){
    let tdCollections = trCollections[i].cells;    
    if(tdCollections[1].textContent < 18){
      trCollections[i].style.textDecoration = "line-through";
    }
    if(tdCollections[3].attributes.length < 1){
      trCollections[i].hidden = true;
    }
    else{
      trCollections[i].hidden = false;
    }   
    switch (tdCollections[3].dataset.available) {
      case "true":
        trCollections[i].classList.add("available");
        break;
      case "false":
        trCollections[i].classList.add("unavailable");
        break;
      default:
        break;
    }
    switch (tdCollections[2].textContent) {
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
