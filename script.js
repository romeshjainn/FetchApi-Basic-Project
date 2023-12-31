let api = fetch("https://fakestoreapi.com/products");
api
  .then(function (unparsedData) {
    return unparsedData.json();
  })
  .then(function (data) {
    display(data);
  });

let body = document.body;
let main = document.createElement("main");
body.appendChild(main);
main.setAttribute("id", "cardContainer");


function display(data) {
  const main = document.getElementById("cardContainer");

  main.style.display = "flex";
  main.style.justifyContent = "center";
  main.style.flexWrap = "wrap";
  main.style.gap =
  main.style.border = "2px solid red";

  for (let i = 0; i < data.length; i++) {
    let cards = document.createElement("div");
    main.appendChild(cards);
    cards.style.backgroundColor = "transparent";
    cards.style.width = "calc(30% - 1px)";
    cards.style.aspectRatio = ".6";
    cards.classList.add("cards");
    // cards.style.border = "2px solid red";

    let image = document.createElement("img");
    cards.appendChild(image);
    image.style.backgroundColor = "transparent";
    image.style.display = "grid";
    image.style.border = "2px solid";
    image.style.placeItems = "center";
    image.style.height = "60%";
    image.style.width = "99%";
    image.style.padding = "";
    image.src = data[i].image;

    let title = document.createElement("div");
    cards.appendChild(title);
    title.classList.add("title");
    title.style.padding = "5px";
    title.style.backgroundColor = "transparent";
    title.style.overflow = "hidden";
    title.style.textOverflow = "ellipsis";
    title.style.whiteSpace = "nowrap";
    title.style.whiteSpace = "nowrap";
    title.style.border = "2px solid black";
    title.style.height = "10%";
    title.innerText = data[i].title;

    let price = document.createElement("div");
    cards.appendChild(price);
    price.style.height = "10%";
    price.style.backgroundColor = "transparent";
    price.innerText = data[i].price;
    price.style.border = "2px solid black";
    price.style.borderTop = "none";

    let description = document.createElement("div");
    cards.appendChild(description);
    description.classList.add("description");
    description.style.height = "20%";
    description.style.padding = "5px";
    description.style.backgroundColor = "transparent";
    description.style.overflow = "hidden";
    description.style.border = "2px solid black";
    description.style.borderTop = "none";
    description.style.textOverflow = "ellipsis";
    description.style.fontSize = "12px";
    description.innerText = data[i].description;

    console.log(data[i].price);
  }
}

function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();
  const cards = document.querySelectorAll(".cards");

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const title = card.querySelector(".title").innerText.toLowerCase();
    const description = card.querySelector(".description").innerText.toLowerCase();

    if (title.includes(query) || description.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}

let header = document.createElement("header");
header.style.backgroundColor = "transparent";
header.style.color = "white";
header.style.height = "100px";
header.style.marginBottom = "1.2rem";
header.style.border = "2px solid black";
header.style.borderRadius = "2rem 2rem 0px 0px";
header.style.width = "99.5%";
header.style.display = "grid";
header.style.placeItems = "center";
header.style.position = "sticky";
header.style.top = "0";

let inputBox = document.createElement("div");
inputBox.style.height = "40%";
inputBox.style.width = "70%";
inputBox.style.backgroundColor = "transparent";
inputBox.style.border = "2px solid";
inputBox.style.display = "flex";

let searchInput = document.createElement("input");
searchInput.setAttribute("id", "searchInput");
searchInput.placeholder = "Search Items";
searchInput.style.backgroundColor = "transparent";
searchInput.style.border = "2px solid";
searchInput.style.padding = "0px 5%";
searchInput.style.width = "100%";

let button = document.createElement("button");

inputBox.appendChild(searchInput);

header.appendChild(inputBox);

document.body.insertBefore(header, document.body.firstChild);

searchInput.addEventListener("input", handleSearch);
