import faker from "faker";

export const ROUTES = {
  HOME: "/",
  PROFILE: "/profile",
  CHAT: "/chats/:chatId",
  CHATS: "/chats",
  NO_CHAT: "/no-chat",
  NOT_FOUND: "/not-found",
};

export let CHATLIST = [
  {
    id: faker.datatype.uuid(),
    name: "VoFront",
    avatar: "/img/1.jpg",
    messages: [
      {
        text: "11",
        author: "Me",
        date: new Date().toLocaleTimeString(),
        id: faker.datatype.uuid(),
      },
    ],
  },
  {
    id: faker.datatype.uuid(),
    name: "ReactJS",
    avatar: "/img/2.jpg",
    messages: [
      {
        text: "22",
        author: "Me",
        date: new Date().toLocaleTimeString(),
        id: faker.datatype.uuid(),
      },
    ],
  },
  {
    id: faker.datatype.uuid(),
    name: "Discoveer | Животные| Фильмы",
    avatar: "/img/3.jpg",
    messages: [
      {
        text: "33",
        author: "Me",
        date: new Date().toLocaleTimeString(),
        id: faker.datatype.uuid(),
      },
    ],
  },
  {
    id: faker.datatype.uuid(),
    name: "Naked Space",
    avatar: "/img/4.jpg",
    messages: [
      {
        text: "44",
        author: "Me",
        date: new Date().toLocaleTimeString(),
        id: faker.datatype.uuid(),
      },
    ],
  },
  {
    id: faker.datatype.uuid(),
    name: "Из истории русской культуры",
    avatar: "/img/5.jpg",
    messages: [
      {
        text: "55",
        author: "Me",
        date: new Date().toLocaleTimeString(),
        id: faker.datatype.uuid(),
      },
    ],
  },
  {
    id: faker.datatype.uuid(),
    name: "Bloody Animals",
    avatar: "/img/6.jpg",
    messages: [
      {
        text: "66",
        author: "Me",
        date: new Date().toLocaleTimeString(),
        id: faker.datatype.uuid(),
      },
    ],
  },
  {
    id: faker.datatype.uuid(),
    name: "Почему?",
    avatar: "/img/7.jpg",
    messages: [
      {
        text: "77",
        author: "Me",
        date: new Date().toLocaleTimeString(),
        id: faker.datatype.uuid(),
      },
    ],
  },
  {
    id: faker.datatype.uuid(),
    name: "InvestFuture",
    avatar: "/img/8.jpg",
    messages: [
      {
        text: "88",
        author: "Me",
        date: new Date().toLocaleTimeString(),
        id: faker.datatype.uuid(),
      },
    ],
  },
  {
    id: faker.datatype.uuid(),
    name: "СберИнвестиции",
    avatar: "/img/9.jpg",
    messages: [
      {
        text: "99",
        author: "Me",
        date: new Date().toLocaleTimeString(),
        id: faker.datatype.uuid(),
      },
    ],
  },
  {
    id: faker.datatype.uuid(),
    name: "Физика Просто",
    avatar: "/img/10.jpg",
    messages: [
      {
        text: "1010",
        author: "Me",
        date: new Date().toLocaleTimeString(),
        id: faker.datatype.uuid(),
      },
    ],
  },
  {
    id: faker.datatype.uuid(),
    name: "Real Nature",
    avatar: "/img/11.jpg",
    messages: [
      {
        text: "1111",
        author: "Me",
        date: new Date().toLocaleTimeString(),
        id: faker.datatype.uuid(),
      },
    ],
  },
];
