function filterRange(arr, a, b) {
  //значения попадающие в указанный диапазон будут добавляться в массив newArray
  let newArray = arr.filter(prop => prop >= a && prop <= b);         
  return newArray;
}