// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget");

   missionTarget.innerHTML = `<h2>Mission Destination</h2> 
                                    <ol>
                                        <li>Name: ${name}</li>
                                        <li>Diameter: ${diameter}</li>
                                        <li>Star: ${star}</li>
                                        <li>Distance From Earth: ${distance}</li>
                                        <li>Number of Moons: ${moons}</li>
                                    </ol>
                                    <img src="${imageURL}"`;
    
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
        let launchReady = false;

        if (validateInput(pilot.value) === 'Empty' || validateInput(pilot.value) === "Is a Number") {
            //alert("Please enter a valid name.");
        } else if (validateInput(copilot.value) === 'Empty' || validateInput(copilot.value) === "Is a Number") {
           //alert("Please enter a valid name.");
        } else if (validateInput(fuelLevel.value) === 'Empty' || validateInput(fuelLevel.value) === 'Not a Number') {
           //alert("Please enter a valid amount of fuel.");
        } else if (validateInput(cargoLevel.value) === 'Empty' || validateInput(cargoLevel.value) === 'Not a Number') {
           //alert("Please enter a valid amount of cargo.");
        } else {
            launchReady = true;
        }
    
            
        const pilotStatus = document.getElementById('pilotStatus');
        const copilotStatus = document.getElementById('copilotStatus');
        const cargoStatus = document.getElementById('cargoStatus');
        const fuelStatus = document.getElementById('fuelStatus');
        const launchStatus = document.getElementById('launchStatus');
   
        let fuelReady = false;
        let cargoReady = false;

    if (launchReady) {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch.`;
        copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch.`;
    }


    if (launchReady && fuelLevel.value < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    } else if (launchReady && fuelLevel.value >= 10000) {
        fuelReady = true;
        fuelStatus.innerHTML = "Fuel level high enough for launch"

    }

    if (launchReady && cargoLevel.value > 10000) {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    } else if (launchReady && cargoLevel.value <= 10000){
        cargoReady = true;
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
    }

    if (fuelReady && cargoReady){
        launchStatus.innerHTML = "Shuttle is Ready for Launch"
        launchStatus.style.color = "green";
    }

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
       let planets = response.json();
        return planets;
     });  
 }
 
 function pickPlanet(planets) {
    let planet = planets[Math.floor(Math.random() * 6)];
    return planet;
 }
 


 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;