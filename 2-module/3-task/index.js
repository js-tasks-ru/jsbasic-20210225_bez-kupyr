function read(firstOperand, secondOperand) {
  this.firstOperand = firstOperand;
  this.secondOperand = secondOperand;
};
function sumOfNumbers(){
   return this.firstOperand + this.secondOperand;
};
function mulOfNumbers(){
  return this.firstOperand * this.secondOperand;
};
  
let calculator = {
  firstOperand: null,
  secondOperand: null,
};
calculator.read = read;
calculator.sum = sumOfNumbers;
calculator.mul = mulOfNumbers;
calculator.read(3, 5);

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
