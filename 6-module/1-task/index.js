
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.render();
    //this.removeUsers = this.removeUsers();
    
  }
  
  getTemplateThead(){
    return `<thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
    </thead>
    `
  }
  
  getTemplateTr(user){
    return `<tr class="users">
      <th class="name">${user.name}</th>
      <th class="age">${user.age}</th>
      <th class="salary">${user.salary}</th>
      <th class="city">${user.city}</th>
      <td><button class="remove-button">X</button></td>
    </tr>
    `
  }

  // removeUsers(){
  //   let users = [...document.querySelectorAll(".users")];
  //   console.log(users);
  //   users.forEach(user => {
  //     const removeButton = user.querySelector(".remove-button");
  //     const removeUser = () => {
  //       user.remove();
  //       removeButton.removeEventListener('click',removeUser);
  //     }
  //     removeButton.addEventListener('click',removeUser);
  //   })
  // }
  
  render(){
    let table = document.createElement('table');
    table.innerHTML = this.getTemplateThead();
    let tbody = document.createElement('tbody');
    console.log(table);
    for(let user of this.rows){
      tbody.insertAdjacentHTML("beforeend",this.getTemplateTr(user));  
    }
    table.appendChild(tbody);
    let users = [...table.querySelectorAll(".users")];    
    console.log(users);
    users.forEach(user => {
      const removeButton = user.querySelector(".remove-button");
      const removeUser = () => {
        user.remove();
        removeButton.removeEventListener('click',removeUser);
      }
      removeButton.addEventListener('click',removeUser);
    })
    return table;    
  }
}


