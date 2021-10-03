const { Schema, model } = require("mongoose");

authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  
});
