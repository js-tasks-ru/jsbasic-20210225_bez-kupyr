function factorial(value) {
  //при факториалах 0 и 1 возвращаем 1
  if(value === 0 || value === 1){
    return 1
  };
  //значение  - 1
  let valueMinusOne = value - 1;
  //значение * (значение  - 1)
  let valueMultiplication = value * valueMinusOne;
  while( valueMinusOne > 1 ){
    valueMinusOne--;
    valueMultiplication = valueMultiplication * valueMinusOne;    
  };
  return valueMultiplication
};
