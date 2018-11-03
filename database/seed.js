const db = require('./index.js');
const Bars = require('./Bars.js');
const faker = require('faker');

const topBar = [];
const bottomBar = [];

for(var i = 0; i < 100; i++){
  topBar.push({
    "id": i + 1,
    "name": faker.name.findName(),
    "imageUrl": faker.image.avatar(),
    "rating": Math.floor(Math.random() * (5 - 1) + 1),
    "phone": faker.phone.phoneNumber(),
    "sales": Math.floor(Math.random() * (100 - 0) + 0) 
  })
}

for(var j = 0; j < 100; j++){
  bottomBar.push({
    "id": j + 1,
    "price": Math.floor(Math.random() * (1000000 - 100000) + 100000),
    "sellDate": faker.date.past(),
    "beds": Math.floor(Math.random() * 5),
    "baths": Math.floor(Math.random() * 5),
    "squareFeet": Math.floor(Math.random() * (10000 - 1000) + 1000),
    "address": faker.address.streetAddress()
  })
}


const insertTopBar = function() {
    Bars.TopBar.create(topBar).then(() => db.close());
  };

const insertBottomBar = function() {
    Bars.BottomBar.create(bottomBar).then( () => db.close());
}
  
  insertTopBar();
  insertBottomBar();