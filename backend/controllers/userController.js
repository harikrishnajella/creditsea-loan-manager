const User = require('../models/User');

const loanOfficers = ['Emma Johnson', 'Michael Patel', 'Sophia Lee', 'James Anderson', 'Olivia Ramirez'] 

exports.getUserData = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.createUserData = async (req, res) => {
    const {fullName, loanAmount, loanTenure, employmentStatus, employmentAddress, reason} = req.body
    const officer = loanOfficers[Math.floor(Math.random() * loanOfficers.length)]

    try {
        const newData = new User({
            fullName,
            loanAmount,
            loanTenure,
            employmentStatus,
            employmentAddress,
            reason,
            status: 'Pending',
            loanOfficer: officer
        })
        const newCreatedData = await newData.save()
        res.status(201).json({message: "New Loan Requested Successfully", newCreatedData})
    } catch (error) {
        res.status(500).json(error)
    }
}