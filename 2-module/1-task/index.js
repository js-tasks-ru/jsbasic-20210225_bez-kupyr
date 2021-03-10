function sumSalary(salaries) {
  //сумма ЗП
  let sumSalaries = 0;
  for (let prop in salaries){
    //проверка на числовой тип и на отсутствие `NaN`, `Infinity`, `-Infinity`
    if(typeof salaries[prop] === "number" && isFinite(salaries[prop])){
      sumSalaries += salaries[prop];    
    }    
  }
  return sumSalaries;
}