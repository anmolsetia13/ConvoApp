var fs = require('fs');
console.log('Executed before file reading.');
fs.readFile('SimpleText.txt', 'utf8' ,function(error,data)
{       
    console.log(data);
});
console.log('Execution after reading');