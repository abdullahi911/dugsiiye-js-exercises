const people = [
  { name: "Alice", age: 25, city: "Wonderland" },
  { name: "Bob", age: 30, city: "Builderland" },
  { name: "Charlie", age: 35, city: "Chocolate Factory" },
];

console.log("Properties and values of each person :");

for (const person of people) { 
  console.log(".....");
  for (const prop in person) {
    console.log(prop + ": " + person[prop
    ]);

  }
  

}
