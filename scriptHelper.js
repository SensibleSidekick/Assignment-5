// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget");

   missionTarget.innerHTML = `<h2>Mission Destination</h2> 
                                    <ol>
                                        <li>Name: ${name}</li>
                                        <li>Diameter: ${diameter}</li>
                                        <li>Star: ${star}</li>
                                        <li>Distance from Earth: ${distance}</li>
                                        <li>Number of Moons: ${moons}</li>
                                    </ol>
                                    <img src="${imageUrl}"/>`;

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
   

        if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' ||validateInput(cargoLevel) === 'Empty') {
            alert('Please enter information for all fields.');
        } else if ( validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number' || validateInput(fuelLevel) === 'Not a Number' ||validateInput(cargoLevel) === 'Not a Number') {
            alert('Please enter a valid input.');
        } else {
            let fuelReady = false;
            let cargoReady = false;
            list.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch.`;
        
        
            if (fuelLevel < 10000) {
                fuelStatus.innerHTML = 'Fuel level too low for launch';
                launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
                launchStatus.style.color = "red";
            } else if (fuelLevel >= 10000) {
                fuelReady = true;
                fuelStatus.innerHTML = 'Fuel level high enough for launch';
        
            }
        
            if (cargoLevel > 10000) {
                cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
                launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
                launchStatus.style.color = "red";
            } else if (cargoLevel <= 10000){
                cargoReady = true;
                cargoStatus.innerHTML = 'Cargo mass low enough for launch';
            }
        
            if (fuelReady && cargoReady){
                launchStatus.innerHTML = 'Shuttle is Ready for Launch';
                launchStatus.style.color = "green";
            }
        }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
     let result = await planetsReturned.json();
     return result;  
 }
 
 function pickPlanet(planets) {
    let planet = planets[Math.floor(Math.random() * planets.length)];
    return planet;
 }
 


 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;