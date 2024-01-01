$(document).ready(function() {

    $("form").submit(function(e) {
      e.preventDefault();
      var formData = {};
            $(this).serializeArray().forEach(function(item) {
                formData[item.name] = item.value;
            });

      $.ajax({
        method: "GET",
        url: "http://localhost:5000/adsearch",  // Change the URL to match your server
        data: JSON.stringify(formData),  // Convert form data to JSON string
                success: function (response) {
                    console.log('Success:', response);
                },
                error: function (error) {
                    // Handle errors
                    console.log('Error:', error);
                },
      });
    });
});



// Function to dynamically update the models based on the selected make
function updateModels() {
    var selectedMake = document.getElementById("make").value;
    var modelsDropdown = document.getElementById("model");
    modelsDropdown.innerHTML = "";

    switch (selectedMake) {
        case "Abarth":
            addOption(modelsDropdown, "124 Spider Convertible ");
            addOption(modelsDropdown, "500e Turismo Hatchback ");
            addOption(modelsDropdown, "595 Competizione Convertible");
            addOption(modelsDropdown, "595 Turismo Convertible ");
            addOption(modelsDropdown, "595 Turismo Hatchback");
            break;
        case "Acura":
            addOption(modelsDropdown, "ILX Hybrid Sedan");
            addOption(modelsDropdown, "ILX Premium Sedan");
            addOption(modelsDropdown, "ILX Technology Plus Sedan");
            addOption(modelsDropdown, "ILX Tech Plus A Spec Sedan");
            addOption(modelsDropdown, "Integra Base Hatchback");
            addOption(modelsDropdown, "MDX Adv Ent Package SUV");
            addOption(modelsDropdown, "MDX A Spec SUV");
            addOption(modelsDropdown, "RDX A-Spec Package SUV");
            addOption(modelsDropdown, "RDX Tech SUV ");
            break;
        case "Alfa Romeo":
            addOption(modelsDropdown, "Giulia Sedan");
            addOption(modelsDropdown, "Giulia Sprint Sedan");
            addOption(modelsDropdown, "Giulia Veloce Sedan");
            addOption(modelsDropdown, "Giulietta Hatchback");
            addOption(modelsDropdown, "Mito Super hatchback");
            addOption(modelsDropdown, "Stelvio Super SUV");
            addOption(modelsDropdown, "Stelvio SUV");
            addOption(modelsDropdown, "Stelvio Ti SUV");
            addOption(modelsDropdown, "Tonale Veloce SUV");
            break;
        case "Aston Martin":
            addOption(modelsDropdown, "Cygnet Hatchback");
            addOption(modelsDropdown, "DB11 Coupe");
            addOption(modelsDropdown, "DB11 Volante Convertible");
            addOption(modelsDropdown, "DB9 Coupe");
            addOption(modelsDropdown, "DBX Base SUV");
            addOption(modelsDropdown, "DBX V8 AWD SUV");
            addOption(modelsDropdown, "Vanquish 2+2 Coupe");
            addOption(modelsDropdown, "Vantage Coupe");
            addOption(modelsDropdown, "Virage Coupe");
            break; 
        case "Audi":
            addOption(modelsDropdown, "A1 Ambition Hatchback");
            addOption(modelsDropdown, "A1 Sportback Hatchback");
            addOption(modelsDropdown, "A1 Sportback S Line Hatchback");
            addOption(modelsDropdown, "A3 Ambition Convertible");
            addOption(modelsDropdown, "A3 Attraction Convertible");
            addOption(modelsDropdown, "A3 Premium Convertible");
            addOption(modelsDropdown, "Audi A4");
            addOption(modelsDropdown, "SQ7 Premium Plus SUV");
            addOption(modelsDropdown, "TT Convertible");
            break;  
        case "BMW":
            addOption(modelsDropdown, "X1 xLine SUV");
            addOption(modelsDropdown, "X1 xLine SUV");
            addOption(modelsDropdown, "X2 M Sport SUV");
            addOption(modelsDropdown, "X3 30i xLine SUV");
            addOption(modelsDropdown, "X3 M40i SUV");
            addOption(modelsDropdown, "X3 M Sport SUV");
            addOption(modelsDropdown, "X4 M Sport SUV");
            addOption(modelsDropdown, "X5 Plug-in Hybrid Base SUV");
            addOption(modelsDropdown, "X6 M Competition SUV");
            addOption(modelsDropdown,"BMW 3 Series");
            break;          
        case "Buick":
            addOption(modelsDropdown, "Cascada Premium Convertible");
            addOption(modelsDropdown, "Enclave Avenir SUV");
            addOption(modelsDropdown, "Encore GX Select SUV");
            addOption(modelsDropdown, "Encore GX Sport Touring");
            addOption(modelsDropdown, "Envision Avenir SUV");
            addOption(modelsDropdown, "LaCrosse Essence Sedan");
            addOption(modelsDropdown, "Regal CXL Sedan");
            addOption(modelsDropdown, "Regal Sport Touring Sedan");
            addOption(modelsDropdown, "Verano Leather Sedan");
            break;
        case "Chevrolet":
            addOption(modelsDropdown, "Chevrolet Malibu");
            addOption(modelsDropdown, "Malibu ECO 1SA Sedan");
            addOption(modelsDropdown, "Spark LS Hatchback");
            addOption(modelsDropdown, "Sonic LT RS Hatchback");
            addOption(modelsDropdown, "Impala 2LT Sedan");
            addOption(modelsDropdown, "Equinox LT SUV");
            addOption(modelsDropdown, "Cruze LTZ Hatchback");
            addOption(modelsDropdown, "Corvette Z06 Coupe");
            addOption(modelsDropdown, "Corvette Stingray 3LT Coupe");
            addOption(modelsDropdown, "Lanos");
            break;    
        case "Dodge":
            addOption(modelsDropdown, "Challenger GT Coupe");
            addOption(modelsDropdown, "Challenger SRT Coupe");
            addOption(modelsDropdown, "Challenger SXT Coupe");
            addOption(modelsDropdown, "Charger Dub Sedan");
            addOption(modelsDropdown, "Charger GT Sedan");
            break;     
        case "Fiat":
            addOption(modelsDropdown, "500c Lounge Convertible");
            addOption(modelsDropdown, "500e Electric Hatchback");
            addOption(modelsDropdown, "500L Lounge Mini Mpv");
            addOption(modelsDropdown, "Panda Cross SUV");
            addOption(modelsDropdown, "Panda Lounge Hatchback");
            addOption(modelsDropdown, "Qubo Easy Mini MPV");
            addOption(modelsDropdown, "Tipo Easy Sedan");
            addOption(modelsDropdown, "Tipo Life Hatchback");
            addOption(modelsDropdown, "Tipo Lounge Hatchback");
            addOption(modelsDropdown,"Tipo SW Cross Wagon");
        break;
        case "Ford":
            addOption(modelsDropdown, "F-150 XL SuperCrew Pickup");
            addOption(modelsDropdown, "F 150 XLT Pickup");
            addOption(modelsDropdown, "Fiesta Active X MHEV Hatchback");
            addOption(modelsDropdown, "Fiesta Sport Hatchback");
            addOption(modelsDropdown, "Fusion");
            addOption(modelsDropdown, "Focus");
            addOption(modelsDropdown, "Escape");
            addOption(modelsDropdown, "Focus ST Hatchback");
            addOption(modelsDropdown, "Grand C-Max Titanium Mini MPV");
            addOption(modelsDropdown, "Ford Mustang");
            addOption(modelsDropdown, "Mustang GT Coupe");
            addOption(modelsDropdown, "Mustang GT Premium Convertible");
            addOption(modelsDropdown,"S-Max ST Line Mini MPV");
        break; 
        case "Honda":
            addOption(modelsDropdown, "Honda Accord");
            addOption(modelsDropdown, "Accord EX Sedan");
            addOption(modelsDropdown, "Accord Hybrid Sedan");
            addOption(modelsDropdown, "City V Sedan");
            addOption(modelsDropdown, "Civic Hatchback Sport");
            addOption(modelsDropdown, "Civic LX Coupe");
            addOption(modelsDropdown, "Civic Si Coupe Si Coupe");
            addOption(modelsDropdown, "Civic Type-R Hatchback");
            addOption(modelsDropdown, "CR-V EX-L SUV");
            addOption(modelsDropdown,"Passport Sport SUV");
        break;
        case "Hyundai":
            addOption(modelsDropdown, "Accent GLS Sedan ");
            addOption(modelsDropdown, "Elantra GT Hatchback");
            addOption(modelsDropdown, "Elantra Sport Sedan");
            addOption(modelsDropdown, "i20 N-Performance Hatchback");
            addOption(modelsDropdown, "i20 Sport Hatchback");
            addOption(modelsDropdown, "i30 Fastback Feel Hatchback");
            addOption(modelsDropdown, "i30 Techno Hatchback");
            addOption(modelsDropdown, "Hyundai Sonata");
            addOption(modelsDropdown, "Hyundai Sonata SEL Plus Sedan");
            addOption(modelsDropdown,"Hyundai Tucson Limited SUV");
        break;
        case "Kia":
            addOption(modelsDropdown, "Kia Carens Lounge Mini MPV");
            addOption(modelsDropdown, "Kia Carnival SX Prestige Minivan");
            addOption(modelsDropdown, "Kia Ceed SW More Wagon");
            addOption(modelsDropdown, "Kia e-Niro More SUV");
            addOption(modelsDropdown, "Kia Forte GT Sedan");
            addOption(modelsDropdown, "Kia Niro EV EX Hatchback");
            addOption(modelsDropdown, "Kia Niro Plug-in Hybrid Sense SUV");
            addOption(modelsDropdown, "Kia Optima");
            addOption(modelsDropdown, "Kia Optima Hybrid Sedan");
            addOption(modelsDropdown,"Kia Sportage GT Line SUV");
        break;
        case "Lamborghini":
            addOption(modelsDropdown, "Lamborghini Huracan 580 Coupe");
            addOption(modelsDropdown, "Lamborghini Huracan Coupe");
            addOption(modelsDropdown, "Lamborghini Huracan LP 610 4 Coupe");
            addOption(modelsDropdown, "Lamborghini Urus SUV");
        break;
        case "Lexus":
            addOption(modelsDropdown, "Lexus CT 200h Hybrid Hatchback ");
            addOption(modelsDropdown, "Lexus CT Executive Hatchback");
            addOption(modelsDropdown, "Lexus CT Executive Line Hatchback");
            addOption(modelsDropdown, "Lexus ES 350 F Sport Sedan");
            addOption(modelsDropdown, "Lexus GS F Sedan");
            addOption(modelsDropdown, "Lexus GX 460 SUV");
            addOption(modelsDropdown, "Lexus IS 300 Sedan");
            addOption(modelsDropdown, "Lexus IS 350C Convertible");
            addOption(modelsDropdown, "Lexus IS 350 F Sport Sedan");
            addOption(modelsDropdown,"Lexus NX 200t SUV");
        break;
        case "Mazda":
            addOption(modelsDropdown, "Mazda CX-3 Skycruise SUV");
            addOption(modelsDropdown, "Mazda CX-3 Skydrive SUV");
            addOption(modelsDropdown, "Mazda CX-5 Grand Touring 4wd SUV");
            addOption(modelsDropdown, "Mazda CX-5 Sport SUV");
            addOption(modelsDropdown, "Mazda CX-5 S Premium Plus SUV");
            addOption(modelsDropdown, "Mazda CX-9 Touring SUV");
            addOption(modelsDropdown, "Mazda Pulse Edition Hatchback");
            addOption(modelsDropdown, "Mazda Miata MX-5 Grand Touring PRHT");
            addOption(modelsDropdown, "Mazda MX-5 RF Club Targa");
            addOption(modelsDropdown,"Mazda Tribute Hybrid SUV ");
        break;
        case "Mercedes-Benz":
            addOption(modelsDropdown, "Mercedes-Benz A Class Hatchback");
            addOption(modelsDropdown, "Mercedes-Benz AMG GT 4-Door Coupe 43");
            addOption(modelsDropdown, "Mercedes-Benz AMG GT Coupe");
            addOption(modelsDropdown, "Mercedes-Benz B-Class Electric Drive-MPV");
            addOption(modelsDropdown, "Mercedes-Benz C Class 43 AMG");
            addOption(modelsDropdown, "Mercedes-Benz C-Class ANG Line Conertible");
            addOption(modelsDropdown, "Mercedes-Benz EQB 300 SUV");
            addOption(modelsDropdown, "Mercedes-Benz G-Class 550 SUV");
            addOption(modelsDropdown, "Mercedes-Benz GLA AMG 45 S SUV");
            addOption(modelsDropdown,"Mercedes-Benz GLC AMG Line SUV");
        break;
        
        case "Mini":
            addOption(modelsDropdown, "MINI Clubman John Cooper Works Wagon");
            addOption(modelsDropdown, "MINI Convertible Cooper Signature");
            addOption(modelsDropdown, "MINI Cooper 3 door Hatchback");
            addOption(modelsDropdown, "MINI Cooper 5 Door Hatchback");
            addOption(modelsDropdown, "Mini Cooper Convertible Jcw Signature");
            addOption(modelsDropdown, "MINI Cooper Hatchback");
            addOption(modelsDropdown, "MINI Cooper Paceman S SUV");
            addOption(modelsDropdown, "MINI Cooper Signature Convertible");
            addOption(modelsDropdown, "MINI Countryman Hatchback");
            addOption(modelsDropdown,"MINI Hardtop 2 Door Cooper Signature");
        break;
        case "Nissan":
            addOption(modelsDropdown, "Nissan 370Z Nismo Coupe");
            addOption(modelsDropdown, "Nissan Altima SL Sedan");
            addOption(modelsDropdown, "Nissan Ariya EV Evolve SUV");
            addOption(modelsDropdown, "Nissan Armada SE SUV");
            addOption(modelsDropdown, "Nissan Juke Acenta SUV");
            addOption(modelsDropdown, "Nissan Juke Hybrid N-Design SUV");
            addOption(modelsDropdown, "Nissan Leaf SL Electric Hatchback");
            addOption(modelsDropdown, "Nissan Maxima Platinum Sedan");
            addOption(modelsDropdown, "Nissan Maxima SV Sedan");
            addOption(modelsDropdown,"Nissan Z Performance Coupe");
        break;
        case "Subaru":
            addOption(modelsDropdown, "Subaru Ascent Limited SUV");
            addOption(modelsDropdown, "Subaru BRZ Limited Coupe");
            addOption(modelsDropdown, "Subaru BRZ Sport Premium Coupe");
            addOption(modelsDropdown, "Subaru Crosstrek Hybrid SUV");
            addOption(modelsDropdown, "Subaru Forester Luxury SUV");
            addOption(modelsDropdown, "Subaru Impreza Hatchback");
            addOption(modelsDropdown, "Subaru Legacy Premium Sedan");
            addOption(modelsDropdown, "Subaru Outback Premium SUV");
            addOption(modelsDropdown, "Subaru Outback Premium Wagon");
            addOption(modelsDropdown,"Subaru XV Crossover SUV");
        break;
        case "Tesla":
            addOption(modelsDropdown, "Tesla Model 3");
            addOption(modelsDropdown, "Tesla Model S");
            addOption(modelsDropdown, "Tesla Model Y");
            addOption(modelsDropdown, "Tesla Model z");
            addOption(modelsDropdown, "Tesla Model X");
        break;
        case "Toyota":
            addOption(modelsDropdown, "Toyota 4Runner Limited SUV");
            addOption(modelsDropdown, "Toyota 86 Coupe");
            addOption(modelsDropdown, "Toyota Auris Dynamic Hatchback");
            addOption(modelsDropdown, "Toyota Avalon XLE Sedan");
            addOption(modelsDropdown, "Toyota Camry Hybrid Sedan");
            addOption(modelsDropdown, "Toyota Camry SE Auto Sedan");
            addOption(modelsDropdown, "Toyota Camry XLE Hybrid Sedan");
            addOption(modelsDropdown, "Toyota C-HR C Show SUV");
            addOption(modelsDropdown, "Toyota Corolla Cross Dynamic SUV");
            addOption(modelsDropdown, "Toyota Corolla Premium Sedan");
        break;
        case "Volkswagen":
            addOption(modelsDropdown, "Volkswagen Atlas SE SUV");
            addOption(modelsDropdown, "Volkswagen Beetle Dune Hatchback");
            addOption(modelsDropdown, "Volkswagen Beetle S Convertible");
            addOption(modelsDropdown, "Volkswagen Cross UP Hatchback");
            addOption(modelsDropdown, "Volkswagen EOS Komfort Convertible");
            addOption(modelsDropdown, "Volkswagen Golf Alltrack Wagon");
            addOption(modelsDropdown, "Volkswagen Golf GTI Hatchback");
            addOption(modelsDropdown, "Volkswagen Golf GTI SE Hatchback");
            addOption(modelsDropdown, "Volkswagen Golf Variant R Wagon");
            addOption(modelsDropdown, "Volkswagen Jetta SE Sedan");
        break;
        
    }
}

// Helper function to add an option to a dropdown
function addOption(dropdown, value) {
    var option = document.createElement("option");
    option.text = value;
    option.value = value;
    dropdown.add(option);
}

$(document).ready(function() {


    $("form").submit(function(e) {
      e.preventDefault();
      var formData = {};
            $(this).serializeArray().forEach(function(item) {
                formData[item.name] = item.value;
            });

      $.ajax({
        method: "GET",
        url: "http://localhost:5000/search",  // Change the URL to match your server
        data: JSON.stringify(formData),  // Convert form data to JSON string
                success: function (response) {
                    console.log('Success:', response);
                },
                error: function (error) {
                    // Handle errors
                    console.log('Error:', error);
                },
      });
    });
});