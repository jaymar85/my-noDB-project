import React from 'react';

function Equipment(props) {
    return (
        <div>
            <h1 className="title1">Equipment</h1>
            <div className="gear-container">
                <h4>{props.name}</h4>
                <h4>${props.price}.00</h4>
                <img src={props.image} alt="gear products"/>
                <button onClick={() => props.addGearToCart(props.id)}>Add to cart</button>
            </div>
        </div>
    );
}

export default Equipment;