const express = require('express');

const connectDB = require('./config/db');

const app = express();

//connect the database
connectDB();

//initialize middleware
app.use(express.json({ extended: false}))

app.get('/', (req, res) => res.json({ msg: 'clinic booking api'}));

//routes 
app.use('/api/patients', require('./routes/patients'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/bookings', require('./routes/bookings'));

//use port 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
console.log(`server started on port ${PORT}`));