import React from 'react';
import { RxCross1 } from 'react-icons/rx';

const CartProduct = ({ cartP, removeProducts }) => {
    console.log(cartP);
    const { name, price, image, cart_quantity } = cartP;
    return (
        <div className='flex gap-5 justify-between my-8'>
            {/* text */}
            <div className='text-left space-y-2'>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <div>
                    BDT/$ : {price}, 
                    Quantity : {cart_quantity}
                </div>
            </div>

            {/* image */}
            <div className='w-16 h-16 rounded-xl'>
                <img className='h-full rounded-xl' src={image} alt="" />
            </div>
            <div className='flex items-center'>
                <button onClick={() => removeProducts(cartP)}><RxCross1 className='text-red-700 font-bold'  size={35}/></button>
            </div>
        </div>
    );
};

export default CartProduct;