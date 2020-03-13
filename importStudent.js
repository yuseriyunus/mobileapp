const Student = require('./exportStudent.js');
const readline = require('readline');
const rI = readline.createInterface(process.stdin, process.stdout);


function ask(quest) {
    return new Promise((ans) => {
      rI.question(quest, ans);
    });
}


getDetails();

  
async function getDetails() {
    name = await ask('Name? ');
    matricNo = await ask('Matric number? ');
    major = await ask('Major? ');
    let student = new Student(name, matricNo, major);
    console.log(student.display());
    process.exit();
}
