const mongoose = require("mongoose")
const trainSchema = mongoose.Schema({
    train_name: {
        type: String,
        required: true
    },
    train_size: {
        type: Number,
        min: 0, max:100
    },
    train_type: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("train", trainSchema)