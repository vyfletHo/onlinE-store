export const merchandises = {
  pants: { _id: "17aseaere4001", name: "Брюки" },
  shorts: { _id: "17aseaere4002", name: "Шорты" },
  tShirt: { _id: "17aseaere4003", name: "Футболка" },
  hoodie: { _id: "17aseaere4004", name: "Худи" },
  sweatshirt: { _id: "17aseaere4005", name: "Cвитшот" },
  hat: { _id: "17aseaere4006", name: "Шапка" },
  socks: { _id: "17aseaere4007", name: "Носки" },
  mantle: { _id: "17aseaere4008", name: "Мантия" },
  shirt: { _id: "17aseaere4009", name: "Рубашка" },
  anorak: { _id: "17aseaere40010", name: "Анорак" },
  pants: { _id: "17aseaere40011", name: "Брюки" },
  tShirt: { _id: "17aseaere40012", name: "Футболка" },
  sweatshirt: { _id: "17aseaere40013", name: "Свитшот" },
  shorts: { _id: "17aseaere40014", name: "Шорты" },
  panama: { _id: "17aseaere40015", name: "Панама" },
  anorak: { _id: "17aseaere40016", name: "Анорак" },
};

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function() {
      resolve(merchandises);
    }, 2000);
  });

export default {
  fetchAll,
};
