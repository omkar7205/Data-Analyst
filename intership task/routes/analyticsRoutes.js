const express = require('express');
const TestResult = require('../models/testResult');
const router = express.Router();

// Generate Analytics
router.get('/performance/:studentId', async (req, res) => {
  const { studentId } = req.params;
  const results = await TestResult.find({ studentId });

  const totalScore = results.reduce((acc, result) => acc + result.score, 0);
  const averageScore = results.length ? totalScore / results.length : 0;

  res.send({
    totalTests: results.length,
    totalScore,
    averageScore,
    details: results,
  });
});

module.exports = router;
