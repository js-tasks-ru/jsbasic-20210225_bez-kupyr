function getMinMax(str) {
  //итоговый объект
  let objectMinAndMaxNumbers = {};
  //массив всех значений
  let arrayValues = str.split(",").join(" ").split(" ");
  //формируем массив чисел, отсеиваем не числа
  let arrayNumbers = arrayValues.filter(value => Number(value));    
  //проверяем на количество элементов в массиве...если там меньше одного то   не запускаем код далее...нет смысла.
  if(arrayNumbers.length < 1){
    return null;
  }
  objectMinAndMaxNumbers.min = Number(Math.min(...arrayNumbers));
  objectMinAndMaxNumbers.max = Number(Math.max(...arrayNumbers));
  return objectMinAndMaxNumbers;
}