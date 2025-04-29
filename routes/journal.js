const express = require('express');
const router = express.Router();
const { addJournal, getMyJournals, updateJournal, deleteJournal } = require('../controllers/journal');
const protect = require('../middleware/auth');

router.post('/', protect, addJournal);

router.get('/', protect, getMyJournals);

router.put('/:id', protect, updateJournal);

router.delete('/:id', protect, deleteJournal);

module.exports = router;
