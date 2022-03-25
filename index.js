
/// ARRAY Example  ////

const fruit = [
    "Apple", "Banana", "Orange", "Melon", "Mango"
];

fruit.push("Carabao", "Bolinao", "Saging"); // Adding Item

fruit.splice(3, 1); //Delete item proper way

//console.log(Array.isArray(fruit));

//console.log(fruit);



/// OBJECT Literals   ////

/*const People = {
    name: "Allan",
    age: 25,
    position: "mason",
    yearOfExp: [2005, "mandaluyong", "bacolod", "manila"],
    familyMember: {
        father: "Justin Bieber",
        tito: "Bruno Mars",
        mother: "Katty Perry"
    },

};

console.log(People.yearOfExp[]);
*/

/// OBJECT Literal Example ////

const $contacts = [
    {
        id: 10987,
        fullName: "William Sapar",
        age: 29,
        save: `phone`,
    },
    {
        id: 2345,
        fullName: "Jenny Guangco",
        age: 27,
        save: `mobile`,
    },
    {
        id: 3346,
        fullName: "Raffi Mulokc",
        age: 28,
        save: `desktop`,
    },
    {
        id: 4789,
        fullName: "Roweir Yee",
        age: 30,
        save: `cloud`,
    },
]

//console.log($contacts[1]);

// For loop  While Loop Examplee ///

// for
/*
for (let i = 0; i < 10; i++) {
    console.log(i)
}

//while

let Shopee = 0;

while (Shopee < 5) {
    console.log(`Salamat Shopee ${Shopee} tang ina nyoo!`);
    Shopee++;
};
*/


/*for (let i = 0; i < $contacts.length; i++) {
    console.log($contacts)
}  


for(let data of $contacts) {
    console.log(data)
}                     // BEST practice --- for of loop ----

for (let data of $contacts) {
    console.log(data.fullName)
};

$contacts.forEach(function (data) {
    console.log(data.age)
});
//  practice --- forEach Loop ----

const arrayFullname = $contacts.map(
    function ($contacts) {
        return $contacts.id;
    }
)
console.log(arrayFullname);  /// --- Giving the data in array-


function greet(xb,age) {
    console.log(`hello my name is ${xb} and im ${age}.`)
};

greet(`landoo`,25);
greet(`Leni Bogo!!`, 2000)


function timesEight(xx) {
    return 88 * xx;
}

let multiPly = timesEight(3);

console.log(multiPly);



function sayName($xx) {
    console.log(`Please Say name ${$xx}`);
};

sayName(`Doggg`);


function DUCK(fullName, favColor) {
    this.name = fullName,
        this.color = favColor,
        this.greet = function () {
            console.log(`My name is ${this.name} and fav. color is ${this.color}.`)
        }
}

var duke = new DUCK(`Duke`, `blue`);
duke.greet()

var jen = new DUCK(`eea`, `blink`);
jen.greet()




//--- CONDITIONAL ----///

const a = `250`;

if ( a !== 250) {
    console.log("Its true 250")
} else {
    console.log("False : Not 250")
}

*/

//>> ----- FUNCTION TYPE **** ---->>> ///

const GetSum = (a, b) =>  a % b;

console.log(GetSum(8312,123));


// ----->>> OBJECT ORIENTED PROGRAMMING / OOP ---->>

// ====>>> Constructor ====>>>

function Hente(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;


    this.getFullName = () => {
        return `${this.lastName} and ${this.firstName} my age is ${this.age}`;
    }
}



//class

class Hente1 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    kuhaFullName() {

        return `${this.firstName} ${this.lastName}`;

    }
}

// Intantiate Object

const Ferro = new Hente("Duke", `Sapar`, `29`);

const Ferro1 = new Hente("Jenny", `Guangco`, `25`);

//console.log(Ferro1.lastName)


console.log(Ferro);
console.log(Ferro1);