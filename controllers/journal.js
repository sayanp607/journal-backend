const Journal = require('../models/Journal');

exports.addJournal = async (req, res) => {
  try {
    const { emotion, howWasYourDay, whatWentWell, whatCouldBeBetter, whatDidNotGoWell, otherComments } = req.body;

    const newJournal = await Journal.create({
      user: req.user._id,
      emotion,
      howWasYourDay,
      whatWentWell,
      whatCouldBeBetter,
      whatDidNotGoWell,
      otherComments,
    });

    res.status(201).json(newJournal);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getMyJournals = async (req, res) => {
  try {
    const journals = await Journal.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(journals);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateJournal = async (req, res) => {
  try {
    const journal = await Journal.findById(req.params.id);

    if (!journal) return res.status(404).json({ message: 'Journal not found' });

    if (journal.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const updatedJournal = await Journal.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedJournal);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.deleteJournal = async (req, res) => {
  try {
    const journal = await Journal.findById(req.params.id);

    if (!journal) return res.status(404).json({ message: 'Journal not found' });

    if (journal.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await journal.deleteOne();

    res.status(200).json({ message: 'Journal deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
