class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const appna = new Teacher("appna", "sonu@teacher.com", "123")

appna.logMe()
const javascript = new User("javaScript")

javascript.logMe()

console.log(appna instanceof User);