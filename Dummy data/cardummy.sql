-- Inserting dummy values into the Car table
INSERT INTO Car (model, color, year, kilometers, seatNums, transmissionType, make, photoID, status, plateID, pricePerDay, officeID)
VALUES
    ('Toyota Camry', 'Silver', 2022, 15000.5, 5, 'Automatic', 'Toyota', 1, 'Available', 12345, 50.0, 1),
    ('Honda Accord', 'Blue', 2021, 12000.8, 5, 'Automatic', 'Honda', 2, 'Available', 67890, 45.0, 2),
    ('Ford Mustang', 'Red', 2023, 8000.3, 4, 'Manual', 'Ford', 3, 'Rented', 13579, 65.0, 3),
    ('Chevrolet Malibu', 'Black', 2022, 18000.2, 5, 'Automatic', 'Chevrolet', 4, 'Available', 24680, 55.0, 1),
    ('Nissan Altima', 'White', 2020, 25000.9, 5, 'Automatic', 'Nissan', 5, 'Out of Service', 98765, 40.0, 2),
    ('BMW 3 Series', 'Gray', 2021, 16000.7, 4, 'Automatic', 'BMW', 6, 'Available', 54321, 70.0, 3),
    ('Hyundai Sonata', 'Green', 2023, 10000.4, 5, 'Automatic', 'Hyundai', 7, 'Available', 112233, 48.0, 1), -- Unique plateID
    ('Tesla Model 3', 'Silver', 2022, 5000.1, 4, 'Automatic', 'Tesla', 8, 'Available', 33445, 80.0, 2),
    ('Mercedes-Benz C-Class', 'Black', 2021, 20000.6, 4, 'Automatic', 'Mercedes-Benz', 9, 'Rented', 55667, 75.0, 3),
    ('Audi A4', 'Blue', 2020, 30000.0, 4, 'Automatic', 'Audi', 10, 'Available', 77889, 60.0, 1),
    ('Volkswagen Passat', 'Gray', 2023, 7000.5, 5, 'Automatic', 'Volkswagen', 11, 'Available', 99000, 52.0, 2),
    ('Kia Optima', 'White', 2022, 14000.3, 5, 'Automatic', 'Kia', 12, 'Out of Service', 112244, 45.0, 3), -- Unique plateID
    ('Lexus ES', 'Red', 2021, 17000.8, 5, 'Automatic', 'Lexus', 13, 'Available', 556677, 68.0, 1), -- Unique plateID
    ('Subaru Legacy', 'Green', 2020, 22000.4, 5, 'Automatic', 'Subaru', 14, 'Available', 556678, 55.0, 2), -- Unique plateID
    ('Mazda6', 'Blue', 2023, 9000.2, 5, 'Automatic', 'Mazda', 15, 'Rented', 778890, 65.0, 3); -- Unique plateID
