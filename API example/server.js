const express = require('express');
const cors = require('cors');

const app = express();

// Body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// CORS
app.use(cors());


// Routers
const router = require('./routers/Router');

app.get('/', (req, res) => {              http://localhost:5000/
    res.status(200).json({hi:"welcome"});
})

// Routers
app.use('/router', router); // http://localhost:5000/router/

app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:5000/`));