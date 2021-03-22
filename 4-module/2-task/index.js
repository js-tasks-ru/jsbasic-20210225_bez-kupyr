function makeDiagonalRed(table) {  
  let trCollections = table.rows;
  let indexTd = 0;
  for (let tr of trCollections){         
    let tdColletions = tr.cells;
    for (let td of tdColletions){
      if(td.cellIndex === indexTd){
        td.style.background = "red";
      }            
    }
    indexTd++; 
  }  
}