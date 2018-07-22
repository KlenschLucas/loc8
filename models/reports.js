const mongoose = require('mongoose');

// Report Schema
const ReportSchema = mongoose.Schema({
  created: {
    type: Date,
    default: Date.now,
  },
  user: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  location: {
    lat: String,
    long: String,
  },
  priority: {
    type: String,
  },
  isResolved: {
    type: Boolean,
    default: false,
  },
});

let Report = module.exports = mongoose.model('Report', ReportSchema);

