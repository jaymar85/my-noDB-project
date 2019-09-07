import React, { Component } from 'react';
import axios from 'axios';
import Clothingpage from './Clothingpage';
import ShoppingCartpage from '../Cart/ShoppingCartpage';
import Equipment from "./Equipment";
import './Equipmentpage.css';


class Equipmentpage extends Component {
    constructor() {
        super();
        this.state = {
            equipment: [],
            myCartTwo: [],
            view: ""
        }
        this.addGearToCart = this.addGearToCart.bind(this);
    }
    
    componentDidMount() {
        axios.get('/api/equipment').then(response => {
            this.setState({equipment: response.data});
        }).catch(err => {
            console.log(err)
        });
    }

    //This is going to Equipment Cart
    addGearToCart(id) {
        const newEquipment = this.state.equipment[id];
        // console.log(newEquipment);
        axios.post('/api/cart/equipment', newEquipment).then(response => {
            this.setState({ myCartTwo: response.data })
        });
    }

    render() {

        switch (this.state.view) {
            case 'Clothing':
                return <Clothingpage />;
            case 'Shopping Cart':
                return <ShoppingCartpage />;
        }

        return (
            <section className="gear-body">
                <nav className="product-nav">
                    <h1 className="link1" onClick={() => this.setState({view: 'Clothing'})}>Clothing</h1>
                    <h1 className="link3" onClick={() => this.setState({view: 'Shopping Cart'})}>Shopping Cart</h1>
                </nav>
                <br/>
                <h1> > Equipment</h1>
                {this.state.equipment.map( (val, id) => {
                    // console.log(val);
                    return (
                        <Equipment 
                        equipment={this.state.equipment}
                        category={val.category}
                        name={val.name}
                        price={val.price}
                        image={val.image}
                        addGearToCart={this.addGearToCart}
                        id={val.id}
                        />
                        )
                })};
            </section>
        )
    }
}

export default Equipmentpage;




// <div className="gear-container">
//     <h4>{val.name}</h4>
//     <h4>${val.price}.00</h4>
//     <img src={val.image} alt="gear products"/>
//     <button onClick={() => this.addGearToCart(val.id)}>Add to cart</button>
// </div>