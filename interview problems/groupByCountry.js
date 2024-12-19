//2. Get the count of persons group by country in give array of persons

// [{id:1,name:"a"},{id:2,name:"b"},{id:3,name:"c"},{id:1,name:"d"},{id:3,name:"e"}]
// Expected Output: [{id:1,name:["a","d"]},{id:2,name:"b"},{id:3,name:["c","e"]}]

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

//1
const groupByCountry = (arr) => {
  let obj = {};
  for (let person of arr) {
    obj[person.address.country] = obj[person.address.country] || [];  // obj[person.address.country]  => First iteration it is undefined , fourth itration it will be [xyz]
    obj[person.address.country].push(person.name);
  }
  return obj;
};

//2
const groupByCountryy = (arr) => {
  let result = {};
  for (let person of arr) {
    let country = person.address.country;
    if (!result[country]) {
      result[country] = [];
    }
    result[country].push(person.name);
  }
  return result;
};

console.log(groupByCountry(person));

const result = groupByCountry(person);
console.log("groupByCountry======>", result); // { US: [ 'xyz', 'xyz3' ], US1: [ 'xyz1' ], US2: [ 'xyz2' ] }

// To make output like in example
// Expected Output: [{id:1,name:["a","d"]},{id:2,name:"b"},{id:3,name:["c","e"]}]
const resultArr = [];
for (let key of Object.keys(result)) {
  let obj = {};
  obj['id'] = key;
  obj['name'] = result[key];
  resultArr.push(obj);
}
console.log("Final Result>>", resultArr);



// Group an array of objects by specific properties
const groupByProperty = (arr, prop) => arr.reduce((result, obj) => (result[obj[prop]] = [...result[obj[prop]] || [], obj], result), {});
const objArr = [{ id: 1, name: 'umakant' }, { id: 2, name: 'shivraj' }, { id: 3, name: 'umakant' }]

const groupByResult = groupByProperty(objArr, 'name');
console.log("groupByResult>>>>", groupByResult);

// by CTC-OPOT candidate Mykhailo Hlaznov
const resultt= input.reduce((acc, item) => {
  const country = item.address.country;
  const currentNames = acc[country] || []
  if(!country) {
      return acc;
  }
  
  return {
      ...acc,
      [country]: [...currentNames, item.name]
  }
}, {});

console.log(resultt)