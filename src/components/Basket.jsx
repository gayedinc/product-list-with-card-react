export default function Basket({ cart, totalPrice, onDeleteClick, onOpenModal, handleClearAll }) {
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
      <div className="clear-all">
        <button onClick={handleClearAll}>Clear All Desserts</button>
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