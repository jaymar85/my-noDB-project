const equipment = [
    { id: 1, category: "equipment", name: "Draker Tent", price: 31, image: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Backpacking%20Tents/Nemo%20Dagger%202P%20backpacking%20tents.jpg", quantity: 1},
    { id: 2, category: "equipment", name: "Tungsten Tent", price: 55, image: "https://www.switchbacktravel.com/sites/default/files/image_fields/field_imgs_inline/Marmot%20Tungsten%202P%20tent.jpg", quantity: 1},
    { id: 3, category: "equipment", name: "Forte Sleeping Bag", price: 32, image: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Sleeping%20Bags/Nemo%20Forte%2020%20sleeping%20bag.jpg", quantity: 1},
    { id: 4, category: "equipment", name: "Water Purifier Bottle",price: 10, image: "https://www.switchbacktravel.com/sites/default/files/image_fields/field_imgs_inline/Grayl%20Ultralight%20Water%20Purifier%20Bottle.jpg", quantity: 1},
    { id: 5, category: "equipment", name: "Warby Hiking Pack",price: 67, image: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Daypacks/Kelty%20Redwing%2032%20hiking%20daypack.jpg", quantity: 1},
    { id: 6, category: "equipment", name: "Insulated sleeping pad",price: 50, image: "https://www.switchbacktravel.com/sites/default/files/image_fields/field_imgs_inline/REI%20Flash%20Insulated%20sleeping%20pad.jpg", quantity: 1},
    { id: 7, category: "equipment", name: "Trekking Poles", price: 20, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQOWwj_bs73rnWLZ0dWJ8CZpuBEiX3bCG-l0mQwGUj-ff3gvSMXb2hcdYIHktA6pedSuLrAWmaEALGhBqxHMsc7L19P-4nF8rxDA3txOCdx0uYnAGRP3oqK8g&usqp=CAE", quantity: 1},
    { id: 8, category: "equipment", name: "Trekking Survival Kit", price: 30, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTdX5P6OVY_FPJOQWRmhfj9aGYVb2WKgUvNT8ikNy4DtKEMrnXpFap6PYUYTVzOr_S3aI_xjh5rnHA1yJ2RFU_4qehKoU-9jDSt6k8oKEr2MLtQno_f1dSl&usqp=CAE", quantity: 1},
    { id: 9, category: "equipment", name: "Granite Crown Hiking Pack", price: 55, image: "https://www.switchbacktravel.com/sites/default/files/image_fields/field_imgs_inline/Granite%20Gear%20Crown2%20backpack.jpg", quantity: 1}
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