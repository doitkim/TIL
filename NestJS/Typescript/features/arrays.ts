const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexivle types
const importnatDates = [new Date(), "2030-10-10"];
importnatDates.push("2030-10-10");
importnatDates.push(new Date());
importnatDates.push(100);
