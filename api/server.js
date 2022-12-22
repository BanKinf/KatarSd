//Imports libs
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const morgan = require('morgan');

//Import files
const db = require('./src/db/db');

//Imports Routes
const commandRoutes = require('./src/routes/command.routes');
const userRoutes = require('./src/routes/user.routes')

//App Express
const app = express();

//Middlewares
const corsOptions = {}
app.use(cors(corsOptions));
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Call Db
db();

//Call Routes
app.use('/api/command', commandRoutes)
app.use('/api/user', userRoutes)

//Open Server
const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});