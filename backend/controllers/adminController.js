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
    const { id } = req.params;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        const message = status === 'Approved' ? "User Loan Approved Successfully" : "User Loan Rejected"
        res.status(200).json({ message, updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};
