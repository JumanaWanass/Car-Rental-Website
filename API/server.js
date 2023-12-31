const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const session = require('express-session');

const app = express();  //we're hosting

// Body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Setup session
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie:{
    httpOnly:true
  }
}));


app.use(cors({
  optionsSuccessStatus: 200,
  credentials: true,
}))

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


// Routers
app.use('/office', OfficeRouter);
app.use('/car', CarRouter(upload));
app.use('/customer', CustomerRouter);
app.use('/employee', EmployeeRouter);
app.use('/reservation', ReservationRouter); 
app.use('/admin', adminRouter); 
app.use('/report', reportRouter); 

app.get('/logout', (req, res) => {
  req.session.auth = false;
  req.session.userID = null;
  req.session.admin = false;
  res.clearCookie('sessionId');
  res.status(200).json({message:"Logout"})
});

app.get('/checkSession', (req, res) => {
  const sessionExists = req.session.auth ? true : false;
  res.status(200).json({ sessionExists });
});

app.listen(5000, () => console.log(`Server running on http://localhost:5000/`));


