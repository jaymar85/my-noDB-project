import React, { Component } from 'react';
import axios from 'axios';
import Clothingpage from '../Products/Clothingpage';
import Equipmentpage from '../Products/Equipmentpage';
import './ShoppingCartpage.css';
import '../Products/Cart.css';

class ShoppingCartpage extends Component {
    
    constructor() {
        super();

        this.state = {
            totalCart: []
        }
    }

    handlerDisplay() {
        axios.get('/api/totalCart').then(response => {
            this.setState(
                { clothing: response.data },
                { equipment: response.data })
        })
    }

    render() {

        switch (this.state.view) {
            case 'Clothing':
                return <Clothingpage />;
            case 'Equipment':
                return <Equipmentpage />;
            // case 'Shopping Cart':
            //     return <ShoppingCartpage />;
        }

        return (
            <section className="content-container2">
                <nav className="product-nav2">
                    <h1 className="link1" onClick={() => this.setState({view: 'Clothing'})}>Clothing</h1>
                    <h1 className="link2" onClick={() => this.setState({view: 'Equipment'})}>Equipment</h1>
                    {/* <h1 className="link3">Shopping Cart</h1> */}
                </nav>
                <div>
                <h1>Your Shopping Cart</h1>
                </div>
            </section>
        )
    }
}

export default ShoppingCartpage;