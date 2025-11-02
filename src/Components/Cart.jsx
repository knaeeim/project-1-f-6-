import React, { useEffect, useState } from 'react';
import CartProduct from './CartProduct';
import { GiCrossedSabres } from 'react-icons/gi';

const Cart = ({ carts, removeProducts }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(()=> {
        const tPrice = carts.reduce((acc, curr) => {
            return acc += curr.cart_quantity * curr.price;
        }, 0)
        setTotalPrice(tPrice)
    }, [carts])
   

    return (
        <div className='text-center'>
            <h1 className='text-4xl font-bold'>Cart Products : {carts.length}</h1>
            <div className='p-4'>
                {
                    carts.length > 0 ? <>
                        {
                            carts.map((cartP) => <CartProduct key={cartP.id}removeProducts={removeProducts} cartP={cartP}></CartProduct>)
                        }
                    </> : <div className='h-52 flex justify-center items-center flex-col'>
                        <GiCrossedSabres size={50}/>
                        <p className='text-red-800 font-bold text-4xl'>You don't have any added products</p>
                    </div>
                }
                <hr />
                <div className='flex justify-between mt-4'>
                    <p className='text-green-900 font-bold text-4xl'>Total Price :</p>
                    <p className='text-green-900 font-bold text-4xl'>{totalPrice}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;