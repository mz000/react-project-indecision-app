class Person {
    constructor(name = "anonymous", age = 0) 
    {
        //console.log("from person class " + name)
        this.name = name
        this.age = age
    }
    getGreeting() 
    {
        return `Hi i am ${this.name} !`
    }
    getDescription() 
    {
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, age, major) 
    {
        super(name,age)
        this.major = major
    }
    hasMajor() 
    {
        return !!this.major;
    }
    getDescription() {
        let getDescription = super.getDescription()
        
        if (this.hasMajor()) {
            getDescription += ` his major is ${this.major} !`
        }

        return getDescription;
    }
}

class Treaveler extends Person {
    constructor(name, age, homeLocation) 
    {
        super(name, age)
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let getGreeting = super.getGreeting()

        if(this.homeLocation) {
            getGreeting += ` im visiting from ${this.homeLocation} !`
        }

        return getGreeting
    }
}



const me = new Treaveler("carl", 27, "new york")
console.log(me.getGreeting())

const her = new Treaveler()
console.log(her.getGreeting())




