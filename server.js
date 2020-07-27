const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const app = express();

//connect the database
connectDB();

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('/', (req, res) => {
        res.sendFile(path.resolve( '/client','/build', '/index.html'))
    });
}


//initialize middleware
app.use(express.static('client/build'));
app.get('/', (req, res) => res.sendFile(path.resolve( '/client','/build', '/index.html')));

//routes 
app.use('/api/patients', require('./routes/patients'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/bookings', require('./routes/bookings'));

//port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
console.log(`server started on port ${PORT}`));

