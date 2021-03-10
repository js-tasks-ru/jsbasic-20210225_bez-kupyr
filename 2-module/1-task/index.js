function sumSalary(salaries) {
  // ваш код...
  //сумма ЗП
  let sumSalaries = 0;
  /*флаг для проверки есть свойствоc ЗП или нет,если есть...увеличивается на 1...в итоге мы имеем количество таких свойств,
  а если оталось нулевым то таких свойств нет...тогда return 0*/
  let isNumber = 0;
  for (let prop in salaries){
    //проверка на числовой тип
    if(typeof salaries[prop] === "number"){
      //проверка на отсутствие `NaN`, `Infinity`, `-Infinity`
      if(isFinite(salaries[prop])){
        isNumber++;
        sumSalaries += salaries[prop];        
      }    
    }    
  }
  //проверка на наличие свойств с числами...уже без `NaN`, `Infinity`, `-Infinity`
  if(isNumber != 0){
    return sumSalaries;
  }
  return 0;
}
