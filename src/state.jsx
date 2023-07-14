const user = {
  id: "1",
  name: "Ivan",
  lastname: "Ivanov",
  email: "ivan@mail.ru",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
  about: "Here i will tell you about myself",
};

const users ={
0: {name: "Olga", lastname:"Petrova"},
1: {name: "Petr", lastname:"Chizhikov"},
2: {name: "Semen", lastname:"Ivashkin"},
3: {name: "Alex", lastname:"Sidorov"},
4: {name: "Svetlana", lastname:"Kuleshova"},
}
export function getUser(){
  return user;
}
export function getUsers (){
  return users;
}