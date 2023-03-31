function createCard(productData) {
  const productCard = document.createElement("div");
  productCard.className = "product-card";

  const productImage = document.createElement("div");
  productImage.className = "product-image";

  const image = document.createElement("img");
  image.src = "https://via.placeholder.com/1024";
 
  const productInfo = document.createElement("div");
  productInfo.className = "product-info"

  const titleItem = document.createElement("h5");
  titleItem.innerText = productData.name;

  const priceItem = document.createElement("h6");
  priceItem.innerText = "$ " + productData.price.toFixed(2);

  productImage.appendChild(image);
  productInfo.appendChild(titleItem);
  productInfo.appendChild(priceItem);

  productCard.appendChild(productImage);
  productCard.appendChild(productInfo);

  return productCard;
}

fetch("http://localhost:3000/products")
  .then((response) => response.json())
  .then((productsData) => {
    const products = document.getElementsByClassName("products")[0];
    for (let i = 0; i < productsData.length; i++) {
      const productCard = createCard(productsData[i]);
      products.appendChild(productCard);
    }
   
    $(".product-card").on("click", function () {
      window.location = "./product.html";
    });
  })
  .catch((error) => console.error(error));
