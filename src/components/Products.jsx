import { product } from "../data/product.jsx";

export default function Products({ onDessertClick, increaseDessert, decreaseDessert, cart }) {
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

export function Desserts({ cart = [], label, category, price, img, onDessertClick, increaseDessert, decreaseDessert }) {

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