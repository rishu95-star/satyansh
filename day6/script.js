const products = [
  {
  
    name: "Laptop",
    image: "laptop.jpeg",
    description: "High-performance laptop for work and gaming.",
    price: "₹50,000",
  },
  {
    
    name: "Smartphone",
    image:"mobile.jpeg",
    description: "Latest Android smartphone with amazing camera.",
    price: "₹100,000",
  },
  {
    
    name: "Headphones",
    image:"headphones.jpeg",
    description: "Wireless headphones with noise cancellation.",
    price: "₹3,000",
  },
  {
    name: "Smart Watch",
    image:"smartwatch.jpeg",
    description: "Track your health and notifications.",
    price: "₹5,000",
  },

  {
    name: "Earphones",
    image:"earphones.jpeg",
    description: "High-quality earphones for music lovers.",
    price: "₹1,500",
  },
];

const cardContainer = document.getElementById("cardContainer");

const name = 'satyawan'
cardContainer.innerHTML =
  products.map(
    (product) =>
      `
        <div class="card">
         <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
        </div>
    `
  );