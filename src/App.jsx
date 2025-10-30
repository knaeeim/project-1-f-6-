import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart'
import Products from './Components/Products'

function App() {

  const [carts, setCarts] = useState([]);

  const handleCartUpdate = (product) => {
    console.log(product);
    if(carts.includes(product)){
      product.cart_quantity = product.cart_quantity + 1;
    }
    else {
      product.cart_quantity = 1;
      setCarts(prev => [...prev, product])
    }
  }

  console.log(carts);

  return (
    <div className='flex justify-center gap-10'>
        <div className='my-20 w-[70%]'>
          <Products handleCartUpdate={handleCartUpdate}/>
        </div>
        <div className='my-20 w-[30%]'>
          <Cart carts={carts}></Cart>
        </div>
    </div>
  )
}

export default App
