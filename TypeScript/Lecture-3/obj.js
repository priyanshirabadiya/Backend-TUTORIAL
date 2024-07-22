// -----------------------------objects in typescript-----------------------------
var person = {
    name: "Lk",
    age: 15,
    isstudent: true,
    address: {
        city: 'surat',
        country: 'India'
    }
};
console.log(typeof person.address.country);
console.log(person.address.country);
var person2 = {
    name: "Lk",
    age: 15,
    isstudent: true,
    address: {
        city: 'surat',
        country: 'India'
    },
    gender: "Male"
};
var person1 = {
    name: "Lk",
    age: 15,
    isstudent: true,
    address: {
        city: 'surat',
        country: 'India'
    },
    price: 20,
    qty: 2
};
var calculateTotal = function (person1) {
    var price = person1.price || 0;
    var qty = person1.qty || 0;
    return " Total is ".concat(price * qty);
};
console.log(calculateTotal(person1));
