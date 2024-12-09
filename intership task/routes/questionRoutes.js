const express = require('express');
const Question = require('../models/question');
const router = express.Router();

// Create Question
router.post('/', async (req, res) => {
  const question = new Question(req.body);
  await question.save();
  res.status(201).send(question);
});

// Get All Questions
router.get('/', async (req, res) => {
  const questions = await Question.find();
  res.send(questions);
});

// Randomize Questions
router.get('/random', async (req, res) => {
  const questions = await Question.find();
  const randomized = questions.sort(() => Math.random() - 0.5);
  res.send(randomized);
});

module.exports = router;
