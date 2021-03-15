function getMinMax(str) {
  //итоговый объект
  let objectMinAndMaxNumbers = {};
  //массив всех значений
  let arrayValues = str.split(",").join(" ").split(" ");
  //формируем массив чисел, отсеиваем не числа
  let arrayNumbers = [];
  arrayValues.forEach(value => {
    if(Number(value)){
      arrayNumbers.push(value);
    }
  })
  //проверяем на количество элементов в массиве...если там один или меньше то не запускаем код далее...нет смысла.
  if(arrayNumbers.length <= 1){
    return null;
  }
  arrayNumbers.sort( (firstValue, secondValue) => firstValue - secondValue);
  objectMinAndMaxNumbers.min = Number(arrayNumbers[0]);
  objectMinAndMaxNumbers.max = Number(arrayNumbers[arrayNumbers.length-1]);
  return objectMinAndMaxNumbers;
}