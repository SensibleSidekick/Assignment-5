// Write your JavaScript code here!
window.addEventListener("load", function() {
  
    const form = document.getElementById('launchForm');
    const list = document.getElementById('faultyItems');


    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const pilot = document.querySelector('[name=pilotName]').value;
        const copilot = document.querySelector('[name=copilotName]').value;
        const fuelLevel = document.querySelector('[name=fuelLevel]').value;
        const cargoLevel = document.querySelector('[name=cargoMass]').value;

     formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });


    let listedPlanets;
    
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    });
  
 });