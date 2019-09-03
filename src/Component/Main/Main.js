import React, { Component } from 'react';
import Clothing from './Products/Clothing';
import Equipment from './Products/Equipment';
import ShoppingCart from './Cart/ShoppingCart';
import Clothingpage from './Products/Clothingpage';
import Equipmentpage from './Products/Equipmentpage';
import ShoppingCartpage from './Cart/ShoppingCartpage';
import './Main.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clothing: [],
            equipment: [],
            view: ""
        };
    }
    
render() {
    
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
            <div className="content-container">
                <div className="Product1" onClick={() => this.setState({view: 'Clothing'})} >
                    <Clothing />
                </div>
                <div className="Product2" onClick={() => this.setState({view: 'Equipment'})}>
                    <Equipment />
                </div>
                <div className="Product3" onClick={() => this.setState({view: 'Shopping Cart'})}>                
                    <ShoppingCart />
                </div>
            </div>
        </main>
    );
}}

export default Main;