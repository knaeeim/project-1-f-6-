import React from 'react';
import CartProduct from './CartProduct';

const Cart = ({ carts }) => {
    return (
        <div className='text-center'>
            <h1 className='text-4xl font-bold'>Cart Products : {carts.length}</h1>
            <div className='p-4'>
                {
                    carts.map((cartP) => <CartProduct cartP={cartP}></CartProduct>)
                }
            </div>
        </div>
    );
};

export default Cart;