function makeFriendsList(friends){
  let ulList = document.createElement("ul");      
  for(let friend of friends){         
    ulList.insertAdjacentHTML("beforeend",getTamplateLi(friend));
  }  
  return ulList;
}
function getTamplateLi(user){
  return `<li> ${user.firstName} ${user.lastName} </li>`;
}