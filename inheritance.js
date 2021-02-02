class School {
    constructor() {
        this.schoolName = "Noakhali Zilla School";
    }
}

class Student extends School {
    constructor(name) {
        super();
        this.name = name;
    }

    getDetails() {
        return this.name + " " + this.schoolName;
    }
}

const student1 = new Student('Fahim');
const student2 = new Student('Nahin');
console.log(student1.getDetails(), student2);