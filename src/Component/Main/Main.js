import React, { Component } from 'react';
import './Main.css';
import axios from 'axios';
import Clothing from './Products/Clothing';
import Equipment from './Products/Equipment';
import ShoppingCart from './Cart/ShoppingCart';
import Clothingpage from './Products/Clothingpage';
import Equipmentpage from './Products/Equipmentpage';
import ShoppingCartpage from './Cart/ShoppingCartpage';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clothing: [],
            equipment: [],
            shoppingCart: [],
            yourShoppingCart: false,
            view: ""
        };
        // this.navigate = this.navigate.bind(this);
        // this.goToCart = this.goToCart.bind(this);
    }

    componentDidMount() {
        axios.get('/api/clothing').then(response => {
            this.setState({
                clothing: response.data
            });
        });
        axios.get('/api/equipment').then(response => {
            this.setState({
                equipment: response.data
            });
        });
    }
    
render() {
    const { clothing, equipment, cart, yourShoppingCart } = this.state;
    // const yourShoppingCart = this.state.isLoggedIn;
    // goToCart = <ShoppingCart />
    let num = 5;
    switch(this.state.view) {
        case 'Clothing':
            return <Clothingpage />;
        case 'Equipment':
            return <Equipmentpage />;
        case 'Shopping Cart':
            return <ShoppingCartpage />;
    }

    return (
        <main >
            {/* <div className="nav2">
                    <div className="box-links">
                        <h4>Clothing</h4>
                        <h4>Accessories</h4>
                        <h4>Shopping Cart</h4>
                    </div>
                </div> */}
            <div className="content-container">
                <div className="Product1" onClick={() => this.setState({view: 'Clothing'})}>
                    <Clothing />
                </div>
                <div className="Product2" onClick={() => this.setState({view: 'Equipment'})}>
                    <Equipment />
                </div>
                {/* {yourShoppingCart ? ( */}
                <div className="Product3" onClick={() => this.setState({view: 'Shopping Cart'})}>                
                    <ShoppingCart />
                {/* ) : ( */}
                    {/* <Main /> */}
                </div>
            </div>
        </main>
    );
}}

export default Main;