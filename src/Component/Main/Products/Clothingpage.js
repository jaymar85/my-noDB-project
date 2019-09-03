import React, { Component } from 'react';
import axios from 'axios';
import './Clothingpage.css';
// import Main from '../Main';
import Equipmentpage from './Equipmentpage';
import ShoppingCartpage from '../Cart/ShoppingCartpage';

class Clothingpage extends Component {

    constructor() {
        super();
        this.state = {
            clothing: [],
            myCart: [],
            view: ""
            
        }
        this.addClothesToCart = this.addClothesToCart.bind(this);
    }
    componentDidMount() {
        axios.get('/api/clothing').then(response => {
            this.setState({
                clothing: response.data
            });
        });
    }

    //This is going to Clothing Cart
    addClothesToCart(id) {
        const newClothing = this.state.clothing[id - 1];
        axios.post(`/api/cart/clothing`, newClothing).then(response => {
            this.setState({ myCart: response.data })
        }).catch(err => {
            console.log(err)
        });
    }

    render() {
        switch (this.state.view) {
            case 'Equipment':
                return <Equipmentpage />;
            case 'Shopping Cart':
                return <ShoppingCartpage />;
        }

        return (
            <section className="clothing-body">
                <nav className="product-nav">
                    <h1 className="link2" onClick={() => this.setState({ view: 'Equipment' })}>Equipment</h1>
                    <h1 className="link3" onClick={() => this.setState({ view: 'Shopping Cart' })}>Shopping Cart</h1>
                </nav>
                <br/>
                <h1> > Clothing</h1>
                {this.state.clothing.map(val => {
                    console.log(val);
                    return (
                        <div className="clothes-container">
                            <h4>{val.name}</h4>
                            <h4>${val.price}.00</h4>
                            <img src={val.image} alt="clothing products"/>
                            <button onClick={() => this.addClothesToCart(val.id)}>Add to Cart</button>
                        </div>
                    )
                })};
            </section>
        )
    }
}

export default Clothingpage;