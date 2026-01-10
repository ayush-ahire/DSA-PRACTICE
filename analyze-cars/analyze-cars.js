function analyzeCarMileage(cars) {
  const totalMilage = cars.reduce((sum, car) => sum + car.mileage, 0);
  const averageMilage = totalMilage / cars.length;

  const highestMilage = cars.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest),
    cars[0]
  );
  const lowestMilage = cars.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
    cars[0]
  );

  return {
    averageMilage,
    highestMilage,
    lowestMilage,
  };
}

const cars = [
  {
    make: "Toyota",
    model: "Corolla",
    year: 2018,
    mileage: 45000,
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2020,
    mileage: 32000,
  },
  {
    make: "Hyundai",
    model: "i20",
    year: 2019,
    mileage: 38000,
  },
  {
    make: "Maruti",
    model: "Swift",
    year: 2021,
    mileage: 25000,
  },
  {
    make: "Ford",
    model: "EcoSport",
    year: 2017,
    mileage: 60000,
  },
];

console.log(analyzeCarMileage(cars));
