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
  // если нажата отмена или esc
  if(name === null){
    print('возвращайтесь, как будете готовы');
    return false
  }
  //пустая строка
  else if(name.length === 0){
    print('вы ничего не ввели');
    return false
  }
  //если использованы пробелы
  else if(name.indexOf(' ') != -1){
    print('пробелов быть не должно');
    return false
  }
  //недостаточное количество символов
  else if(name.length > 0 && name.length < 4){
    print('слишком короткое имя');
    return false
  }
  return true
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