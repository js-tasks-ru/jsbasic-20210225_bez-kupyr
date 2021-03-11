//если пользователь не ввёл значение maxlength, оно принимается по умолчанию 5
function truncate(string, maxlength = 5){
  //проверка на отсутствие передачи параметра string
  if(!string){
    return ''
  }
  if(string.length > maxlength){
    return string.substr(0, maxlength -1) + '…'
  }
  return string
}