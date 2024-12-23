import { product } from "./assets/data/product.jsx";

function App() {
  return (
    <div className="container">
      <Header />
      <Products />
    </div>
  )
}

function Header() {
  return (
    <div className="header">
      <h2>Desserts</h2>
    </div>
  )
}

function Products() {
  const productItems = product.map(x => <Desserts key={x.id} label={x.name} category={x.category} price={x.price} img={x.img} />)

  return (
    <>
      <div className="products">
        <div className="product-list">{productItems}</div>
        <MyCard />
      </div>
    </>
  )
}

function Desserts({ label, category, price, img }) {
  function handleClick() {
    console.log((label))
  }
  return (
    <>
      <div className="productsItem">
        <div className="card-inner">
          <img className="dessert-image" src={img} alt={label} />
          <button className="add-btn" onClick={handleClick}>
            <img src="/img/shopping-cart-plus.svg" alt="" />
            Add to Card</button>
        </div>
        <div className="card-text">
          <h3>{category}</h3>
          <h4>{label}</h4>
          <p>${price}</p>
        </div>
      </div>
    </>
  )
}

function MyCard() {
  return (
    <>
      <div className="order-card-empty">
        <h3>Your Cart (0)</h3>
        <img src="/img/empty-card-image.svg" alt="empty card image" />
        <p>Your added items will appear here</p>
      </div>
    </>
  )
}

export default App;