let name = () => {
  return "Samcodeonline";
};

name(); // "Samcodeonline"

let zainUlIslam = [
  {
    name: "Zain Ul Islam",
    age: 25,
    profession: "Coorporate Trainer",
    company: "Samcodeonline",
  },
];

let zain = () => {
  setTimeout(() => {
    var output = "";
    zainUlIslam.forEach((data, index) => {
      output += `<h1>${data.name}</h1>`;
      output += `<h2>${data.age}</h2>`;
      output += `<h3>${data.profession}</h3>`;
      output += `<h4>${data.company}</h4>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};
zain(); // This will display the data after 1 second

console.log("\n");

let createData = (newdata) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      zainUlIslam.push(newdata);
      let error = false;
      if (!error) {
        resolve(newdata);
      } else {
        reject("Invalid data");
      }
    }, 2000);
  });
};

createData(
  { name: "haris", profession: "SDET", company: "Samcodeonline", age: 25 },
).then((zainUlIslam) => {
  console.log(zainUlIslam);
  zain(); // This will display the data after 2 seconds
}).catch((err) => {
  console.error(err);
}
); // This will create a new data after 2 seconds


// IIFE (Immediately Invoked Function Expression) examples
(function sam() {
  console.log("Hello, this is an IIFE function");
})();

(() => {
  console.log("Hello, this is an IIFE arrow function");
})();

((name) => {
  console.log(`Hello, this is an IIFE arrow function with parameter: ${name}`);
})("Samcodeonline");

// in order to avoid the pollution due to global variables, we can use IIFE
// (Immediately Invoked Function Expression) to create a private scope
// and avoid the pollution of the global scope
// this is useful when we want to create a module or a library
// that does not interfere with the global scope
// this is also useful when we want to create a private scope for our code
// and avoid the pollution of the global scope

// IIFE is a function that is defined and executed immediately
