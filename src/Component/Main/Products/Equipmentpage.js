import React, {Component} from 'react';
import axios from 'axios';
import './Equipmentpage.css';

class Equipmentpage extends Component {
    constructor() {
        super();
        this.state = {
            equipment: [],
            myCart: []
        }
    }
    componentDidMount() {
        axios.get('/api/equipment').then(response => {
            this.setState({
                equipment: response.data
            });
        });
    }
    
    render() {

        return (
            
            <section className="gear-container">
              <h1>Equipment</h1>
              {this.state.equipment.map(val => {
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

export default Equipmentpage;