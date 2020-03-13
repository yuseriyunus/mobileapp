const Student = require('./exportStudent.js');
const readline = require('readline');
const rI = readline.createInterface(process.stdin, process.stdout);


function ask(myquestion) {
    return new Promise((userAns) => {
      rI.question(myquestion, userAns);
    });
}


getDetails();

  
async function getDetails() {
//may also use callback to iterate the 3 question
    name = await ask('What is your name? ');
    matricNo = await ask('What is your matric number? ');
    major = await ask('What is your major? ');
    let student = new Student(name, matricNo, major);
    console.log(student.display());
    process.exit();
}