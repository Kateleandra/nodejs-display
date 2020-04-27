const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
  },

  description:{
    type: String,
    required: true
  },

  titlePerson:{
    type: String,
    required: true
  },

  descriptionPerson:{
    type: String,
    required: true
  }
});

mongoose.model('Content', ContentSchema);