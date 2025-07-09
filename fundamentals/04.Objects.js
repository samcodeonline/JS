let sum = {
    name : "sam",
    age : 25,
    profession : {
        title : "developer",
        company : "samcodeonline",
        program : {
            name : "JavaScript",
            level : "intermediate"
        }
    }
}

console.log(sum.profession.program.name); // "JavaScript"

let {profession : arbeit} = sum;

arbeit.program.name = "Python";
console.log(sum.arbeit.age); // "Python"

// console.log(...sumFunction);
