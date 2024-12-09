const mongoose = require('mongoose');

const testResultSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  score: Number,
  date: Date,
  performance: Object, // Detailed performance breakdown
});

module.exports = mongoose.model('TestResult', testResultSchema);
