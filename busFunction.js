const busFunction = bus => {
  let sumOfPeople = 0,
    entry = 0;
  bus.forEach((entryExit, index) => {
    entry = entryExit[0] - entryExit[1];
    sumOfPeople += entry;
  });
  if (sumOfPeople > 0) {
    return sumOfPeople;
  } else {
    return "Invalid input";
  }
};
module.exports = busFunction;
