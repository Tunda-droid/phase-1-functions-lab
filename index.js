// Code your solution in this file!
// 1. Returns the number of blocks from Scuber HQ (on 42nd Street)
function distanceFromHqInBlocks(someValue) {
    const hq = 42;
    return Math.abs(someValue - hq); // Ensure we always return a positive number
  }
  
  // 2. Converts block distance to feet (1 block = 264 feet)
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue); // Reuse previous function
    return blocks * 264;
  }
  
  // 3. Calculates total feet travelled between any two blocks
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264; // Absolute value to avoid negative distances
  }
  
  // 4. Calculates fare price based on distance rules
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); // Get distance in feet
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot over 400
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare for long trips
    } else {
      return "cannot travel that far"; // Anything above 2500 feet is invalid
    }
  }
  