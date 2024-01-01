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



--more dummy data
-- Inserting dummy values into the Car table based on makes and models
INSERT INTO Car (model, color, year, kilometers, seatNums, transmissionType, make, photoID, status, plateID, pricePerDay, officeID)
VALUES
    -- Abarth
    ('124 Spider Convertible', 'Red', 2022, 8000.0, 2, 'Manual', 'Abarth', 16, 'Available', 543210, 55.0, 1),
    ('500e Turismo Hatchback', 'White', 2023, 10000.5, 4, 'Automatic', 'Abarth', 17, 'Rented', 987654, 60.0, 2),
    -- Acura
    ('ILX Hybrid Sedan', 'Blue', 2021, 12000.8, 5, 'Automatic', 'Acura', 18, 'Available', 1122353, 45.0, 3),
    ('ILX Premium Sedan', 'Silver', 2022, 15000.2, 5, 'Automatic', 'Acura', 19, 'Available', 334455, 50.0, 1),
    -- Alfa Romeo
    ('Giulia Sedan', 'Red', 2023, 8000.3, 4, 'Automatic', 'Alfa Romeo', 20, 'Rented', 5566757, 65.0, 2),
    ('Giulia Sprint Sedan', 'Black', 2022, 18000.2, 5, 'Automatic', 'Alfa Romeo', 21, 'Available', 778899, 55.0, 3);

-- Continue inserting dummy values into the Car table based on makes and models
INSERT INTO Car (model, color, year, kilometers, seatNums, transmissionType, make, photoID, status, plateID, pricePerDay, officeID)
VALUES
    -- Aston Martin
    ('Cygnet Hatchback', 'Silver', 2021, 16000.7, 2, 'Automatic', 'Aston Martin', 22, 'Available', 1122454, 48.0, 1),
    ('DB11 Coupe', 'Blue', 2020, 30000.0, 2, 'Automatic', 'Aston Martin', 23, 'Available', 3344555, 80.0, 2),
    -- Audi
    ('A1 Ambition Hatchback', 'Red', 2022, 14000.3, 5, 'Automatic', 'Audi', 24, 'Rented', 55667570, 65.0, 3),
    ('A1 Sportback Hatchback', 'Gray', 2021, 17000.8, 5, 'Automatic', 'Audi', 25, 'Available', 7788959, 60.0, 1),
    -- BMW
    ('X1 xLine SUV', 'White', 2020, 25000.9, 5, 'Automatic', 'BMW', 26, 'Available', 9900110, 52.0, 2),
    ('X2 M Sport SUV', 'Black', 2022, 15000.5, 5, 'Automatic', 'BMW', 27, 'Out of Service', 1122330, 45.0, 3),
    -- Buick
    ('Cascada Premium Convertible', 'Blue', 2023, 7000.5, 4, 'Automatic', 'Buick', 28, 'Available', 3304455, 80.0, 1),
    ('Enclave Avenir SUV', 'Green', 2022, 14000.3, 5, 'Automatic', 'Buick', 29, 'Rented', 5506677, 65.0, 2),
    -- Chevrolet
    ('Malibu', 'Gray', 2021, 17000.8, 5, 'Automatic', 'Chevrolet', 30, 'Available', 798899, 60.0, 3),
    ('Malibu ECO 1SA Sedan', 'White', 2020, 22000.4, 5, 'Automatic', 'Chevrolet', 31, 'Available', 990001, 52.0, 1),
    -- Dodge
    ('Challenger GT Coupe', 'Red', 2023, 9000.2, 5, 'Automatic', 'Dodge', 32, 'Rented', 3344551, 80.0, 2),
    ('Charger Dub Sedan', 'Black', 2021, 12000.8, 5, 'Automatic', 'Dodge', 33, 'Available', 5566177, 65.0, 3),
    -- Fiat
    ('500c Lounge Convertible', 'Blue', 2022, 14000.3, 5, 'Automatic', 'Fiat', 34, 'Out of Service', 7788099, 60.0, 1),
    ('500e Electric Hatchback', 'White', 2021, 17000.8, 5, 'Automatic', 'Fiat', 35, 'Available', 991000, 52.0, 2),
    -- Ford
    ('F-150 XL SuperCrew Pickup', 'Silver', 2020, 25000.9, 5, 'Automatic', 'Ford', 36, 'Rented', 112633, 45.0, 3),
    ('Fiesta Active X MHEV Hatchback', 'Red', 2022, 15000.5, 5, 'Automatic', 'Ford', 37, 'Available', 834455, 80.0, 1),
    -- Honda
    ('Accord', 'Gray', 2021, 17000.8, 5, 'Automatic', 'Honda', 38, 'Available', 556627, 65.0, 2),
    ('Civic Hatchback Sport', 'Blue', 2020, 22000.4, 5, 'Automatic', 'Honda', 39, 'Rented', 978899, 60.0, 3),
    -- Hyundai
    ('Accent GLS Sedan', 'Green', 2023, 10000.4, 5, 'Automatic', 'Hyundai', 40, 'Available', 998000, 52.0, 1),
    ('Elantra Sport Sedan', 'Silver', 2022, 14000.3, 5, 'Automatic', 'Hyundai', 41, 'Out of Service', 192233, 45.0, 2),
    -- Kia
    ('Ceed SW More Wagon', 'Black', 2021, 17000.8, 5, 'Automatic', 'Kia', 42, 'Available', 506677, 65.0, 3),
    ('Kia Niro Plug-in Hybrid Sense SUV', 'White', 2020, 25000.9, 5, 'Automatic', 'Kia', 43, 'Available', 7899, 60.0, 1),
    -- Lamborghini
    ('Huracan 580 Coupe', 'Red', 2023, 9000.2, 2, 'Automatic', 'Lamborghini', 44, 'Rented', 334401, 80.0, 2),
    ('Urus SUV', 'Black', 2021, 12000.8, 5, 'Automatic', 'Lamborghini', 45, 'Available', 556671, 65.0, 3),
    -- Lexus
    ('CT 200h Hybrid Hatchback', 'Gray', 2020, 30000.0, 5, 'Automatic', 'Lexus', 46, 'Available', 79299, 60.0, 1),
    ('GX 460 SUV', 'Blue', 2022, 14000.3, 5, 'Automatic', 'Lexus', 47, 'Rented', 993000, 52.0, 2),
    -- Mazda
    ('CX-3 Skycruise SUV', 'White', 2023, 10000.4, 5, 'Automatic', 'Mazda', 48, 'Available', 117233, 45.0, 3),
    ('CX-5 Sport SUV', 'Silver', 2022, 15000.5, 5, 'Automatic', 'Mazda', 49, 'Available', 334855, 80.0, 1),
    -- Mercedes-Benz
    ('A Class Hatchback', 'Black', 2021, 17000.8, 5, 'Automatic', 'Mercedes-Benz', 50, 'Rented', 556877, 65.0, 2),
    ('GLC AMG Line SUV', 'Red', 2020, 22000.4, 5, 'Automatic', 'Mercedes-Benz', 51, 'Available', 778299, 60.0, 3),
    -- Mini
    ('Clubman John Cooper Works Wagon', 'Green', 2023, 9000.2, 5, 'Automatic', 'Mini', 52, 'Available', 990000, 52.0, 1),
    ('Cooper 5 Door Hatchback', 'Blue', 2021, 12000.8, 5, 'Automatic', 'Mini', 53, 'Rented', 112000, 45.0, 2),
    -- Nissan
    ('370Z Nismo Coupe', 'Silver', 2020, 25000.9, 2, 'Manual', 'Nissan', 54, 'Available', 3374455, 80.0, 3),
    ('Leaf SL Electric Hatchback', 'White', 2022, 14000.3, 5, 'Automatic', 'Nissan', 55, 'Available', 55677, 65.0, 1),
    -- Subaru
    ('Ascent Limited SUV', 'Black', 2021, 17000.8, 5, 'Automatic', 'Subaru', 56, 'Out of Service', 7780099, 60.0, 2),
    ('BRZ Sport Premium Coupe', 'Red', 2020, 22000.4, 4, 'Manual', 'Subaru', 57, 'Available', 550000, 52.0, 3),
    -- Tesla
    ('Model 3', 'Blue', 2023, 7000.5, 5, 'Automatic', 'Tesla', 58, 'Available', 12545, 80.0, 1),
    ('Model Y', 'Gray', 2022, 14000.3, 5, 'Automatic', 'Tesla', 59, 'Rented', 577667, 65.0, 2),
    -- Toyota
    ('86 Coupe', 'White', 2021, 17000.8, 2, 'Manual', 'Toyota', 60, 'Available', 77899, 60.0, 3),
    ('Avalon XLE Sedan', 'Black', 2020, 22000.4, 5, 'Automatic', 'Toyota', 61, 'Available', 90009, 52.0, 1),
    -- Volkswagen
    ('Atlas SE SUV', 'Red', 2023, 9000.2, 5, 'Automatic', 'Volkswagen', 62, 'Rented', 1122303, 45.0, 2),
    ('Beetle Dune Hatchback', 'Green', 2021, 12000.8, 4, 'Automatic', 'Volkswagen', 63, 'Available', 3034455, 80.0, 3);
