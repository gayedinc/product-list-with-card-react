import { useState } from "react";
import { product } from "./assets/data/product.jsx";

function App() {
  const [showBasket, setShowBasket] = useState(false); // Sepet bölümünü kontrol eden state
  const [cart, setCart] = useState([]); // Sepetteki ürünleri saklayan state
  const [totalPrice, setTotalPrice] = useState(0); // Sepetteki ürünlerin toplam fiyatlarını tutan state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal kontrolü için state

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false); // Modalı kapat
    setCart([]); // Sepeti sıfırla
    setTotalPrice(0); // Toplam fiyatı sıfırla
    setShowBasket(false); // Ana sayfaya dön
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
              decreaseDessert={decreaseDessert} />
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
          onCloseModal={handleCloseModal} />
      )}
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h2>Desserts</h2>
    </div>
  );
}

function Products({ onDessertClick, increaseDessert, decreaseDessert, cart }) {
  const productItems = product.map(x => (
    <Desserts
      key={x.name}
      label={x.name}
      category={x.category}
      price={x.price}
      img={x.img}
      onDessertClick={() => onDessertClick(x)}
      increaseDessert={() => increaseDessert(x.name)}
      decreaseDessert={() => decreaseDessert(x.name)}
      cart={cart}
    />

  ));

  return (
    <div className="products">
      <div className="product-list">{productItems}</div>
    </div>
  );
}

function Desserts({ cart = [], label, category, price, img, onDessertClick, increaseDessert, decreaseDessert }) {

  const cartItem = cart.find(item => item.name === label); // cart içindeki ilgili öğeyi bul

  return (
    <div className="productsItem">
      <div className="card-inner">
        <img className={cartItem ? "dessert-image-selected" : "dessert-image"} src={img} alt={label} />
        <div className={cartItem ? "plus-minus" : "add-btn"}>
          {cartItem ? (
            <>
              <img onClick={decreaseDessert} src="/img/minus-icon.svg" alt="Minus Icon" />
              <span>{cartItem.quantity}</span>
              <img onClick={increaseDessert} src="/img/plus-icon.svg" alt="Plus Icon" />
            </>
          ) : (
            <>
              <img onClick={onDessertClick} src="/img/shopping-cart-plus.svg" alt="Shopping Cart Plus Icon" />
              <p onClick={onDessertClick}>Add to Cart</p>
            </>
          )}
        </div>
      </div>
      <div className="card-text">
        <h3>{category}</h3>
        <h4>{label}</h4>
        <p>${price.toFixed(2)}</p>
      </div>
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

function Basket({ cart, totalPrice, onDeleteClick, onOpenModal }) {
  return (
    <div className="order-cart-full">
      <h3>Your Cart ({cart.length})</h3>
      <ul className="orderList">
        {cart.map((item) => (
          <li key={item.name}>
            <div className="dessert-cart">
              <h5>{item.name}</h5>
              <div className="dessert-info">
                <p>{item.quantity}x</p>
                <span className="originalPrice">@{(item.price).toFixed(2)}</span>
                <span className="perPrice">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
            <div className="deleteBtn">
              <img onClick={() => onDeleteClick(item.name)} src="/img/remove-button.svg" alt="Carbon Tree Image" />
            </div>
          </li>
        ))}
      </ul>
      <div className="order-total-price">
        <h4>Order Total</h4>
        <p>${totalPrice}</p>
      </div>
      <div className="carbon-info-box">
        <img src="/img/carbon-tree.svg" alt="Carbon Tree Image" />
        <p>
          This is a <span>carbon-neutral</span> delivery
        </p>
      </div>
      <div className="confirm-order">
        <button onClick={onOpenModal} className="confirmBtn">Confirm Order</button>
      </div>
    </div>
  );
}

function ModalPage({ cart, totalPrice, onCloseModal }) {
  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <img src="/img/check-icon-modal-page.svg" alt="Check Icon" />
            <h2>Order Confirmed</h2>
            <p>We hope you enjoy your food!</p>
          </div>
          <div className="modal-info">
            <ul className="modal-dessert-list">
              {cart.map((item) => (
                <li className="modal-li" key={item.name}>
                  <div className="modal-dessert-cart">
                    <img src={item.img} alt={item.name} />
                    <div className="dessert-cart-info">
                      <h5>{item.name}</h5>
                      <div className="dessert-info">
                        <p>{item.quantity}x</p>
                        <span className="originalPrice">@{(item.price).toFixed(2)}</span></div>
                    </div>
                  </div>
                  <div className="modalPerPrice">
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="order-total-price">
              <h4>Order Total</h4>
              <p>${totalPrice}</p>
            </div>
          </div>
          <div className="new-order">
            <button onClick={onCloseModal} className="newOrderBtn">Start New Order</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;