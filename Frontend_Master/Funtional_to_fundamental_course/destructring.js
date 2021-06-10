let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

//destructor with using ({}={})
({name,age,education} = {
  name:"Zaw Zaw Win",
  age :21,
  education: "C.S"
})

console.log(name);