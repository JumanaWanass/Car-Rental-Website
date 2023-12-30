# Read me

## How to run
First you have to be in API directory then run the following commands

First time only.
```
npm install -y
```

Each time you change the code you have to restart the server
```
node --env-file .env server.js
```
=========

# Car Rental API

## Description

This is a simple API for a car rental system. It provides endpoints to interact with different entities such as cars, customers, employees, offices, and reservations.

## Prerequisites

- Node.js installed ([Download Node.js](https://nodejs.org/))
- MySQL or MariaDB installed and running
- XAMPP or similar tool for local development (optional)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JumanaWanass/Car-Rental-Website
   cd API
   ```

2. Install dependencies:

   ```bash
   npm install
   npm install dotenv express
   ```


## Database Setup

1. Create a database named `carrental` in your MySQL/MariaDB server.

2. Import the database schema from the `DDL.sql` file.

## Running the Server

```bash
node server.js
```

The server will be running at [http://localhost:5000/](http://localhost:5000/).

## Testing Endpoints

### Car Class

- Get all cars: [http://localhost:5000/car](http://localhost:5000/car)
- Get car by ID: [http://localhost:5000/car/search?attribute=carid&value=1](http://localhost:5000/car/search?attribute=carid&value=1)
- Get cars by other attributes: [http://localhost:5000/car/search?attribute=color&value=Red](http://localhost:5000/car/search?attribute=color&value=Red)

### Customer Class

- Get all customers: [http://localhost:5000/customer](http://localhost:5000/customer)
- Get customer by ID: [http://localhost:5000/customer/search?attribute=customerid&value=1](http://localhost:5000/customer/search?attribute=customerid&value=1)
- Get customers by other attributes: [http://localhost:5000/customer/search?attribute=lastname&value=Doe](http://localhost:5000/customer/search?attribute=lastname&value=Doe)

### Employee Class

- Get all employees: [http://localhost:5000/employee](http://localhost:5000/employee)
- Get employee by ID: [http://localhost:5000/employee/search?attribute=employeeid&value=1](http://localhost:5000/employee/search?attribute=employeeid&value=1)
- Get employees by other attributes: [http://localhost:5000/employee/search?attribute=lastname&value=Smith](http://localhost:5000/employee/search?attribute=lastname&value=Smith)

### Office Class

- Get all offices: [http://localhost:5000/office](http://localhost:5000/office)
- Get office by ID: [http://localhost:5000/office/1](http://localhost:5000/office/1)
- Get office by telephone: [http://localhost:5000/office/search?attribute=telephone&value=123456789](http://localhost:5000/office/search?attribute=telephone&value=123456789)

### Reservation Class

- Get all reservations: [http://localhost:5000/reservation/getAll](http://localhost:5000/reservation/getAll)
- Get reservation by ID: [http://localhost:5000/reservation/search?attribute=reservationid&value=1](http://localhost:5000/reservation/search?attribute=reservationid&value=1)
- Get reservations by other attributes: [http://localhost:5000/reservation/search?attribute=customerid&value=2](http://localhost:5000/reservation/search?attribute=customerid&value=2)

>>>>>>>>> Temporary merge branch 2
