const mongoose = require("mongoose")
const trainSchema = mongoose.Schema({
    train_name: String,
    train_size: Number,
    train_type: String
})
module.exports = mongoose.model("train",
    trainSchema)