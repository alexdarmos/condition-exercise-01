
//heating/cooling exercise, checks actualTemp with desireTemp
// let actualTemp = prompt("What is the current temperature inside?");
// let desiredTemp = prompt("What is your desired temperature");
//
// if (actualTemp < desiredTemp) {
//   console.log("Run Heat");
// } else if (actualTemp > desiredTemp) {
//   console.log("Run A/C");
// } else {
//   console.log("Standby");
// }



//extended challenge
let tempCelsius = parseInt(prompt("Choose a temperature (will be in Celsius)"));
let targetUnit = prompt("Choose C, F, or K to convert temperature unit.");

switch (targetUnit) {
  case "K":
    console.log(tempCelsius + 273.15);
    break;
  case "F":
    console.log((tempCelsius * (9/5)) + 32);
    break;
  default:
    console.log(tempCelsius);
}
