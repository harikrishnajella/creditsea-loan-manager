const User = require('../models/User');

exports.getUserData = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.updateUserStatus = async (req, res) => {
    const { status } = req.body;
    const { id } = req.params; // assuming you're passing the user ID in the URL

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User status updated", updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};
