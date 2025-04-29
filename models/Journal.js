const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  
    required: true,
  },
  emotion: {
    type: String, 
    required: true,
  },
  howWasYourDay: {
    type: String,
    required: true,
  },
  whatWentWell: {
    type: String,
    required: true,
  },
  whatCouldBeBetter: {
    type: String,
    required: true,
  },
  whatDidNotGoWell: {
    type: String,
    required: true,
  },
  otherComments: {
    type: [String], 
    default: [],
  },
}, { timestamps: true });

module.exports = mongoose.model('Journal', journalSchema);
