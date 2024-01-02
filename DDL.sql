-- Creating Office Table
Create Table Office(
    officeID INT AUTO_INCREMENT PRIMARY KEY,
    telephone INT UNIQUE,
    Street VARCHAR(255),
    CountryName VARCHAR(255),
    City VARCHAR(255)
);
-- Creating Car Table
Create Table Car(
    carID INT AUTO_INCREMENT PRIMARY KEY,
    model VARCHAR(255),
    color VARCHAR(255),
    year INT,
    kilometers Float,
    seatNums INT,
    transmissionType VARCHAR(255),
    make VARCHAR(255),
    photoID VARCHAR(255) DEFAULT 'default.png',
    status VARCHAR(255) DEFAULT 'available',
    plateID INT UNIQUE,
    pricePerDay Float,
    officeID INT,
    FOREIGN KEY (officeID) REFERENCES Office(officeID)
);
-- Creating Employee Table
Create Table Employee(
    empID INT AUTO_INCREMENT PRIMARY KEY,
    ssn INT UNIQUE,
    Fname VARCHAR(255),
    Lname VARCHAR(255),
    Bdate DATE,
    street VARCHAR(255),
    CountryName VARCHAR(255),
    City VARCHAR(255),
    Email VARCHAR(255) UNIQUE,
    Password VARCHAR(255) 
);
-- Creating Customer Table
Create Table Customer(
    custID INT AUTO_INCREMENT PRIMARY KEY,
    ssn INT UNIQUE,
    Fname VARCHAR(255),
    Lname VARCHAR(255),
    Bdate DATE,
    Street VARCHAR(255),
    CountryName VARCHAR(255),
    City VARCHAR(255),
    Email VARCHAR(255) UNIQUE,
    Password VARCHAR(255)
);
-- Creating Reservation Table
Create Table Reservation(
    reserveID INT AUTO_INCREMENT PRIMARY KEY,
    country VARCHAR(255),
    paymentDate DATE,
    pickupDate DATE,
    pickupStreet VARCHAR(255),
    pickupCity VARCHAR(255),
    returnDate DATE,
    returnStreet VARCHAR(255),
    returnCity VARCHAR(255),
    carID INT,
    empID INT,
    custID INT,
    FOREIGN KEY (carID) REFERENCES Car(carID),
    FOREIGN KEY (empID) REFERENCES Employee(empID),
    FOREIGN KEY (custID) REFERENCES Customer(custID)
);
