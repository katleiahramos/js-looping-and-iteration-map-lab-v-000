// Code your solution in this file.

function lowerCaseDrivers(drivers) {
    return drivers.map(function (name) {return name.toLowerCase(); })
}

function nameToAttriburtes(drivers) {
  return drivers.map( function (driver) {return Object.assign({}, {firstName: driver.split(" ")[0]  , lastNmae: })})
}
