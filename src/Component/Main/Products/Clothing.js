import React from 'react';
import './Clothing.css';

function Clothing(props) {   
    return (
        <div >
            <h1 className="title1">Clothing</h1>
            <div className="clothes-container">
                <h4>{props.name}</h4>
                <h4>${props.price}.00</h4>
                <img src={props.image} alt="clothing products"/>
                <button onClick={() => props.addClothesToCart(props.id)}>Add to Cart</button>
            </div>
        </div>
    );
    
}

export default Clothing;