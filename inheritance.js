function User(name, email) {
    this.name = name;
    this.email = email;
}

User.prototype.login = function () {
    console.log(this.name + " logged in");
};


function Student(name, email, rollNo) {
    User.call(this, name, email);
    this.rollNo = rollNo;
}

Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;

Student.prototype.registerEvent = function () {
    console.log(this.name + " registered for an event");
};



function Organizer(name, email, department) {
    User.call(this, name, email);
    this.department = department;
}

Organizer.prototype = Object.create(User.prototype);
Organizer.prototype.constructor = Organizer;

Organizer.prototype.createEvent = function () {
    console.log(this.name + " created a new event");
};


const student1 = new Student("Trisha", "trisha@gmail.com", 101);
student1.login();
student1.registerEvent();

const organizer1 = new Organizer("Admin", "admin@gmail.com", "CSE");
organizer1.login();
organizer1.createEvent();
