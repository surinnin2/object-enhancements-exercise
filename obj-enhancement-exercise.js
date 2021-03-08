//Same keys and values ES2015 Version

const createInstructor = (firstName, lastName) => ({firstName, lastName})

//Computed property names ES2015 Version

const favoriteNumber = 42
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

//Object methods ES2015 Version

const instructor2 = {
    firstName: "Colt",
    sayHi() {
        return "Hi!"
    },
    sayBye() {
        return this.firstName + " says bye!"
    }
}

//createAnimal function ES2015 Version

const createAnimal = function(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise
        }
    }
}