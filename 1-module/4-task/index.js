function checkSpam(string){
  //проверка на незаполненность и на другой тип
  if(!string || typeof(string) != 'string'){
    return false;
  }
  //значения которые ищем приводим к нижнеу регистру
  const FIRST_VALUE = '1xBet'.toLowerCase();
  const SECOND_VALUE = 'XXX'.toLowerCase(); 
  //введённые значения приводим к нижнеу регистру
  let textInLowerCase = string.toLowerCase();
  return textInLowerCase.includes(FIRST_VALUE) || textInLowerCase.includes(SECOND_VALUE);
}
