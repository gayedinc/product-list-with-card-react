import { useRef } from "react";

export default function ModalPage({ cart, totalPrice, onCloseModal, handleNewOrder }) {

  const contentRef = useRef();

  function handleOverlayClick(e) {
    // Eğer tıklanan yer modal-content'in dışındaysa
    if (contentRef.current && !contentRef.current.contains(e.target)) {
      onCloseModal();
    }
  }

  return (
    <>
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content" ref={contentRef}>
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
            <button onClick={handleNewOrder} className="newOrderBtn">Start New Order</button>
          </div>
        </div>
      </div>
    </>
  )
}