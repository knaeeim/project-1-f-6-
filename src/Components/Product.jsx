import React from 'react';
import Products from './Products';

const Product = ({ product, handleCartUpdate }) => {
    const { name, category, price, image, rating, description } = product;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        className="w-96 h-52 object-cover"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-primary">{rating}</div>
                        <div className="badge badge-secondary">{category}</div>
                        <div className="badge badge-success">$ {price}</div>
                    </div>
                    <div className='flex gap-4 w-full mt-5'>
                        <button onClick={() => handleCartUpdate(product)} className='btn btn-outline btn-success w-[50%]'>Add to Cart</button>
                        <button className='btn btn-outline btn-secondary w-[50%]'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;