//если пользователь не ввёл значение maxlength, оно приниается по умолчанию 5
function truncate(string, maxlength = 5){
  //проверка на отсутствие передачи параметра string
  if(!string){
    return 'Введите данные'
  }
  //изенённая строка
  let newString;
  if(string.length > maxlength){
    newString = string.substr(0, maxlength -1) + '…'
    return newString
  }
  return string
}
