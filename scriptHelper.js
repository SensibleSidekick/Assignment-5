// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === '') {
        return 'Empty';
    } else if (isNaN(Number(testInput))) {
        return 'Not a Number';
    } else if (!isNaN(Number(testInput))) {
        return 'Is a Number';
    } 
 };
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    const pilotStatus = document.getElementById('pilotStatus');
    const copilotStatus = document.getElementById('copilotStatus');
    const cargoStatus = document.getElementById('cargoStatus');
    const fuelStatus = document.getElementById('fuelStatus');
    const launchStatus = document.getElementById('launchStatus');
   
        if (validateInput(pilot.value) === 'Empty' || validateInput(pilot.value) === "Is a Number") {
            window.alert("Please enter a valid name.");
        } else if (validateInput(copilot.value) === 'Empty' || validateInput(copilot.value) === "Is a Number") {
            window.alert("Please enter a valid name.");
        } else if (validateInput(fuelLevel.value) === 'Empty' || validateInput(fuelLevel.value) === 'Not a Number') {
            window.alert("Please enter a valid amount of fuel.");
        } else if (validateInput(cargoLevel.value) === 'Empty' || validateInput(cargoLevel.value) === 'Not a Number') {
            window.alert("Please enter a valid amount of cargo.");
        }
    

    if (validateInput(pilot) === 'Not a Number') {
        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch.`;
    }

    if (validateInput(copilot) === 'Not a Number') {
        copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch.`;
    }

    if (fuelLevel < 10000) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    }

    if (cargoLevel > 10000) {
        list.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 


 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;