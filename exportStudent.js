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
        console.log(`NAME: ${this.name}`);
        console.log(`MATRIC NO: ${this.matricNo}`);
        console.log(`MAJORING: ${this.major}`);
    }
}

module.exports = Student;