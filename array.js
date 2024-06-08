/*

Обязательно заключайте определение объекта в фигурные скобки:

var cat = {
    name: "fluffy"
    };


    Отделяйте имя свойства от значения двоеточием:

    var planet = {
    diameter: 49528
    };

    Имя свойства может быть произвольной строкой, но обычно в них
    используются имена переменных:

    var widget = {
    cost$: 3.14,
    "on sale": true
    };


    Объект не может содержать два свойства с одинаковыми именами:

    var forecast = {
    highTemp: 82,
    highTemp: 56
    };


    Пары «имя/значение» свойств разделяются запятыми:

    var gadget = {
    name: "anvil",
    isHeavy: true
    };


    После значения последнего свойства запятая не ставится:

    var superhero = {
    name: "Batman",
    alias: "Caped Crusader"
    };


var cadi = {
 name: "GM Cadillac 1955",
 color: "tan",
 seats: 5,
 count: "12892 miles"
};

console.log(cadi);



var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
};

var bark;
if (dog.weight > 20) {
    bark = "WOOF WOOF";
} else {
    bark = "woof woof";
}
var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;

console.log(speak);


function getSecret(file, secretPassword) {
    file.opened = file.opened + 1;
    if (secretPassword == file.password) {
        return file.contents;
    }
    else {
        return "Invalid password! No secret for you.";
    }
}

function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret;
    }
}

var superSecretFile = {
    level: "classified",
    opened: 0,
    password: 2,
    contents: "Dr. Evel's next meeting is in Detroit."
};

var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 2);
console.log(secret);



function makeCar() {
    var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    var years = [1955, 1957, 1948, 1954, 1961];
    var colors = ["red", "blue", "tan", "yellow", "white"];
    var convertible = [true, false];

    var rand1 = Math.floor(Math.random() * makes.length);
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * years.length);
    var rand4 = Math.floor(Math.random() * colors.length);
    var rand5 = Math.floor(Math.random() * 5) + 1;
    var rand6 = Math.floor(Math.random() * 2);

    var car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        convertible: convertible[rand6],
        mileage: 0
    };
    return car;
}

function displayCar(car) {
    console.log("Your car is a " + car.year + " " + car.make + " " + car.model);
}

var carToSell = makeCar();
displayCar(carToSell);

*/

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passangers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
start: function() {
    this.started = false;
},

stop: function() {
    this.started = false;
},
drive: function() {
    if (this.started) {
        alert("Zoom zoom!")
    } else {
        alert("You need to start the engine first.");
    }
}
};
fiat.start();
fiat.drive();