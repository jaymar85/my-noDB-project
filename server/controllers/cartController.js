//importing clothingController and gearController to shopping cart
const clothingController = require('./clothingController');
const gearController = require('./gearController');

let cart = [ [], [] ];
// let id = 0
// let category = ''; 

module.exports = {
  
    addToShoppingCart: (req, res) => {
        if (req.params.category == 'clothing') {
            // let item = clothingController.find(item => 
            // item.id == req.body.id)
            cart[0].push(req.body)
            console.log(req.body);
            res.status(200).send(cart);
        }

        if(req.params.category == 'equipment') {
            // let item = equipmentController.find(item => 
            // item.id == req.body.id)
            cart[1].push(req.body);
            res.status(200).send(cart);
        }
    },

    getShoppingCart: (req, res) => {
        res.status(200).send(cart);
    }
}