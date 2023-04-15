const questionYear = prompt("What is your year of birth?");
const questionCity = prompt("Which city do you live in?");
const questionSport = prompt("What is your favorite sport?");

if (questionYear == false) {
  alert("Шкода, що Ви не захотіли ввести свій рік нородження");
} else if (questionCity == false) {
  alert("Шкода, що Ви не захотіли ввести свіє місто");
} else if (questionSport == false) {
  alert("Шкода, що Ви не захотіли ввести свій олюблений вид спорту");
} else {
  let userAge = 2023 - questionYear;
  let userLocation = `Ти живеш у місті ${questionCity}`;

  switch (questionCity) {
    case "Київ":
      userLocation = "Ти живеш у столиці України";
      break;

    case "Вашингтон":
      userLocation = "Ти живеш у столиці CША";
      break;

    case "Лондон":
      userLocation = "Ти живеш у столиці Англії";
      break;
  }

  let userSport = `${questionSport} дуже гарний вид спорту`;

  switch (questionSport) {
    case "футбол":
      userSport = "Круто! Хочеш стати Мессі?";
      break;

    case "баскетбол":
      userSport = "Круто! Хочеш стати Майкл Джорданом?";
      break;

    case "волейбол":
      userSport = "Круто! Хочеш стати Симоне Джанелли?";
      break;
  }

  alert(`Вік -  ${userAge}, ${userLocation}
  ${userSport}`);
}
