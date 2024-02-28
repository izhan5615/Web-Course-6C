const cars = ["Mercedes", "BMW", "Corolla"]
for (const car of cars) {
  console.log(car)
}

cars.forEach((car, index) => {
  console.log(car,index)
});