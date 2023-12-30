require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();  //we're hosting

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS
app.use(cors());

// Routers
const OfficeRouter = require('./routers/OfficeRouter');
const CarRouter = require('./routers/CarRouter');
const CustomerRouter = require('./routers/CustomerRouter');
const EmployeeRouter = require('./routers/EmployeeRouter');
const ReservationRouter = require('./routers/ReservationRouter'); 

app.get('/', (req, res) => {
  res.status(200).json({ hi: 'welcome' });
});


// Routers
app.use('/office', OfficeRouter);
app.use('/car', CarRouter);
app.use('/customer', CustomerRouter);
app.use('/employee', EmployeeRouter);
app.use('/reservation', ReservationRouter); 

app.listen(5000, () => console.log(`Server running on http://localhost:5000/`));
