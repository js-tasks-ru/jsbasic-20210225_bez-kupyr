function namify(users) {
  //новый массив куда будем складывать имена пользователей
  let nameUsers = users.map(item => item.name);
  return nameUsers;
}