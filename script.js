// Retrieving data from the api
let api = fetch("https://fakestoreapi.com/products");
api
  .then(function (unparedData) {
    return unparedData.json();
  })
  .then(function (data) {
    console.log(data);
    display(data);
  });

let universal = document.querySelectorAll("*");
for (let i = 0; i < universal.length; i++) {
  universal[i].style.margin = "0";
  universal[i].style.padding = "0";
  universal[i].style.boxSizing = "border-box";
}

// styling body
let body = document.body;
body.style.backgroundColor = "grey";
body.style.padding = "2rem";
body.style.backgroundImage =
  "url(https://images.unsplash.com/photo-1620055374842-145f66ec4652?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFlc3RoZXRpY3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60)";
body.style.width = "100%";
body.style.fontFamily = "Lumanosimo";
body.style.overflowX = "hidden";

// styling header
let header = document.createElement("header");
body.style.backgroundColor = "transparent";
body.style.color = "white";
body.appendChild(header);
header.style.backgroundColor = "transparent";
header.style.height = "100px";
header.style.marginBottom = "1.2rem";
header.style.border = "2px solid black";
header.style.borderRadius = "2rem 2rem 0px 0px";
header.style.width = "99.5%";
header.style.display = "grid";
header.style.placeItems = "center";
let inputBox = document.createElement("div");
header.appendChild(inputBox);
inputBox.style.height = "40%";
inputBox.style.width = "70%";
inputBox.style.backgroundColor = "transparent";
inputBox.style.border = "2px solid ";
inputBox.style.display = "flex";

let input = document.createElement("input");
inputBox.appendChild(input);
input.placeholder = "Search Items";
input.style.backgroundColor = "transparent";
input.style.border = "none";
input.style.padding = "0px 5%";
input.style.width = "60%";

let button = document.createElement("button");
inputBox.appendChild(button);
button.innerText = "Search";
button.style.backgroundColor = "grey";

button.style.width = "40%";

// styling main
let main = document.createElement("main");
main.style.backgroundColor = "transparent";
main.style.width = "100%";
main.style.display = "flex";
main.style.flexWrap = "wrap";
main.style.gap = "2px";
//   main.style.border = "2px solid black";
body.appendChild(main);

//   styling cards

function display(data) {
  for (let i = 0; i < data.length; i++) {
    let cards = document.createElement("div");
    main.appendChild(cards);
    cards.style.backgroundColor = "transparent";
    cards.style.width = "calc(50% - 1px)";
    cards.style.aspectRatio = ".8";
    cards.classList.add("cards");
    //   cards.style.display = "flex";
    //   cards.style.flexDirection = "column";
    //   cards.style.justifyContent = "center";
    //   cards.style.alignItems = "center";

    let image = document.createElement("img");
    cards.appendChild(image);
    image.style.backgroundColor = "transparent";
    image.style.display = "grid";
    image.style.border = "2px solid ";
    image.style.placeItems = "center";
    image.style.height = "60%";
    //   image.style.mixBlendMode = "screen"
    image.style.width = "99%";
    image.style.padding = "";

    let imageApi = data[i].image;
    image.src = imageApi;

    let title = document.createElement("div");
    let titleApi = data[i].title;
    cards.appendChild(title);
    title.style.padding = "5px";
    title.style.backgroundColor = "transparent";
    title.style.overflow = "hidden";
    title.style.textOverflow = "ellipsis";
    title.style.whiteSpace = "nowrap";
    title.style.whiteSpace = "nowrap";
    title.style.border = "2px solid black";

    title.style.height = "10%";
    title.innerText = titleApi;

    let price = document.createElement("div");
    let priceApi = data[i].price;
    cards.appendChild(price);
    price.style.height = "10%";
    price.style.backgroundColor = "transparent";
    price.innerText = priceApi;
    price.style.border = "2px solid black";
    price.style.borderTop = "none";

    let description = document.createElement("div");
    cards.appendChild(description);
    description.style.height = "20%";
    description.style.padding = "5px";
    description.style.backgroundColor = "transparent";
    description.style.overflow = "hidden";
    description.style.border = "2px solid black";
    description.style.borderTop = "none";

    description.style.textOverflow = "ellipsis";
    description.style.fontSize = "12px";
    let descriptionApi = data[i].description;
    description.innerText = descriptionApi;

    //   console.log(imageApi);
    console.log(priceApi);
    //   image.innerText = price;
  }
}

// search
function displaySearchResults(data, query) {
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const main = document.querySelector("main"); // Get the main container
  main.innerHTML = ""; // Clear previous cards

  if (filteredData.length === 0) {
    const noResultsMessage = document.createElement("div");
    noResultsMessage.textContent = "No matching results found.";
    main.appendChild(noResultsMessage);
    return;
  }

  display(filteredData); // Call the existing display function to show the filtered cards
}

// Event listener for search button click
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query === "") {
    const main = document.querySelector("main"); // Get the main container
    main.innerHTML = ""; // Clear search results if the input is empty
  } else {
    displaySearchResults(data, query);
  }
});

// Event listener for search input changes (optional, in case you want the results to update dynamically as the user types)
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  if (query === "") {
    const main = document.querySelector("main"); // Get the main container
    main.innerHTML = ""; // Clear search results if the input is empty
  }
});
