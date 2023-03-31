fetch("http://localhost:3000/carts")
  .then((response) => response.json())
  .then((cartData) => {
    const products = cartData.products;
    const originalProducts = cartData.originalProducts;
    const cartElements = document.getElementsByClassName("cart-elements")[0];
    let cartTotal = 0;
    let cartDiscount = 0;
    for (let i = 0; i < products.length; i++) {
      const element = document.createElement("h3");
      element.innerText = "Product " + (i+1) + " : $" + products[i].price.toFixed(2);
      cartElements.appendChild(element);
      cartDiscount+= products[i].price;
      cartTotal+= products[i].price;
    }

    const cartTotalElement = document.getElementsByClassName("cart-total")[0];
    cartTotalElement.innerText = "Total (withouth discount): $" + cartData.total.toFixed(2);
    const cartDiscountElement = document.getElementsByClassName("cart-discount")[0];
    cartDiscountElement.innerText = "Total to pay: $" + cartData.totalWithDiscount.toFixed(2);
  })
  .catch((error) => console.error(error));
