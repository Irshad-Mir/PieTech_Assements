
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({

    
        id: Number,
        name: String,
        username: String,
        email: String,
        address: {
          street: String,
          suite: String,
          city: String,
          zipcode: String,
          geo: {
            lat: String,
            lng: String
          }
        },
        phone: String,
        website: String,
        company: {
          name: String,
          catchPhrase: String,
          bs: String
        }

},
    { timestamps: true })


module.exports = mongoose.model("fake_User", UserSchema);