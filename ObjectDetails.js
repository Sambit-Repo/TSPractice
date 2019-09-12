var person = {
    firstName: "Sambit",
    lastName: "Samal",
    age: 24,
    address: ["Konnena Agrahara", "MurgeshPalya", "Bangalore"],
    sayHello: function () { }
};
person.sayHello = function () {
    console.log("111  " + "Hello Cruel World" + "  111");
};
var invokePerson = function (obj) {
    console.log(obj.firstName);
    console.log(obj.lastName);
    console.log(obj.age);
    console.log("before method calling");
    obj.sayHello();
    console.log("after method calling");
    console.log(obj.address);
    console.log(console.log("A")); //first it will print A the it will print undefined
};
invokePerson(person);
invokePerson({
    firstName: "ATUL",
    lastName: "BHANDARI",
    sayHello: function () {
        console.log("hi");
    } //if in invokePerson() ,sayHello() were not there than ,for other properties if we dont mention it will not throw error.
    //but if sayHello() is there and we dont mention it then it will throw run time error.
});
