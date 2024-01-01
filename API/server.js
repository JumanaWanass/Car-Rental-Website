
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path')
const session = require('express-session');

const app = express();  //we're hosting

// Body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Setup session
app.use(session({
  secret: process.env.SECRET,
  cookie: {
    sameSite: true
  },
  resave: false, // Set to false to prevent unnecessary session updates
  saveUninitialized: false // Set to false to prevent saving uninitialized sessions
}));

// CORS
app.use(cors());


// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images'); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // File naming strategy
  },
});

const imageFilter = function (req, file, cb) {
  // Get the file extension
  const fileExtension = path.extname(file.originalname).toLowerCase();

  // Check if the file type is an image with a valid extension
  if (
    file.mimetype.startsWith('image/') &&
    ['.jpg', '.jpeg', '.png', '.gif'].includes(fileExtension)
  ) {
    cb(null, true);
  } else {
    cb(new Error('File type or extension not supported!'), false);
  }
};

const upload = multer({ storage: storage, fileFilter: imageFilter, limits: {fileSize: 1024 * 1024} });

// Routers
const OfficeRouter = require('./routers/OfficeRouter');
const CarRouter = require('./routers/CarRouter');
const CustomerRouter = require('./routers/CustomerRouter');
const EmployeeRouter = require('./routers/EmployeeRouter');
const ReservationRouter = require('./routers/ReservationRouter'); 
const adminRouter = require('./routers/adminSearchRouter'); 
const reportRouter = require('./routers/reportsRouter'); 

app.get('/', (req, res) => {
  res.status(200).json({ hi: 'welcome' });
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Logout successful');
    }
  });
});


app.get('/checkSession', (req, res) => {
  const sessionExists = req.session.auth ? true : false;
  res.json({ sessionExists });
});

// Routers
app.use('/office', OfficeRouter);
app.use('/car', CarRouter(upload));
app.use('/customer', CustomerRouter);
app.use('/employee', EmployeeRouter);
app.use('/reservation', ReservationRouter); 
app.use('/admin', adminRouter); 
app.use('/report', reportRouter); 

app.listen(5000, () => console.log(`Server running on http://localhost:5000/`));


// app.get('/car/create', (req, res) => {
//   // Assuming you have attribute and value information
//   const attributes = {
//     attribute: 'color',
//     value: 'blue'
//   }});