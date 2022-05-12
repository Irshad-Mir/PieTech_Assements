const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
     trim: true,
      
    },
    age: {
      type: Number,
      required: true,
      trim: true,
    },
 isDeleted: false 
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("PietechUser", userSchema);
