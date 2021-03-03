function checkSpam(string){
  //проверка на незаполненность и на другой тип
  if(!string || typeof(string) != 'string'){
    return false;
  }
  //значения которые ищем приводим к нижнеу регистру
  const FIRST_VALUE = '1xBet'.toLowerCase();
  const SECOND_VALUE = 'XXX'.toLowerCase(); 
  //введённые значения приводим к нижнеу регистру
  let toSmallText = string.toLowerCase();
  if(toSmallText.indexOf(FIRST_VALUE) != -1 || toSmallText.indexOf(SECOND_VALUE) != -1){
    return true;
  }
  return false;   
}
