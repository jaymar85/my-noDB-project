//import
// const clothingController = require('./clothingController');

const equipment = [
    { id: 1, category: "equipment", name: "Draker Tent", price: 31, image: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Backpacking%20Tents/Nemo%20Dagger%202P%20backpacking%20tents.jpg"},
    { id: 2, category: "equipment", name: "Tungsten Tent", price: 30, image: "https://www.switchbacktravel.com/sites/default/files/image_fields/field_imgs_inline/Big%20Agnes%20Tiger%20Wall%20UL2%20backpacking%20tent.jpg"},
    { id: 3, category: "equipment", name: "Forte Sleeping Bag", price: 57, image: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Sleeping%20Bags/Nemo%20Forte%2020%20sleeping%20bag.jpg"},
    { id: 4, category: "equipment", name: "Water Purifier Bottle",price: 1, image: "https://www.switchbacktravel.com/sites/default/files/image_fields/field_imgs_inline/Grayl%20Ultralight%20Water%20Purifier%20Bottle.jpg"},
    { id: 5, category: "equipment", name: "Warby Hiking Pack",price: 95, image: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Daypacks/Kelty%20Redwing%2032%20hiking%20daypack.jpg"},
    { id: 6, category: "equipment", name: "insulated sleeping pad",price: 98, image: "https://www.switchbacktravel.com/sites/default/files/image_fields/field_imgs_inline/REI%20Flash%20Insulated%20sleeping%20pad.jpg"},
    { id: 7, category: "equipment", name: "Sleeping Pad",price: 50, image: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Sleeping%20Pads/Nemo%20Switchback%20sleeping%20pad.jpg"}
]

//global scope
let myCartTwo = [];
let id = 0;
// let category = '';

module.exports = {
    myCartTwo, 

    getEquipment: (req, res) => {
        res.status(200).send(equipment)
    },
    
    addEquipment: (req, res) => {
        myCartTwo.push(req.body);
        res.status(200).send(myCartTwo);
    }

}