// DZ 1

console.log(navigator);
console.log(location);

console.log(
  `На компьютере с ОС ${navigator.platform} с помощью браузера ${navigator.vendor} я открыл страничку ${location.href}`
);

// DZ 2

const listing = document.getElementById("list");
console.log(listing.innerText);

const listing2 = document.getElementsByTagName("li");
for (let i = 0; i < listing2.length; i++) {
  listing2[i].textContent = i;
  console.log(listing2[i].textContent);
}

// DZ 3

const forRemoveItems = document.querySelectorAll(".forRemove");
forRemoveItems.forEach((item) => {
  item.remove();
});

// DZ 4

const paragraph = document.createElement("p");
paragraph.textContent = "Hello world!!!";
paragraph.style.fontSize = "36px";
paragraph.style.fontWeight = "bold";
document.body.append(paragraph);

const paragraph2 = document.createElement("p");
paragraph.textContent =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, consequuntur.";
document.body.append(paragraph2);

// DZ 5

function func(tagName, color, content) {
  const tag = document.createElement(tagName);
  tag.style.color = color;
  tag.textContent = content;
  console.log(tag);
  document.body.append(tag);
}
func("h1", "green", "hello world");

// DZ 6

const selectName = document.getElementById("year");

for (let year = 1960; year <= 2020; year++) {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  selectName.append(option);
}

// DZ 7

const clients = [
  { name: "Женя", order: true },
  { name: "Кристина", order: true },
  { name: "Павел", order: false },
  { name: "Виолетта", order: false },
  { name: "Костя", order: true },
];
const clientList = document.getElementById("clientslist");

clients.forEach((item) => {
  const li = document.createElement("li");
  if (item.order === true) {
    li.textContent = `Клиент ${item.name} оплатил заказ`;
  } else {
    li.textContent = `Клиент ${item.name} отменил заказ`;
  }
  clientList.append(li);
});
