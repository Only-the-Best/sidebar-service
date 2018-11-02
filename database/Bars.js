const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;

const topBarSchema = new mongoose.Schema(
    {
        id: Number,
        name: String,
        imageUrl: String,
        rating: Number,
        phone: String,
        sales: Number
    }
)

const bottomBarSchema = new mongoose.Schema(
    {
        id: Number,
        price: Number,
        sellDate:Number,
        beds: Number,
        baths: Number,
        squareFeet: Number,
        address: String
    }
)

const TopBar = mongoose.model("TopBar", topBarSchema);
const BottomBar = mongoose.model("BottomBar", bottomBarSchema);

let getInfo = res => {
    TopBar.find({})
        .exec()
        .then( item => {
            BottomBar.find({})
            .exec()
            .then(bot => {
            var combineBars = [item, bot]
            res.send(combineBars)
            })
        }
    )
}

module.exports.getInfo = getInfo;
module.exports.TopBar = TopBar;
module.exports.BottomBar = BottomBar;