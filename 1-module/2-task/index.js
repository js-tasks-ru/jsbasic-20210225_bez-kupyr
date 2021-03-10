/**
 /* Эту функцию трогать не нужно
 */
 function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  /*// если нажата отмена или esc
  if(name === null){
    print('возвращайтесь, как будете готовы');
    return false
  }
  //если использованы пробелы
  else if(name.includes(' ')){
    print('пробелов быть не должно');
    return false
  }
  //недостаточное количество символов
  else if(name.length < 4){
    print('слишком короткое имя');
    return false
  }*/
  return !(name === null || name.includes(' ') || name.length < 4);  
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
sayHello()