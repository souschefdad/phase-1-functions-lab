// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
         let distanceInBlocks = someValue - 42
         return distanceInBlocks
    } else {
        let distanceInBlocks = 42 - someValue
        return distanceInBlocks
    }
   
  }


function distanceFromHqInFeet(someValue) {
    let distanceInFeet = 264 * distanceFromHqInBlocks(someValue);
    return distanceInFeet;
  }


function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        let travelledInFeet = 264 * (start - destination)
        return travelledInFeet
    } else {
        let travelledInFeet = 264 * (destination - start)
        return travelledInFeet
    }

  }


function calculatesFarePrice (start, destination) {
    let centsPerFeet = (distanceTravelledInFeet(start, destination) - 400) * 0.02
      if (distanceTravelledInFeet(start, destination) <= 400) {
        return centsPerFeet * 0
      } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far'
      } else if (distanceTravelledInFeet(start, destination) > 2000) {
        return 25
      } else if (distanceTravelledInFeet(start, destination) <= 2000) {
        return  centsPerFeet 
      } else {
        return 'not valid points'
      }
    }
