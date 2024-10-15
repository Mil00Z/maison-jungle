// Somes Variables
let date = new Date();

// Component Store Title
const MainTitle = () => { 

  let storeName = 'La Maison Jungle';

  return (<h1 className="main-title" data-site-build={date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate()}>{storeName.toUpperCase()}</h1>)}

// Component Description
const Description = () => {

  let textDesc = 'Ici achetez toutes les plantes dont vous avez toujours voulu !';
  let emojis ='🌵🌱🎍';

  return (<p data-customer-satisfaction={Math.floor(Math.random() * 100) + `%`}>{textDesc} {emojis}</p>)

}

// Component Banner Header
function Banner() {

  return (<header>
            <MainTitle/> 
            <Cart/>
            <Description/>
          </header>
  )
}


//Component Cart
const Cart = () => {

  let cartItems = {
    'Monsterra': {
      price:8, 
      quantity: 1
    },
    'Lierre': {
      price:10,
       quantity: 1
    },
    'Roses': {
      price:6,
      quantity: 1
    },
    'Bouquet': {
      price:15,
      quantity: 1
    },
    'Orchidee': {
      price:20,
      quantity: 1
    }
  }

  let totalPrice = 0;


  return (<div className="cart" data-items-available={Object.keys(cartItems).length}>

    <ul>

      {Object.keys(cartItems).map((entrie) => {

      totalPrice+= cartItems[entrie].price;

    return <li className="cart-item" data-quantity={cartItems[entrie].quantity}>
              <span className="item-name">{entrie} :</span>
              <span className="item-price"> {cartItems[entrie].price} euros</span>
          </li>
        }) 
      }

    </ul>
    <div className="total-price debeug-1">Total: {totalPrice} euros</div>     
</div>)


}












ReactDOM.render(
  <Banner />,
  document.getElementById('root'));