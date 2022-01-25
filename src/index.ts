// General types
let num: number | string;
num = 2;
num = "this is something";

// Arrays
let arr = ["a", "b", "c"];
arr[0] = "1";
arr.push("2");
let boolArr: boolean[] = [true, true];

// Tuples
let myTup: [string, number] = ["this is something", 5];
myTup = ["this is not someting", 56];

// Objects
let person = {
  name: "Iswar",
  age: 19,
};

// Custom types
type stringOrNumber = string | number;
let year: stringOrNumber;
year = 1010;
year = "2077";

// Functions
let calSum: (a: number, b: number, third?: number) => number;
calSum = (first: number, second: number) => first + second;

// Interfaces
interface PersonInterface {
  name: string;
  age: number;
}
let iswar: PersonInterface = {
  name: "Iswar",
  age: 20,
};
iswar.age = 19;

// Classes
class Person implements PersonInterface {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  getName = () => {
    return this.name;
  };
}
let person1 = new Person("Iswar", 19);
person1.getName();
