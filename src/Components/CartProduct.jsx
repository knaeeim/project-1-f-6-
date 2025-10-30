import React from 'react';

const CartProduct = ({ cartP}) => {
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
        </div>
    );
};

export default CartProduct;