const express = require('express');
const clothingController = require('./controllers/clothingController');
const gearController = require('./controllers/gearController');


const app = express();

const port = 5050;
app.use(express.json()); //helps to give access to req.body

//endpoints
app.get('/api/clothing', clothingController.getClothing );
app.post('/api/clothing', clothingController.addClothing );
app.delete('/api/clothing/:id', clothingController.delClothing ); //error 404
app.put('/api/clothing', clothingController.updateClothing); //error 404

app.get('/api/equipment', gearController.getEquipment);
app.post('/api/equipment', gearController.addEquipment);
// app.delete('/api/equipment', gearController.delEquipment);
// app.put('/api/equipment', gearController.updateEquipment);

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});