function camelize(str) {
  let newArrayWords = [];
  const arrayWords = str.split("-");
  console.log(arrayWords)
  arrayWords.forEach((word,index) => {    
    if(index !=0){
      let newArrayLetters = [];
      const arrayLetters = word.split("");
      arrayLetters.forEach((letter,index) => {
        if(index === 0){
          letter = letter.toUpperCase();
        }        
        newArrayLetters.push(letter);
      })
      word = newArrayLetters.join("");
    }
    newArrayWords.push(word);
  })
  return newArrayWords.join("");;  
}