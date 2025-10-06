function addToCart() {
  const game = {
    id: "resident-evil-requiem",
    title: "Resident Evil Requiem",
    price: 49.99,
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  const exists = cart.find(item => item.id === game.id);
  if (exists) {
    alert("You can only buy one copy of each game!");
    return;
  }

  cart.push(game);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${game.title} added to your cart!`);
}
