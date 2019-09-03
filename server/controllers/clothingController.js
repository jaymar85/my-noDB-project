const clothing = [
    { id:1, category: "clothing",  name: "Men's outdoor Shirt", price: 45, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQSs9RN1OWhEoNeXH2zxbtrRiwQoVkbCshmpbqPVuffzwBW-1bCnbfDxFhZd-aJnJm6QXJ_aJicdgfuHWajsTkJuE9UaGkMmdf1VW-gLQZH&usqp=CAc", quantity: 1},
    { id:2, category: "clothing",  name: "Women's Graphic Shirt", price: 18, image: "https://images-na.ssl-images-amazon.com/images/I/51e54KVoqfL._UX679_.jpg", quantity: 1},
    { id:3, category:"clothing", name: "Hiking Socks", price: 24, image: "https://www.switchbacktravel.com/sites/default/files/image_fields/field_imgs_inline/Darn%20Tough%20Micro%20Crew%20Cushion%20%282018%29.jpg", quantity: 1},
    { id:4, category: "clothing",  name: "Drypoint All terrain Coat", price: 62, image:"https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Rain%20Jackets/REI%20Drypoint%20GTX%20rain%20jackets.jpg", quantity: 1},
    { id:5, category: "clothing",  name: "Apex Rain Coat", price: 65, image: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Skiing/Softshells/The%20North%20Face%20Apex%20Flex%203.0%20softshell%20jacket.jpg", quantity: 1},
    { id:6, category:"clothing", name: "Stance Hike Socks", price: 83, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQIacJnjnH-hoiCa6ekOSuZbt8QxveEZpXRuRDepgGYJ6Xb20fNIVZ3mwSRjyqmOiMnGX1xPGO42m6KU0XBzzqOg9IVIgRg&usqp=CAY", quantity: 1},
    { id:9, category:"clothing",  name: "All Trails Hiking Shoe", price: 6, image: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Hiking%20Shoes/Merrell%20Moab%202%20low%20hiking%20shoes.jpg", quantity: 1},
    { id:10, category:"clothing", name: "Ultralight Trail Shoe",  price: 35, image: "https://www.switchbacktravel.com/sites/default/files/image_fields/Best%20Of%20Gear%20Articles/Hiking%20and%20Backpacking/Trail%20Runners/Altra%20Lone%20Peak%204.0%20trail-running%20shoe.jpg", quantity: 1}
];

//global scope
let myCart = []; 
let id = 0;
// let category = '';

module.exports = {
    myCart, //exporting myCart

    getClothing: (req, res) => {
        res.status(200).send(clothing);
    },

    addClothing: (req, res) => {
        myCart.push(req.body);
        res.status(200).send(myCart);
    }
    
}