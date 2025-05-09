const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    itemName: {type: String, require: true},
    description: {type: String, require: true},
    locationFound: {type: String, require: true},
    dateFound: {type: Date, default: Date.now },
    claimed: {type: Boolean, default: false}
})

const Items = mongoose.model("Item", productSchema)

module.exports = Items