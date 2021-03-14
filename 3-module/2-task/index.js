let arr = [5,15,105,37,24,1002,75,12,44,13,98,32, 3, 8,63, 1];

function filterRange(arr, a, b) {
  //новый массив куда будем складывать значения попадающие в указанный диапазон
  const newArray = [];
   arr.forEach(prop => {
     //если условие выполняется добавляем значение в новый массив...если нет...идём дальше
     if(prop >= a && prop <= b){
       newArray.push(prop);
     }        
   })
  return newArray;
}
let filtered = filterRange(arr, 13, 63);
