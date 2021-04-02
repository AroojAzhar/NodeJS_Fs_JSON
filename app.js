const fs = require('fs');
const path = require('path');
const os = require('os');

//console.log(`Folder path : ${__dirname}`);
//console.log(`JSON File path ${path.join(__dirname , 'employees' , 'data' , 'employees.json')}`);

//Read file content
fs.readFile(path.join(__dirname , 'employees', 'data' , 'employees.json'), 'utf-8' , (err , info) => {
if(err) throw err;
let employee = JSON.parse(info);
/*console.table(employee)*/
    /*fs.writeFile(path.join(__dirname , 'customers' , 'data' , 'customers.json'), JSON.stringify(employee), 'utf-8', (err) => {
        if(err) throw err;
        console.log('Data is written to a customer.json file');
    });*/
});

//OS module example

console.log(`home Dir : ${os.homedir()} `);
console.log(`RAM Size : ${os.totalmem()}`);
console.log(`Free Memory : ${os.freemem()}`);
console.log(os.userInfo());










