fetch("http://localhost:3000/products?id=1111-2222-3333-4444")
  .then((response) => response.json())
  .then((data) => {
    // Update product info
    const productInfo = document.getElementsByClassName("product-info")[0];
    const titleItem = document.createElement("h5");
    titleItem.innerText = data.name;

    const priceItem = document.createElement("h6");
    priceItem.innerText = "$ " + data.price.toFixed(2);

    productInfo.appendChild(titleItem);
    productInfo.appendChild(priceItem);

    // Update product desceription
    const productDescription = document.getElementsByClassName(
      "product-description"
    )[0];
    productDescription.innerText = "";
    const title1 = document.createElement("h2");
    title1.innerText = data.title1;
    title1.style.paddingTop = "0px";
    const description1 = document.createElement("p");
    description1.innerText = data.description1;

    productDescription.appendChild(title1);
    productDescription.appendChild(description1);

    const title2 = document.createElement("h2");
    title2.innerText = data.title2;
    const description2 = document.createElement("p");
    description2.innerText = data.description2;

    productDescription.appendChild(title2);
    productDescription.appendChild(description2);

    const title3 = document.createElement("h2");
    title3.innerText = data.title3;
    const description3 = document.createElement("p");
    description3.innerText = data.description3;

    productDescription.appendChild(title3);
    productDescription.appendChild(description3);

    const title4 = document.createElement("h2");
    title4.innerText = data.title4;
    const description4 = document.createElement("p");
    description4.innerText = data.description4;

    productDescription.appendChild(title4);
    productDescription.appendChild(description4);
  })
  .catch((error) => console.error(error));
