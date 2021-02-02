class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "Common school"
    }
}

const student1 = new Student(1, 'Fahim');
const student2 = new Student(2, 'Jisan');

console.log(student1, student2);