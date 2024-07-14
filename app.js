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

// DZ 8

let linksArr = [
  "https://www.amazon.com/",
  "https://www.youtube.com/",
  "https://devby.io/",
  "https://www.google.com/",
  "https://apple.com/",
];

const div = document.createElement("div");

div.style.backgroundColor = "aqua";
div.style.padding = "5px";
div.style.textAlign = "center";

linksArr.forEach((item) => {
  let link = document.createElement("a");
  link.href = item;
  link.textContent = item;
  link.target = "_blank";
  div.appendChild(link);
});
document.body.append(div);

// DZ 9

const users = [
  { name: "Mark", age: 12 },
  { name: "Olga", age: 30 },
  { name: "Tom", age: 25 },
  { name: "Den", age: 43 },
];
// 1
// const table = document.createElement("table");
// table.setAttribute("border", "1");

// users.forEach((item) => {
//   const row = document.createElement("tr");
//   const name = document.createElement("td");
//   name.textContent = item.name;
//   name.style.color = "red";
//   row.append(name);
//   const age = document.createElement("td");
//   age.textContent = item.age;
//   age.style.color = "blue";
//   row.append(age);
//   table.append(row);
// });
// document.body.append(table);

// 2
// let table = `<table border='1'>`;

// users.forEach((item) => {
//   table += `<tr>`;
//   table += `<td style='color: red'> ${item.name} </td>`;
//   table += `<td style='color: blue'> ${item.age} </td>`;
//   table += `</tr>`;
// });

// document.body.innerHTML += table;

// DZ 10

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <div>
//     <article>
//       <p>Lorem ipsum dolor sit amet, odio omnesque ius cu, quo ex atqui antiopam. At detracto menandri eos. Duo in causae viderer, graeci <a href="#">reprehendunt</a> has in. Decore <mark>nemore</mark> philosophia te pro, nobis legere causae ex mei, odio putant mentitum ea ius. Vix nostro deserunt explicari eu.</p>
//     </article>
//   </div>
//   <ul>
//     <li><a href="#">Link1</a></li>
//     <li><a href="#">Link2</a></li>
//     <li><a href="#">Link3</a></li>
//     <li><a href="#">Link4</a></li>
//   </ul><span></span>
//   <a href="#">Some link</a>
// </body>
// </html>

const ul = document.querySelector("ul");
ul.classList.add("list");
const li = document.querySelectorAll("ul li");
li.forEach((item, index) => {
  if (index % 2 === 0) {
    item.classList.add("item");
  }
});
const a = document.querySelectorAll("a");
a.forEach((item) => {
  item.classList.add("custom-link");
});
