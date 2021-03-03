function ucFirst(string){
  //проверка на отсутствие параметра и на другой тип данных
  if( !string || typeof(string) != 'string'){
    return ""
  }
  //меняем регистр первуй буквы
  let firstLetter = string[0].toUpperCase();
  //откидываем первую букву
  let endString = string.slice(1);
  //соединяем изменённую первую букву с значение без первой буквы
  let newString = firstLetter + endString
  return newString
}
