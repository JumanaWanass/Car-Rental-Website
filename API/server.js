const express = require('express');
const cors = require('cors');

const app = express();

// Body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// CORS
app.use(cors());


// Routers
const officeRouter = require('./routers/OfficeRouter');

app.get('/', (req, res) => {             
    res.status(200).json({hi:"welcome"});
})

// Routers
app.use('/office', officeRouter);

app.listen(5000, () => console.log(`Server running on http://localhost:5000/`));