// -----------------------------objects in typescript-----------------------------

const person : {
    name : string;
    age : number;
    isstudent : boolean;
    address:{city:string; country:string};
    
}
=
{
    name : "Lk" ,
    age : 15 ,
    isstudent : true,
    address : {
        city : 'surat' ,
        country : 'India'
    }
}

console.log( typeof person.address.country);
console.log(person.address.country);

// This is not possible when you add same multiple data at that time you can use this 


type Person = {
    name : string;
    age : number;
    isstudent : boolean;
    address:{city:string; country:string};
    gender ?: string;
    price ?: number;
    qty ?: number;
}



const person2 : Person =
{
    name : "Lk" ,
    age : 15 ,
    isstudent : true,
    address : {
        city : 'surat' ,
        country : 'India'
    },
    gender : "Male"
}



const person1 : Person = {
    name : "Lk" ,
    age : 15 ,
    isstudent : true,
    address : {
        city : 'surat' ,
        country : 'India'
    },
    price : 20,
    qty : 2
}


const calculateTotal = (person1 : Person) => {
    const price = person1.price || 0;
    const qty = person1.qty || 0;
    return ` Total is ${price *qty }`;
}

console.log(calculateTotal(person1));

