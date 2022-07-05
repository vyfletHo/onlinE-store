import { merchandises } from "./merchandises.api";
import img from "./image/анорак/10614367-1.jpg";
import img2 from "./image/брюки/5233568-1.jpg";
import img3 from "./image/Мантия/15992834-2.jpg";
import img4 from "./image/свитшот/20823624-1.jpg";
import img5 from "./image/рубашка/73206357-1.jpg";
import img6 from "./image/футболка/73257377-1.jpg";
import img7 from "./image/шорты/19688504-3.jpg";
import img8 from "./image/панама/11812093-1.jpg";
import img9 from "./image/брюки 3/39683211-1.jpg";
import img10 from "./image/анорак 2/5582655-1.jpg";
import img11 from "./image/носки/7069518-1.jpg";
import img12 from "./image/свитшот 2/53921607-1.jpg";
import img13 from "./image/футболка 2/65819349-1.jpg";
import img14 from "./image/худи/39683664-1.jpg";
import img15 from "./image/шапка/62632696-1.jpg";
import img16 from "./image/шорты-2/73216271-1.jpg";

const sizes = {
  sizeS: {
    _id: "67rdca3eeb7f6fgeed471198",
    name: "S(46-48)",
    color: "primary",
  },
  sizeM: {
    _id: "67rdca3eeb7f6fgeed471100",
    name: "M(48-50)",
    color: "secondary",
  },
  sizeL: { _id: "67rdca3eeb7f6fgeed4711012", name: "Троль", color: "success" },
  alcoholic: {
    _id: "67rdca3eeb7f6fgeed471101",
    name: "L(50-52)",
    color: "danger",
  },
  sizeXL: {
    _id: "67rdca3eeb7f6fgeed471102",
    name: "XL(52-54)",
    color: "info",
  },
  size2XL: {
    _id: "67rdca3eeb7f6fgeed471103",
    name: "2XL(54-56)",
    color: "dark",
  },
  size3XL: {
    _id: "67rdca3eeb7f6fgeed471103",
    name: "3XL(56-58)",
    color: "dark",
  },
};

const products = [
  {
    _id: "17aseaere40010",
    name: "Анорак",
    merchandise: merchandises.anorak,
    sizes: [
      sizes.sizeS,
      sizes.sizeM,
      sizes.sizeL,
      sizes.sizeXL,
      sizes.size2XL,
      sizes.size3XL,
    ],
    completedMeetings: 36,
    price: 4600,
    bookmark: false,
    image: img,
  },
  {
    _id: "17aseaere4001",
    name: "Брюки",
    merchandise: merchandises.pants,
    sizes: [
      sizes.sizeS,
      sizes.sizeM,
      sizes.sizeL,
      sizes.sizeXL,
      sizes.size2XL,
      sizes.size3XL,
    ],
    completedMeetings: 15,
    price: 2400,
    bookmark: false,
    image: img2,
  },
  {
    _id: "17aseaere4008",
    name: "Мантия",
    merchandise: merchandises.mantle,
    sizes: [
      sizes.sizeS,
      sizes.sizeM,
      sizes.sizeL,
      sizes.sizeXL,
      sizes.size2XL,
      sizes.size3XL,
    ],
    completedMeetings: 247,
    price: 2650,
    bookmark: false,
    image: img3,
  },
  {
    _id: "17aseaere4005",
    name: "Свитшот",
    merchandise: merchandises.sweatshirt,
    sizes: [
      sizes.sizeS,
      sizes.sizeM,
      sizes.sizeL,
      sizes.sizeXL,
      sizes.size2XL,
      sizes.size3XL,
    ],
    completedMeetings: 148,
    price: 2200,
    bookmark: false,
    image: img4,
  },
  {
    _id: "17aseaere4009",
    name: "Рубашка",
    merchandise: merchandises.shirt,
    sizes: [
      sizes.sizeS,
      sizes.sizeM,
      sizes.sizeL,
      sizes.sizeXL,
      sizes.size2XL,
      sizes.size3XL,
    ],
    completedMeetings: 37,
    price: 3200,
    bookmark: false,
    image: img5,
  },
  {
    _id: "17aseaere4003",
    name: "Футболка",
    merchandise: merchandises.tShirt,
    sizes: [
      sizes.sizeS,
      sizes.sizeM,
      sizes.sizeL,
      sizes.sizeXL,
      sizes.size2XL,
      sizes.size3XL,
    ],
    completedMeetings: 147,
    price: 1500,
    bookmark: false,
    image: img6,
  },
  {
    _id: "17aseaere4002",
    name: "Шорты",
    merchandise: merchandises.shorts,
    sizes: [
      sizes.sizeS,
      sizes.sizeM,
      sizes.sizeL,
      sizes.sizeXL,
      sizes.size2XL,
      sizes.size3XL,
    ],
    completedMeetings: 72,
    price: 2000,
    bookmark: false,
    image: img7,
  },
  {
    _id: "17aseaere40015",
    name: "Панама",
    merchandise: merchandises.panama,
    sizes: [
      sizes.sizeS,
      sizes.sizeM,
      sizes.sizeL,
      sizes.sizeXL,
      sizes.size2XL,
      sizes.size3XL,
    ],
    completedMeetings: 72,
    price: 900,
    bookmark: false,
    image: img8,
  },
  {
    _id: "17aseaere40016",
    name: "Анорак",
    merchandise: merchandises.anorak,
    sizes: [
      sizes.sizeS,
      sizes.sizeM,
      sizes.sizeL,
      sizes.sizeXL,
      sizes.size2XL,
      sizes.size3XL,
    ],
    completedMeetings: 36,
    price: 2800,
    bookmark: false,
    image: img10,
  },
  {
    _id: "17aseaere40011",
    name: "Брюки",
    merchandise: merchandises.pants,
    sizes: [
      sizes.sizeS,
      sizes.sizeM,
      sizes.sizeL,
      sizes.sizeXL,
      sizes.size2XL,
      sizes.size3XL,
    ],
    completedMeetings: 15,
    price: 2500,
    bookmark: false,
    image: img9,
  },
  {
    _id: "17aseaere4007",
    name: "Носки",
    merchandise: merchandises.socks,
    sizes: [
      sizes.sizeS,
      sizes.sizeM,
      sizes.sizeL,
      sizes.sizeXL,
      sizes.size2XL,
      sizes.size3XL,
    ],
    completedMeetings: 247,
    price: 380,
    bookmark: false,
    image: img11,
  },
  {
    _id: "17aseaere40013",
    name: "Свитшот",
    merchandise: merchandises.sweatshirt,
    sizes: [
      sizes.sizeS,
      sizes.sizeM,
      sizes.sizeL,
      sizes.sizeXL,
      sizes.size2XL,
      sizes.size3XL,
    ],
    completedMeetings: 148,
    price: 2400,
    bookmark: false,
    image: img12,
  },
  {
    _id: "17aseaere40012",
    name: "Футболка",
    merchandise: merchandises.tShirt,
    sizes: [
      sizes.sizeS,
      sizes.sizeM,
      sizes.sizeL,
      sizes.sizeXL,
      sizes.size2XL,
      sizes.size3XL,
    ],
    completedMeetings: 37,
    price: 1300,
    bookmark: false,
    image: img13,
  },
  {
    _id: "17aseaere4004",
    name: "Худи",
    merchandise: merchandises.hoodie,
    sizes: [
      sizes.sizeS,
      sizes.sizeM,
      sizes.sizeL,
      sizes.sizeXL,
      sizes.size2XL,
      sizes.size3XL,
    ],
    completedMeetings: 147,
    price: 2600,
    bookmark: false,
    image: img14,
  },
  {
    _id: "17aseaere40014",
    name: "Шорты",
    merchandise: merchandises.shorts,
    sizes: [
      sizes.sizeS,
      sizes.sizeM,
      sizes.sizeL,
      sizes.sizeXL,
      sizes.size2XL,
      sizes.size3XL,
    ],
    completedMeetings: 72,
    price: 1700,
    bookmark: false,
    image: img16,
  },
  {
    _id: "17aseaere4006",
    name: "Шапка",
    merchandise: merchandises.hat,
    sizes: [
      sizes.sizeS,
      sizes.sizeM,
      sizes.sizeL,
      sizes.sizeXL,
      sizes.size2XL,
      sizes.size3XL,
    ],
    completedMeetings: 72,
    price: 1100,
    bookmark: false,
    image: img15,
  },

  // {
  //   _id: "67rdca3eeb7f6fgeed471815",
  //   name: "Cвитшот",
  //   merchandise: merchandises.sweatshirt,
  //   sizes: [
  //     sizes.sizeS,
  //     sizes.sizeM,
  //     sizes.sizeL,
  //     sizes.sizeXL,
  //     sizes.size2XL,
  //     sizes.size3XL,
  //   ],
  //   completedMeetings: 36,
  //   price: 2000,
  //   bookmark: false,
  //   image:
  //     "https://blog.tripzumi.com/wp-content/uploads/2020/08/Confederation-Bridge-365x245.jpg",
  // },
  // {
  //   _id: "67rdca3eeb7f6fgeed471816",
  //   name: "Брюки",
  //   merchandise: merchandises.pants,
  //   sizes: [
  //     sizes.sizeS,
  //     sizes.sizeM,
  //     sizes.sizeL,
  //     sizes.sizeXL,
  //     sizes.size2XL,
  //     sizes.size3XL,
  //   ],
  //   completedMeetings: 15,
  //   price: 1600,
  //   bookmark: false,
  //   image:
  //     "https://italiatut.com/wp-content/uploads/ID213f1_-_DSC_0011-365x245.jpg",
  // },
  // {
  //   _id: "67rdca3eeb7f6fg1ed471824",
  //   name: "Лонгслив",
  //   merchandise: merchandises.longSleeve,
  //   sizes: [
  //     sizes.sizeS,
  //     sizes.sizeM,
  //     sizes.sizeL,
  //     sizes.sizeXL,
  //     sizes.size2XL,
  //     sizes.size3XL,
  //   ],
  //   completedMeetings: 247,
  //   price: 1400,
  //   bookmark: false,
  //   image:
  //     "https://poker.ua/wp-content/uploads/novost-UA-V-Pensilvanii-zarabotaet-organ-rassmatrivayushhij-zhaloby-na-onlajn-igry-min-365x245.jpg",
  // },
  // {
  //   _id: "67rdca3eeb7f6fgeed471818",
  //   name: "Брюки",
  //   merchandise: merchandises.pants,
  //   sizes: [
  //     sizes.sizeS,
  //     sizes.sizeM,
  //     sizes.sizeL,
  //     sizes.sizeXL,
  //     sizes.size2XL,
  //     sizes.size3XL,
  //   ],
  //   completedMeetings: 148,
  //   price: 1600,
  //   bookmark: false,
  //   image: "https://i.sunhome.ru/contest_foto/94/zimnii-tuman.l.jpg",
  // },
  // {
  //   _id: "67rdca3eeb7f6fgeed471819",
  //   name: "Худи",
  //   merchandise: merchandises.hoodie,
  //   sizes: [
  //     sizes.sizeS,
  //     sizes.sizeM,
  //     sizes.sizeL,
  //     sizes.sizeXL,
  //     sizes.size2XL,
  //     sizes.size3XL,
  //   ],
  //   completedMeetings: 37,
  //   price: 2300,
  //   bookmark: false,
  //   image: "https://readweb.org/upkeep/uploads/2020/09/1-508-365x245.jpg",
  // },
  // {
  //   _id: "67rdca3eeb7f6fgeed471820",
  //   name: "Шорты",
  //   merchandise: merchandises.shorts,
  //   sizes: [
  //     sizes.sizeS,
  //     sizes.sizeM,
  //     sizes.sizeL,
  //     sizes.sizeXL,
  //     sizes.size2XL,
  //     sizes.size3XL,
  //   ],
  //   completedMeetings: 147,
  //   price: 1300,
  //   bookmark: false,
  //   image:
  //     "https://poker.ua/wp-content/uploads/novost-UA-Kazino-Makao-prekratili-rabotu-iz-za-rasprostraneniya-koronavirusa-365x245.jpg",
  // },
  // {
  //   _id: "67rdca3eeb7f6fgeed471821",
  //   name: "Худи",
  //   merchandise: merchandises.hoodie,
  //   sizes: [
  //     sizes.sizeS,
  //     sizes.sizeM,
  //     sizes.sizeL,
  //     sizes.sizeXL,
  //     sizes.size2XL,
  //     sizes.size3XL,
  //   ],
  //   completedMeetings: 72,
  //   price: 2300,
  //   bookmark: false,
  //   image:
  //     "https://poker.ua/wp-content/uploads/Onlajn_poker_v_Nyu_Jorke-365x245.jpg",
  // },
  // {
  //   _id: "67rdca3eeb7f6fgeed471822",
  //   name: "Худи",
  //   merchandise: merchandises.hoodie,
  //   sizes: [
  //     sizes.sizeS,
  //     sizes.sizeM,
  //     sizes.sizeL,
  //     sizes.sizeXL,
  //     sizes.size2XL,
  //     sizes.size3XL,
  //   ],
  //   completedMeetings: 72,
  //   price: 2300,
  //   bookmark: false,
  //   image:
  //     "https://cctsrilanka.com/wp-content/uploads/2018/05/cctsrilanka.com-Nuwara-Eliya-Bomburuella-4-365x245.jpg",
  // },
  // {
  //   _id: "67rdca3eeb7f6fgeed471814",
  //   name: "Майка",
  //   merchandise: merchandises.tShirt,
  //   sizes: [
  //     sizes.sizeS,
  //     sizes.sizeM,
  //     sizes.sizeL,
  //     sizes.sizeXL,
  //     sizes.size2XL,
  //     sizes.size3XL,
  //   ],
  //   completedMeetings: 17,
  //   price: 1000,
  //   bookmark: false,
  //   image:
  //     "https://149349141.v2.pressablecdn.com/wp-content/uploads/2016/11/timthumb-640x480.jpg",
  // },
  // {
  //   _id: "67rdca3eeb7f6fgeed471824",
  //   name: "Лонгслив",
  //   merchandise: merchandises.longSleeve,
  //   sizes: [
  //     sizes.sizeS,
  //     sizes.sizeM,
  //     sizes.sizeL,
  //     sizes.sizeXL,
  //     sizes.size2XL,
  //     sizes.size3XL,
  //   ],
  //   completedMeetings: 17,
  //   price: 1400,
  //   bookmark: false,
  //   image:
  //     "https://my.toluna.com/dpolls_images/2018/11/16/3c3b5a7b-621b-43c6-b1a9-7c747dcc5dbe_x365.jpg",
  // },
  // {
  //   _id: "67rdca3eeb7f6fgerd471814",
  //   name: "Майка",
  //   merchandise: merchandises.tShirt,
  //   sizes: [
  //     sizes.sizeS,
  //     sizes.sizeM,
  //     sizes.sizeL,
  //     sizes.sizeXL,
  //     sizes.size2XL,
  //     sizes.size3XL,
  //   ],
  //   completedMeetings: 434,
  //   price: 1000,
  //   bookmark: false,
  //   image: "https://readweb.org/upkeep/uploads/2020/10/1-350-365x245.jpg",
  // },
  // {
  //   _id: "67rdca3eeb7f6fgeed471829",
  //   name: "Cвитшот",
  //   merchandise: merchandises.sweatshirt,
  //   sizes: [
  //     sizes.sizeS,
  //     sizes.sizeM,
  //     sizes.sizeL,
  //     sizes.sizeXL,
  //     sizes.size2XL,
  //     sizes.size3XL,
  //   ],
  //   completedMeetings: 434,
  //   price: 2000,
  //   bookmark: false,
  //   image:
  //     "https://blog.apartmentbarcelona.com/wp-content/uploads/2020/10/palau-musica-catalana-365x245.jpg",
  // },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function() {
      resolve(products);
    }, 2000);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function() {
      resolve(products.find((product) => product._id === id));
    }, 1000);
  });

export default {
  fetchAll,
  getById,
};
