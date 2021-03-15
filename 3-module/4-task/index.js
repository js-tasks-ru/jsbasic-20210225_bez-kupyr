function showSalary(users, age) {
  let favoritesList = "";
  let favoritesArray = [];
  users.forEach( user => {
    if(user.age <= age){
      favoritesArray.push(user);
    }
  })  
  favoritesArray.forEach( (chosen, index) => {
    favoritesList+=`${chosen.name}, ${chosen.balance}`;
      if(index != favoritesArray.length-1){
        favoritesList+="\n";
      }
  })     
  return favoritesList;
}