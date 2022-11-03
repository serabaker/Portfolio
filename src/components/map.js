// maps can have anything as keys

// const saturday = new Map();

// saturday.set(8, "walk the dogs");
// saturday.set(12, "lunch");
// saturday.set(3, "watch a movie");

// const saturdayEntires = saturday.entries();
// saturdayEntires.next();
// saturdayEntires.next();
// const thirdEntry = saturdayEntires.next().value;
// console.log(thirdEntry);

// saturday.forEach((v, k) => {
//   if (k == 12) {
//     console.log(`Its time for ${v}`);
//   }
// });

// const saturdayKeys = saturday.keys();
// const firstKey = saturdayKeys.next().value;
// console.log("the first key in our saturday map is", firstKey);

// const saturdayValues = saturday.values();
// saturdayValues.next();
// const secondValue = saturdayValues.next().value;
// console.log("The 2nd values in our map is", secondValue);

// console.log(saturday);
// const noon = saturday.get(12);
// console.log("what am I doing next weekend at noon =>", noon);

// const hasFour = saturday.has(4);
// console.log("does our mao have four", hasFour);
// const hasEight = saturday.has(8);
// console.log("does our map have 8 ", hasEight);

// const saturdaySize = saturday.size;
// console.log(
//   "Did my key-value pair successfully delete - 3",
//   saturday.delete(3)
// );

// console.log(
//   "Did my key-value pair successfully clear - 12",
//   saturday.delete(10)
// );
// saturday.clear();
// console.log(saturday.size, "saturdy size");

// const greatestMovies = new Map();

// greatestMovies.set(2020, "Parasite");
// greatestMovies.set(2019, "Green Book");
// greatestMovies.set(2018, "The Shape of Water");
// greatestMovies.set(2017, "Moonlight");
// greatestMovies.set(2016, "Spotlight");
// greatestMovies.set(2015, "BirdMan");
// greatestMovies.set(2014, "12 Years a Slave");
// greatestMovies.set(2013, "Argo");

// const getBestPic = greatestMovies.get(2015);
// console.log(getBestPic);

// const has2010 = greatestMovies.has(2010);
// console.log(has2010);

// const has2018 = greatestMovies.has(2018);
// console.log(has2018);

// const getSize = greatestMovies.size;
// console.log(getSize);

// const greatesdKey = greatestMovies.keys();
// greatesdKey.next();
// const secondKey = greatesdKey.next().value;
// console.log(`The second key is ${secondKey}`);

// const thirdValue = greatestMovies.values();
// thirdValue.next();
// thirdValue.next();
// const thirdOne = thirdValue.next().value;
// console.log(`This third value os ${thirdOne}`);

// const firstEntry = greatestMovies.entries();
// const thisEntry = firstEntry.next().value;
// console.log(`The first entry is ${thisEntry}`);

// greatestMovies.forEach((val, key) => {
//   if (key < 2017) {
//     console.log(` ${val}`);
//   }
// });

// greatestMovies.delete(2013);

// greatestMovies.clear();
// console.log(greatestMovies.size);

const newYork = {city: "New York",};
const nola = {city: "nola"}
const chicago = {city: "chicago"}
const losAngles = {city: "los Angles"}

newYork.set(1: "newYork");