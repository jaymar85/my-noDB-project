import React, { Component } from 'react';
import axios from 'axios';
// import Main from '../Main';
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
        this.handlerRemoveDisplay = this.handlerRemoveDisplay.bind(this);
    }

    componentDidMount() {
        axios.get('/api/cart').then(response => {
            this.setState({ cart: response.data })
        }).catch(err => {
            console.log(err)
        });
    }

    handlerRemoveDisplay(index, category) {
        console.log(index, category);
        let body = {category}
        axios.delete(`/api/cart/${index}/${category}`).then(response => {       
            this.setState(
                { cart: response.data }
            )
        });
    }

    handlerQuantity = (index, category, quantity) => {
        axios.put(`api/cart/${index}/${category}`, {quantity}).then(response => {       
            this.setState(
                { cart: response.data }
            )
        });
    }

    render() {

        switch (this.state.view) {
            case 'Clothing':
                return <Clothingpage />;
            case 'Equipment':
                return <Equipmentpage />;
        }

        return (
            <section className="content-container2">
                <nav className="product-nav2">
                    <h1 className="link1" onClick={() => this.setState({ view: 'Clothing' })}>Clothing</h1>
                    <h1 className="link2" onClick={() => this.setState({ view: 'Equipment' })}>Equipment</h1>
                    {/* <h1 className="link3">Shopping Cart</h1> */}
                </nav>
                <div>
                    <h1> > Your Shopping Cart</h1>
                </div>
                {/* clothing in shopping cart */}
                {this.state.cart[0] && this.state.cart[0].map((item, index) => {
                    return (
                        <div key={index} className="clothing-cart">                               
                            <h4>{item.name}</h4>
                            <h4>${item.price}.00</h4>
                            <img src={item.image} alt="Your clothing items"/>  
                            <h4>Items:{item.quantity} </h4> 
                            
                            <div className="form1">
                            <button onClick={() => this.handlerRemoveDisplay(index, 'clothing')}>Remove Item</button>  
                            <br /> 
                            <label>Quantity: <span/>
                            {/* quantity */}
                            <input id="quantity" name="quantity" type="number" min="1" max="99" 
                            defaultValue={item.quantity} onChange={(e) => this.handlerQuantity(index, item.category, e.target.value)}/></label>
                            <br />  
                            <button>Purchase</button>   
                            </div>
                        </div>
                    )
                })}
                {/* equipment in shopping cart */}
                {this.state.cart[1] && this.state.cart[1].map((item, index) => {
                    return (
                        <div key={index} className="equipment-cart">                               
                            <h4>{item.name}</h4>
                            <h4>${item.price}.00</h4>
                            <img src={item.image} alt="Your equipment items"/> 
                            <h4>Items:{item.quantity++}</h4>  
                            <div className="form2">
                              
                            <button onClick={() => this.handlerRemoveDisplay(index, 'equipment')}>Remove Item</button>      
                            {/* <input type=""></input> */}
                            <br /> 
                            <label for="quantity">Quantity: <span/>
                            <input id="quantity" name="quantity" type="number" min="1" max="99" 
                            defaultValue={item.quantity} onChange={(e) => this.handlerQuantity(index, item.category, e.target.value)}/></label>
                            <br />  
                            <button>Purchase</button> 
                            </div>                          
                        </div>
                    )
                })}
    
            </section>
        )
    }
}

export default ShoppingCartpage;

//line 43    
// let allClothingDisplay = this.state.cart[0].map((item) => {
//     return item
// })
// let allEquipmentDisplay = this.state.cart[1].map(item => {
//     return item
// })


// handlerDisplay() {
//     axios.get('/api/cart').then(response => {

//         this.setState(
//             { cart: response.data }
//         )
//     });
// }