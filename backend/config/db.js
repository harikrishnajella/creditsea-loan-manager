const mongoose = require('mongoose');

const connectDB =  async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
       console.log(`MongoDB is connected successfully...`)
    } catch (error) {
        console.log(`MongoDB Connection failed ${error}`)
    }
}

module.exports = connectDB