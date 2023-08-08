//2.   Get the count of persons group by country in give array of persons

// [{id:1,name:"a"},{id:2,name:"b"},{id:3,name:"c"},{id:1,name:"d"},{id:3,name:"e"}]
// Expected Output: [{id:1,name:["a","d"]},{id:2,name:"b"},{id:3,name:["c","e"]}

var person = [
  {
    name: "xyz",
    address: {
      state: "TX",
      country: "US",
    },
  },
  {
    name: "xyz1",
    address: {
      state: "TX",
      country: "US1",
    },
  },
  {
    name: "xyz2",
    address: {
      state: "TX",
      country: "US2",
    },
  },
  {
    name: "xyz3",
    address: {
      state: "TX",
      country: "US",
    },
  },
];

const groupByCountry = (arr) => {
  let obj = {};
  for (let person of arr) {
    obj[person.address.country] = obj[person.address.country] || [];  // obj[person.address.country]  => First iteration it is undefined , fourth itration it will be [xyz]
    obj[person.address.country].push(person.name);
  }
  return obj;
};

console.log("groupByCountry======>", groupByCountry(person));


//Debug code
// console.log("obj[person.address.country] Before ==>", obj[person.address.country]);
// obj[person.address.country] = obj[person.address.country] || [];
// console.log("obj[person.address.country] After ==>", obj[person.address.country]);
// obj[person.address.country].push(person.name);