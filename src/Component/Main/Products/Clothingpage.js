import React, { Component } from 'react';
import axios from 'axios';
import './Clothingpage.css';


class Clothingpage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clothing: [],
            myCart: [],

        }
    }
        componentDidMount() {
            axios.get('/api/clothing').then(response => {
                console.log(";alksdf")
                this.setState({
                    clothing: response.data
                });
            });
        }
    addToCart(item) {
        this.setState({
            myCart: [...this.state.myCart, item]
        });
    }
    // removeFromCart(item) {

    // }
    
    render() {
        return (
            <section className="clothes-container">
                <h1>Clothing</h1>
                {this.state.clothing.map(val => {
                    console.log(val);
                    return (
                        <div>
                            <h4>{val.name}</h4>
                            <img src={val.image}/>
                        </div>
                    )
                })};
            </section>
        )
    }
}

export default Clothingpage;