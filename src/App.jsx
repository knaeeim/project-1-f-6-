import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart'
import Products from './Components/Products'
import Swal from 'sweetalert2';

function App() {

  const [carts, setCarts] = useState([]);

  const handleCartUpdate = (product) => {
    setCarts((prev) => {
      const exists = carts.some((c) => c.id === product.id);

      if (exists) {
        Swal.fire({
          title: `${product.name} another one is added to cart`,
          icon: "success",
          draggable: true
        });
        return prev.map((prod) => prod.id === product.id ? {...prod, cart_quantity: prod.cart_quantity + 1} : prod);
      }
      else {
        Swal.fire({
        title: `${product.name} has been added to the cart!!!`,
          icon: "success",
          draggable: true
        });
        return [...prev, {...product, cart_quantity: 1}]
      }
    })

  }

  const removeProducts = (product) => {
    const deletedProd = carts.filter((f) => f.id !== product.id)
    setCarts(deletedProd);
  }

  console.log(carts);

  return (
    <div className='flex justify-center gap-10'>
      <div className='my-20 w-[70%]'>
        <Products handleCartUpdate={handleCartUpdate} />
      </div>
      <div className='my-20 w-[30%]'>
        <Cart carts={carts} removeProducts={removeProducts}></Cart>
      </div>
    </div>
  )
}

export default App
