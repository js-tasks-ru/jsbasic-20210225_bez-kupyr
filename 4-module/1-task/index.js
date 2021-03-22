function makeFriendsList(friends){
  let bodyTeg = document.querySelector("body")
  let ulList = document.createElement("ul");      
  for(let friend of friends){        
    let liList = document.createElement("li");
    liList.innerHTML = friend.firstName + " " + friend.lastName;
    ulList.append(liList);
  }
  bodyTeg.append(ulList);
  return ulList;
}
