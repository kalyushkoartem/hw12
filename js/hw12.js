const user = {
    name: "Artem",
    age: 14,
    hobby: "Swimming",
    premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const res = Object.keys(user);
for (const elem of res) {
    console.log(`${elem}: ${user[elem]}`);
    
}


const users = {
    name: "Pavlo",
    age: 67,
    location:"O.Epstaina"
}

function countProps(obj) {
    const allProps = Object.entries(obj).length;
return allProps

}
console.log(countProps(users));



const usersFind = {
    Igor: 1,
    Pavlo: 67,
    Artem: 76,
    Polina:3,
}
const entries = Object.entries(usersFind)
function findBestEmployee(employees) {
    let total = 0;
    let totalName = "";

    for (const elem of entries) {
        const name = elem[0];
        const tasks = elem[1];

        if (total < tasks) {
            total = tasks;
            totalName = name;
        }
    }

    return `${totalName}: ${total}`;
    
}
console.log(findBestEmployee(usersFind));

const usersMoney = {
    Igor: 1000,
    Pavlo: 2500,
    Artem: 1200,
    Polina:3000,
}

function countTotalSalary(employees) {
    let total = 0
    const values = Object.values(employees)

for (const elem of values) {
    total+=elem
    }
    return total

}
console.log(countTotalSalary(usersMoney));

const productsPrice = [
  { name: "Apple", price: 100 },
  { name: "Banana", price: 50 },
  { name: "Orange", price: 80 }
];



function getAllPropValues(arr, prop) {
  return arr.map(obj => obj[prop]);
}

console.log(getAllPropValues(products, "name"));


console.log(getAllPropValues(products, "price"));


const products = [
  { name: "Apple", price: 100,quantity:6, },
  { name: "Banana", price: 50,quantity:7, },
  { name: "Orange", price: 80,quantity:8,}
];

function calculateTotalPrice(allProdcuts, productName) {
    let total = 0;
    for (const elem of allProdcuts){
        if (elem.name === productName) {
    total = elem.price * elem.quantity
        }  
    }
      return total
}

console.log(calculateTotalPrice(products, "Banana"));
console.log(calculateTotalPrice(products, "Orange"));
console.log(calculateTotalPrice(products,"Apple"));
