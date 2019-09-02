import React, { Component } from 'react';
import axios from 'axios';
import Main from '../Main';
import Clothingpage from '../Products/Clothingpage';
import Equipmentpage from '../Products/Equipmentpage';
import './ShoppingCartpage.css';
import '../Products/Cart.css';

class ShoppingCartpage extends Component {

    constructor() {
        super();

        this.state = {
            cart: [[], []],
            view: ""
        }
    }
    componentDidMount() {
        axios.get('/api/cart').then(response => {
            this.setState({ cart: response.data })
        });
    }

    handlerDisplay() {
        axios.get('/api/cart').then(response => {
            this.setState(
                { clothing: response.data },
                { equipment: response.data })
        });
    }

    render() {

        switch (this.state.view) {
            case 'Clothing':
                return <Clothingpage />;
            case 'Equipment':
                return <Equipmentpage />;
            // case 'Hit The Trails':
            //     return <Main />;
        }

        // let allClothingDisplay = this.state.cart[0].map((item) => {
        //     return item
        // })
        // let allEquipmentDisplay = this.state.cart[1].map(item => {
        //     return item
        // })

        return (
            <section className="content-container2">
                <nav className="product-nav2">
                    <h1 className="link1" onClick={() => this.setState({ view: 'Clothing' })}>Clothing</h1>
                    <h1 className="link2" onClick={() => this.setState({ view: 'Equipment' })}>Equipment</h1>
                    {/* <h1 className="link3">Shopping Cart</h1> */}
                </nav>
                <div>
                    <h1>Your Shopping Cart</h1>
                </div>
                {this.state.cart[0] && this.state.cart[0].map((item) => {
                    return (
                        <div>
                            <table>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <img src={item.image} />
                                </tr>
                            </table>
                        </div>
                    )
                })}
                
                {this.state.cart[1] && this.state.cart[1].map((item) => {
                    return (
                        <div>
                            <table>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    {/* <td>{item.image}</td> */}
                                    <td><img src={item.image} /></td>
                                </tr>
                            </table>
                        </div>
                    )
                })}
            </section>
        )
    }
}

export default ShoppingCartpage;