class Student {
    constructor(name, matricNo, major) {
        this.name = name;
        this.matricNo = matricNo;
        this.major = major;
    }
    
    Name = (name= this.name) =>
    `MatricNo: ${name}`;

    MatricNo = (matricNo = this.matricNo) =>
    `MatricNo: ${matricNo}`;

    Major = (major = this.major) =>
    `MatricNo: ${major}`;

    display = () => {
        console.log(`Name: ${this.name}`);
        console.log(`Matric Number: ${this.matricNo}`);
        console.log(`Major: ${this.major}`);
    }
}

module.exports = Student;
