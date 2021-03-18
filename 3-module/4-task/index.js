function showSalary(users, age) {
  let favoritesArray = users.filter( user => user.age <= age )
  return favoritesArray.map( (chosen, index) => `${chosen.name}, ${chosen.balance}`).join("\n");   
}