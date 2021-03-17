function showSalary(users, age) {
  let favoritesArray = users.filter( user => user.age <= age )
  let favoritesList = favoritesArray.map( (chosen, index) => {
    return `${chosen.name}, ${chosen.balance}`;
  }).join("\n");    
  return favoritesList;
}