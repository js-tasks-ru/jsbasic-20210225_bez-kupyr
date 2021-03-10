function isEmpty(obj) {
  // ваш код...
  //можно с помощью Object.keys(obj) 
  if(Object.keys(obj).length > 0){
    return false;
  }
  return true;
  /*for (key in object){    
    return false;
  }
  return true;*/    
}