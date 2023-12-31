const user = {
  id: "1",
  name: "Olga",
  surname: "Sidorova",
  email: "olga@mail.ru",
  avatar:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&w=300&q=80",
  about:
    "Let me introduce myself. My name is Olga. Im 25 and I am student of the faculty Automation and Computing Machines. My major is Information Systems and Technologies. So in my future I will develop information systems for the different organizations.",
};

// const users = {
//   0: {
//     id: 5,
//     name: "Ivan",
//     surname: "Petrov",
//     email: "ivan@mail.ru",
//     avatar:
//       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
//   },
//   1: {
//     id: 6,
//     name: "Petr",
//     surname: "Chizhikov",
//     email: "petr@mail.ru",
//     avatar:
//       "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&w=300&q=80",
//   },
//   2: {
//     id: 7,
//     name: "Semen",
//     surname: "Ivashkin",
//     email: "semen@mail.ru",
//     avatar:
//       "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww&w=300&q=80",
//   },
//   3: {
//     id: 8,
//     name: "Alexa",
//     surname: "Sidorova",
//     email: "alexa@mail.ru",
//     avatar:
//       "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
//   },
//   4: {
//     id: 9,
//     name: "Svetlana",
//     surname: "Kalugina",
//     email: "sveta@mail.ru",
//     avatar:
//       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
//   },
// };
let users = {};

export function getUser(userId) {
  for (let i = 0; i < Object.keys(users).length; i++) {
    if (users[i].id == userId) return users[i];
  }
  return user;
}

export async function getUsers() {
  let response = await fetch("http://frontend.galinapankratova.ru/getUsers");
  users = await response.json();
  console.log(users);
  return users;
}
