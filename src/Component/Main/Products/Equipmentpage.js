import React, { Component } from 'react';
import axios from 'axios';
import Clothingpage from './Clothingpage';
import ShoppingCartpage from '../Cart/ShoppingCartpage';
import './Equipmentpage.css';


class Equipmentpage extends Component {
    constructor() {
        super();
        this.state = {
            equipment: [],
            myCartTwo: [],

        }
        this.addGearToCart = this.addGearToCart.bind(this);
    }
    componentDidMount() {
        axios.get('/api/equipment').then(response => {
            this.setState({
                equipment: response.data
            });
        });
    }

    //This is going to Equipment Cart
    addGearToCart(id) {
        const newEquipment = this.state.equipment[id - 1];
        console.log(newEquipment);
        axios.post('/api/totalCart/equipment', newEquipment).then(response => {
            this.setState({ myCartTwo: response.data })
        });
    }



    render() {

        switch (this.state.view) {
            case 'Clothing':
                return <Clothingpage />;
            // case 'Equipment':
            //     return <Equipmentpage />;
            case 'Shopping Cart':
                return <ShoppingCartpage />;
        }

        return (
            <section className="gear-body">
                <nav className="product-nav">
                    <h1 className="link1" onClick={() => this.setState({view: 'Clothing'})}>Clothing</h1>
                    {/* <h1 className="link2">Equipment</h1> */}
                    <h1 className="link3" onClick={() => this.setState({view: 'Shopping Cart'})}>Shopping Cart</h1>
                </nav>
                <h1>Equipment</h1>
                {this.state.equipment.map(val => {
                    console.log(val);
                    return (
                        <div className="gear-container">
                            <h4>{val.name}</h4>
                            <h4>${val.price}.00</h4>
                            <img src={val.image} />
                            <button onClick={() => this.addGearToCart(val.id)}>Add to cart</button>
                        </div>
                    )
                })};
            </section>
        )

    }
}

export default Equipmentpage;