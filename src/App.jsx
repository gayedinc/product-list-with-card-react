import { useState } from "react";
import Basket from "./components/Basket";
import ModalPage from "./components/ModalPage";
import Products from "./components/Products";

function App() {
  const [showBasket, setShowBasket] = useState(false); // Sepet bölümünü kontrol eden state
  const [cart, setCart] = useState([]); // Sepetteki ürünleri saklayan state
  const [totalPrice, setTotalPrice] = useState(0); // Sepetteki ürünlerin toplam fiyatlarını tutan state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal kontrolü için state

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false); // Sadece modalı kapat
  }

  function handleNewOrder() {
    setCart([]); // Sepeti sıfırla
    setTotalPrice(0); // Toplam fiyatı sıfırla
    setShowBasket(false); // Sepeti gizle / ana sayfaya dön
    setIsModalOpen(false); // Modalı kapat
  }

  function handleClearAll() {
    setCart([]); // Sepeti boşalt
    setTotalPrice(0); // Toplam fiyatı sıfırla
  }

  function increaseDessert(dessertName) {
    const updatedQuantity = cart.map(x => x.name === dessertName ? { ...x, quantity: x.quantity + 1 } : x);
    setCart(updatedQuantity);
    updateTotalPrice(updatedQuantity);
  }

  function decreaseDessert(dessertName) {
    const updatedQuantity = cart.map(x => x.name === dessertName ? { ...x, quantity: x.quantity - 1 } : x)
      .filter(x => x.quantity > 0);
    setCart(updatedQuantity);
    updateTotalPrice(updatedQuantity);
  }

  function handleDessertClick(dessert) {

    const searchedOrder = cart.find(item => item.name === dessert.name);
    const perPrice = cart.map(x => x.price * x.quantity);
    const total = perPrice.reduce((acc, price) => acc + price, Number(dessert.price));
    setTotalPrice(total.toFixed(2));

    if (searchedOrder) {
      searchedOrder.quantity++;
      setCart([...cart]);
    }
    else {
      setCart([...cart, { name: dessert.name, price: Number(dessert.price), quantity: 1, img: dessert.img, }]);
    }

    setShowBasket(true); // Sepet sayfasını göster
  }

  function updateTotalPrice(updatedCart) {
    const newTotal = updatedCart.reduce(
      (sum, item) => sum + item.price * item.quantity, 0
    );
    setTotalPrice(newTotal.toFixed(2));
  }

  function handleDelete(dessertName) {
    const updatedCart = cart.filter(item => item.name !== dessertName);  // Belirtilen tatlıyı sepetten çıkar
    setCart(updatedCart);  // Sepeti güncelle

    updateTotalPrice(updatedCart);
  }

  return (
    <div className="container">
      {cart.length > 0 ? (
        <>
          <Header />
          <div className="main-content">
            <Products
              cart={cart}
              onDessertClick={handleDessertClick}
              increaseDessert={increaseDessert}
              decreaseDessert={decreaseDessert} />

            <Basket
              cart={cart}
              totalPrice={totalPrice}
              onDeleteClick={handleDelete}
              onOpenModal={handleOpenModal}
              increaseDessert={increaseDessert}
              decreaseDessert={decreaseDessert}
              handleClearAll={handleClearAll} />
          </div>
        </>
      ) : (
        <>
          <Header />
          <div className="main-content">
            <Products
              onDessertClick={handleDessertClick}
              increaseDessert={increaseDessert}
              decreaseDessert={decreaseDessert} />

            <MyCard />
          </div>
        </>
      )}
      {isModalOpen && (
        <ModalPage
          cart={cart}
          totalPrice={totalPrice}
          onCloseModal={handleCloseModal}
          handleNewOrder={handleNewOrder} />
      )}
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h2 className="header-title">
        {"Desserts".split("").map((char, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            {char}
          </span>
        ))}
      </h2>

    </div>
  );
}

function MyCard() {
  return (
    <div className="order-card-empty">
      <h3>Your Cart (0)</h3>
      <img src="/img/empty-card-image.svg" alt="empty card image" />
      <p>Your added items will appear here</p>
    </div>
  );
}

export default App;