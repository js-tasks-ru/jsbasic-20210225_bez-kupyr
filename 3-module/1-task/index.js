function namify(users) {
  //новый ассив куда будем складывать иена пользователей
  let nameUsers = []; 
    users.forEach(item => {
    nameUsers.push(item.name)
  });
  return nameUsers;
}
