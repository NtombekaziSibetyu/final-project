const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const app = express();

//connect the database
connectDB();

//app.use(express.json({ extended: false }));
//app.get('/', (req, res) => res.json({ msg: 'clinic API'}));
app.use(express.json({ extended : false }))
app.get('/',(req, res) => res.json({ msg: 'clinic API'}))

//routes 
app.use('/api/patients', require('./routes/patients'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/bookings', require('./routes/bookings'));

//use port 
const PORT = process.env.PORT || 5000;

//for deployment
if( process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(PORT, () =>
console.log(`server started on port ${PORT}`));

