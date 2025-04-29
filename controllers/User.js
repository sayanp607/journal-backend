const User = require('../models/User');

exports.getUsername = async (req, res) => {
  try {
    const userId = req.params.id; 
    const user = await User.findById(userId).select('username'); 
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ username: user.username });
  } catch (error) {
    console.error('Error fetching username:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
