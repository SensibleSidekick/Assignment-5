// Write your JavaScript code here!
window.addEventListener("load", function() {
  
    const form = document.getElementById('launchForm');
    const list = document.getElementById('faultyItems');


    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const pilot = document.querySelector("[name=pilotName]");
        const copilot = document.querySelector("[name=copilotName]");
        const fuelLevel = document.querySelector("[name=fuelLevel]");
        const cargoLevel = document.querySelector("[name=cargoMass]");

     formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });


    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
  
 });