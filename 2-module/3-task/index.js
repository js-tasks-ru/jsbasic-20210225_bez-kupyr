function read(a, b) {
  this.a = a;
  this.b = b;
};
function sum(){
   return this.a + this.b;
};
function mul(){
  return this.a * this.b;
};
  
let calculator = {
  // ваш код  
};
calculator.read = read;
calculator.sum = sum;
calculator.mul = mul;
calculator.read(3, 5);

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
