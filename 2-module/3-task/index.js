function read(firstOperand, secondOperand) {
  this.firstOperand = firstOperand;
  this.secondOperand = secondOperand;
};
function sum(){
   return this.firstOperand + this.secondOperand;
};
function mul(){
  return this.firstOperand * this.secondOperand;
};
  
let calculator = {
  firstOperand: null,
  secondOperand: null,
};
calculator.read = read;
calculator.sum = sum;
calculator.mul = mul;
calculator.read(3, 5);

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
