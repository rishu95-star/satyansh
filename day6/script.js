const products = [
  {
   
    name: "Laptop",
    description: "High-performance laptop for work and gaming.",
    price: "₹50,000",
  },
  {
    name: "Smartphone",
    description: "Latest Android smartphone with amazing camera.",
    price: "₹25,000",
  },
  {
    name: "Headphones",
    description: "Wireless headphones with noise cancellation.",
    price: "₹3,000",
  },
  {
    name: "Smart Watch",
    description: "Track your health and notifications.",
    price: "₹5,000",
  },

  {
    name: "Panasonic ac",
    description: "Track your health and notifications.",
    price: "₹5,000",
  },
];

const cardContainer = document.getElementById("cardContainer");

const name = 'satyawan'
cardContainer.innerHTML =
  products.map(
    (product) =>
      `
        <div class="card">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
        </div>
    `
  );