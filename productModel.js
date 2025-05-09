const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    itemName: {type: String, require: true},
    description: {type: String, require: true},
    locationFound: {type: String, require: true},
    dateFound: {type: Data, default: 0 },
    claimed: {type: Boolean, default: false}
})

const Items = new mongoose("Item", productSchema)