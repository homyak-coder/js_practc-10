const book = document.querySelectorAll(".book");
console.log(book);

book[0].before(book[1]);
book[2].before(book[4]);
book[2].before(book[3]);
book[2].before(book[5]);
document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

let names = document.querySelectorAll("h2 > a");
console.log(names);
names[2].textContent = "Книга 3. this и Прототипы Объектов";
let adv = document.querySelector(".adv");
adv.remove();
const description = document.querySelectorAll("ul > li");
console.log(description);
description[9].after(description[12]);
description[12].after(description[14]);
description[15].after(description[8]);
description[37].after(description[45]);
description[40].after(description[38]);
description[43].after(description[41]);
let newLi = document.createElement("li");
newLi.textContent = "Глава 8: За пределами ES6";
description[55].after(newLi);
