window.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("https://dummyjson.com/products");
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  for (const prod of jsonResponse.products) {
    createProductCard(prod);
  }
});

function createProductCard(product) {
  const cardContainer = document.createElement("article");
  cardContainer.className = "card productCard";
  const productImg = document.createElement("img");
  productImg.src = product.images[0];
  productImg.alt = `image for ${product.title}`;
  cardContainer.appendChild(productImg);
  const productsListContainer = document.getElementById(
    "productsListContainer"
  );
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardContainer.appendChild(cardBody);
  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.innerText = product.title;
  cardBody.appendChild(cardTitle);
  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.innerText = product.description;
  cardBody.appendChild(cardText);
  const listGroup = document.createElement("ul");
  listGroup.className = "list-group list-group-flush";
  const price = document.createElement("li");
  price.className = "list-group-item";
  listGroup.appendChild(price);
  cardContainer.appendChild(listGroup);
  price.innerText = `Price: $${product.price} `;
  const cardFooter = document.createElement("div");
  cardFooter.className = "card-body";
  const addToBasketBtn = document.createElement("button");
  addToBasketBtn.innerText = "Add to basket";
  addToBasketBtn.className = "btn btn-success";
  cardFooter.appendChild(addToBasketBtn);
  cardContainer.appendChild(cardFooter);
  const detailsLink = document.createElement("a");
  detailsLink.className = "btn btn-info mx-3";
  detailsLink.innerText = "Details";
  cardFooter.appendChild(detailsLink);
  detailsLink.href = "./details.html";
  productsListContainer.appendChild(cardContainer);
}

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">An item</li>
//     <li class="list-group-item">A second item</li>
//     <li class="list-group-item">A third item</li>
//   </ul>
//   <div class="card-body">
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>
