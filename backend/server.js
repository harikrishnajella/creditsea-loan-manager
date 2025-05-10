const express = require('express');
const cors = require('cors');
require('dotenv').config()

const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const verifierRoutes = require('./routes/verifierRoutes');
const adminRoutes = require('./routes/adminRoutes')

const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/user', userRoutes)
app.use('/api/verifier', verifierRoutes)
app.use('/api/admin', adminRoutes)

app.listen(PORT, async () => {
    await connectDB()
    console.log(`Server is running at port: ${PORT}...`)
})


