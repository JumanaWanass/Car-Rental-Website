import random
from datetime import datetime, timedelta

# List of car makes and their respective models
car_options = {
    "Abarth": ["124 Spider Convertible", "500e Turismo Hatchback", "595 Competizione Convertible", "595 Turismo Convertible", "595 Turismo Hatchback"],
    "Acura": ["ILX Hybrid Sedan", "ILX Premium Sedan", "ILX Technology Plus Sedan", "ILX Tech Plus A Spec Sedan", "Integra Base Hatchback", "MDX Adv Ent Package SUV", "MDX A Spec SUV", "RDX A-Spec Package SUV", "RDX Tech SUV"],
    "Alfa Romeo": ["Giulia Sedan", "Giulia Sprint Sedan", "Giulia Veloce Sedan", "Giulietta Hatchback", "Mito Super hatchback", "Stelvio Super SUV", "Stelvio SUV", "Stelvio Ti SUV", "Tonale Veloce SUV"],
    "Aston Martin": ["Cygnet Hatchback", "DB11 Coupe", "DB11 Volante Convertible", "DB9 Coupe", "DBX Base SUV", "DBX V8 AWD SUV", "Vanquish 2+2 Coupe", "Vantage Coupe", "Virage Coupe"],
    "Audi": ["A1 Ambition Hatchback", "A1 Sportback Hatchback", "A1 Sportback S Line Hatchback", "A3 Ambition Convertible", "A3 Attraction Convertible", "A3 Premium Convertible", "Audi A4", "SQ7 Premium Plus SUV", "TT Convertible"],
    "BMW": ["X1 xLine SUV", "X1 xLine SUV", "X2 M Sport SUV", "X3 30i xLine SUV", "X3 M40i SUV", "X3 M Sport SUV", "X4 M Sport SUV", "X5 Plug-in Hybrid Base SUV", "X6 M Competition SUV", "BMW 3 Series"],
    "Buick": ["Cascada Premium Convertible", "Enclave Avenir SUV", "Encore GX Select SUV", "Encore GX Sport Touring", "Envision Avenir SUV", "LaCrosse Essence Sedan", "Regal CXL Sedan", "Regal Sport Touring Sedan", "Verano Leather Sedan"],
    "Chevrolet": ["Chevrolet Malibu", "Malibu ECO 1SA Sedan", "Spark LS Hatchback", "Sonic LT RS Hatchback", "Impala 2LT Sedan", "Equinox LT SUV", "Cruze LTZ Hatchback", "Corvette Z06 Coupe", "Corvette Stingray 3LT Coupe", "Lanos"],
    "Dodge": ["Challenger GT Coupe", "Challenger SRT Coupe", "Challenger SXT Coupe", "Charger Dub Sedan", "Charger GT Sedan"],
    "Fiat": ["500c Lounge Convertible", "500e Electric Hatchback", "500L Lounge Mini Mpv", "Panda Cross SUV", "Panda Lounge Hatchback", "Qubo Easy Mini MPV", "Tipo Easy Sedan", "Tipo Life Hatchback", "Tipo Lounge Hatchback", "Tipo SW Cross Wagon"],
    "Ford": ["F-150 XL SuperCrew Pickup", "F 150 XLT Pickup", "Fiesta Active X MHEV Hatchback", "Fiesta Sport Hatchback", "Fusion", "Focus", "Escape", "Focus ST Hatchback", "Grand C-Max Titanium Mini MPV", "Ford Mustang", "Mustang GT Coupe", "Mustang GT Premium Convertible", "S-Max ST Line Mini MPV"],
    "Honda": ["Honda Accord", "Accord EX Sedan", "Accord Hybrid Sedan", "City V Sedan", "Civic Hatchback Sport", "Civic LX Coupe", "Civic Si Coupe Si Coupe", "Civic Type-R Hatchback", "CR-V EX-L SUV", "Passport Sport SUV"],
    "Hyundai": ["Accent GLS Sedan", "Elantra GT Hatchback", "Elantra Sport Sedan", "i20 N-Performance Hatchback", "i20 Sport Hatchback", "i30 Fastback Feel Hatchback", "i30 Techno Hatchback", "Hyundai Sonata", "Hyundai Sonata SEL Plus Sedan", "Hyundai Tucson Limited SUV"],
    "Kia": ["Kia Carens Lounge Mini MPV", "Kia Carnival SX Prestige Minivan", "Kia Ceed SW More Wagon", "Kia e-Niro More SUV", "Kia Forte GT Sedan", "Kia Niro EV EX Hatchback", "Kia Niro Plug-in Hybrid Sense SUV", "Kia Optima", "Kia Optima Hybrid Sedan", "Kia Sportage GT Line SUV"],
}

country_cities = {
    "USA": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"],
    "Canada": ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Halifax"],
    "UK": ["London", "Manchester", "Birmingham", "Glasgow", "Liverpool", "Edinburgh", "Bristol", "Leeds", "Newcastle", "Sheffield"],
    "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra", "Newcastle", "Wollongong", "Hobart"],
    "Germany": ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Dusseldorf", "Dortmund", "Essen", "Leipzig"],
    "France": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille"],
    "Italy": ["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Venice", "Bari"],
    "Spain": ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Malaga", "Murcia", "Palma", "Las Palmas", "Bilbao"],
    "Japan": ["Tokyo", "Osaka", "Yokohama", "Nagoya", "Sapporo", "Fukuoka", "Kawasaki", "Kobe", "Kyoto", "Saitama"],
    "China": ["Shanghai", "Beijing", "Guangzhou", "Shenzhen", "Tianjin", "Wuhan", "Chengdu", "Hong Kong", "Hangzhou", "Nanjing"],
    "Egypt": ["Cairo", "Alexandria", "Giza", "Shubra El Kheima", "Port Said", "Suez", "Luxor", "Aswan", "Mansoura", "Tanta"]
}


male_names = ["John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles", "Christopher",
              "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul", "Andrew", "Kenneth", "George"]

female_names = ["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen",
                "Nancy", "Margaret", "Lisa", "Betty", "Dorothy", "Sandra", "Ashley", "Emily", "Kimberly", "Donna"]

# List of country names
country_names = ["USA", "Canada", "UK", "Australia", "Germany", "France", "Italy", "Spain", "Japan", "China", "Egypt"]

# Function to generate a random value from a list
def random_value(options):
    return random.choice(options)

# Function to generate a random birthdate between 18 and 80 years ago
def random_birthdate():
    today = datetime.today()
    start_date = today - timedelta(days=random.randint(18*365, 80*365))
    return start_date.strftime('%Y-%m-%d')

# Function to generate a random date in the format YYYY-MM-DD
def random_date():
    return f"{random.randint(2000, 2023)}-{random.randint(1, 12):02d}-{random.randint(1, 28):02d}"

def random_telephone():
    return random.randint(100000000, 999999999)

# Function to generate a random street name
def random_street():
    return f"{random.choice(['Maple', 'Oak', 'Pine', 'Cedar', 'Elm'])} Street"

# Function to generate random coherent sensible INSERT statements for customers
def generate_customers():
    with open("insert_dummy.sql", "a") as file:
        file.write("Customer:\n")
        for _ in range(20):  # Adjust the number of INSERT statements as needed
            is_male = random.choice([True, False])
            first_name = random_value(male_names) if is_male else random_value(female_names)
            last_name = random_value(male_names) if is_male else random_value(female_names)
            ssn = random.randint(100000000, 999999999)
            bdate = random_birthdate()
            country_name = random_value(list(country_cities.keys()))
            city = random_value(country_cities[country_name])
            street = f"{random.randint(1, 999)} {random_value(male_names)} Street"
            email = f"{first_name.lower()}.{last_name.lower()}@example.com"
            password = f"{first_name.lower()}123"

            insert_statement = f"INSERT INTO Customer (ssn, Fname, Lname, Bdate, Street, CountryName, City, Email, Password) VALUES ({ssn}, '{first_name}', '{last_name}', '{bdate}', '{street}', '{country_name}', '{city}', '{email}', '{password}');\n"
            file.write(insert_statement)

# Function to generate random coherent sensible INSERT statements for offices
def generate_offices():
    with open("insert_dummy.sql", "a") as file:
        file.write("Offices:\n")
        for _ in range(20):  # Adjust the number of INSERT statements as needed
            country_name = random_value(list(country_cities.keys()))
            city = random_value(country_cities[country_name])
            telephone = random_telephone()
            street = random_street()

            insert_statement = f"INSERT INTO Office (telephone, Street, CountryName, City) VALUES ({telephone}, '{street}', '{country_name}', '{city}');\n"
            file.write(insert_statement)

# Function to generate random coherent sensible INSERT statements
def generate_cars():
    with open("insert_dummy.sql", "a") as file:
        file.write("Car:\n")
        for _ in range(20):  # Adjust the number of INSERT statements as needed
            make = random_value(list(car_options.keys()))
            model = random_value(car_options[make])
            color = random_value(["Red", "Blue", "White", "Black", "Silver"])
            year = random.randint(2000, 2023)
            kilometers = round(random.uniform(0, 100000), 2)
            seat_nums = random.randint(2, 7)
            transmission_type = random_value(["Automatic", "Manual"])
            plate_id = random.randint(1000, 9999)
            price_per_day = round(random.uniform(20, 200), 2)
            office_id = random.randint(1, 20)  

            insert_statement = f"INSERT INTO Car (model, color, year, kilometers, seatNums, transmissionType, make, plateID, pricePerDay, officeID) VALUES ('{model}', '{color}', {year}, {kilometers}, {seat_nums}, '{transmission_type}', '{make}', {plate_id}, {price_per_day}, {office_id});\n"
            file.write(insert_statement)

def generate_employees():
    with open("insert_dummy.sql", "a") as file:
        file.write("Employees:\n")
        for _ in range(20):  # Adjust the number of INSERT statements as needed
            is_male = random.choice([True, False])
            first_name = random_value(male_names) if is_male else random_value(female_names)
            last_name = random_value(male_names) if is_male else random_value(female_names)
            ssn = random.randint(100000000, 999999999)
            bdate = random_birthdate()
            country_name = random_value(list(country_cities.keys()))
            city = random_value(country_cities[country_name])
            street = f"{random.choice(['Maple', 'Oak', 'Pine', 'Cedar', 'Elm'])} Street"
            email = f"{first_name.lower()}.{last_name.lower()}@company.com"
            password = f"{first_name.lower()}123"

            insert_statement = f"INSERT INTO Employee (ssn, Fname, Lname, Bdate, street, CountryName, City, Email, Password) VALUES ({ssn}, '{first_name}', '{last_name}', '{bdate}', '{street}', '{country_name}', '{city}', '{email}', '{password}');\n"
            file.write(insert_statement)

# call all functions
generate_customers()
generate_offices()
generate_cars()
generate_employees()






