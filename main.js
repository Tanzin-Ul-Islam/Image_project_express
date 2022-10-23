const express = require('express');
const Connetction = require('./DB/db');
require('dotenv').config();
const cors = require('cors');
//import routes
const imageRoutes = require('./src/routes/image-routes');
const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.use(express.static('public'));
//routes and path
app.use('/api/image', imageRoutes);
app.listen(process.env.PORT, () => {
    console.log('Server running on port: ' + process.env.PORT);
});
Connetction();