function makeDiagonalRed(table) {  
  let trCollections = table.rows;  
  for(let i = 0; i < trCollections.length; i++){
    let tdCollections = trCollections[i].cells;
    tdCollections[i].style.background = "red";
  }
}