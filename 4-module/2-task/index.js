function makeDiagonalRed(table) {  
  let trCollections = table.rows;  
  for(let i = 0; i < trCollections.length; i++){
    console.log(trCollections[i])
    let tdCollections = trCollections[i].cells;
    if(tdCollections[i].cellIndex === i){
      tdCollections[i].style.background = "red";        
    }
  }
}