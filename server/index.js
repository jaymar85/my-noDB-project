const express = require('express');
const clothingController = require('./controllers/clothingController');
const gearController = require('./controllers/gearController');
const cartController = require('./controllers/cartController');


const app = express();

const port = 5050;
app.use(express.json()); //helps to give access to req.body

//clothing page endpoints
app.get('/api/clothing', clothingController.getClothing ); //user sees clothing array
app.post('/api/clothing', clothingController.addClothing ); //users adds items to clothing cart array
// app.post('/api/totalCart', cartController.addToShoppingCart); //clothing cart array is exported to Shopping Cart

//equipment page endpoints
app.get('/api/equipment', gearController.getEquipment); //users sees equipment array
app.post('/api/equipment', gearController.addEquipment); //users adds items to equipment cart array
// app.post('/api/totalCart', cartController.addToShoppingCart); //equipment cart array is exported to Shopping Cart

//shopping cart page endpoints
app.post('/api/totalCart/:category',  cartController.addToShoppingCart); //clothing/equipment carts are imported to total Shopping Cart array
app.get('/api/totalCart/', cartController.getShoppingCart);

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});