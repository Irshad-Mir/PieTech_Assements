const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

    userId: { type: Number, },
    id: { type: Number, },
    title: { type: String },
    body: { type: String },

},
    { timestamps: true })


module.exports = mongoose.model("fake_Post", postSchema);









