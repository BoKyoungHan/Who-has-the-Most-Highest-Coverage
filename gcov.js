var exec = require('child_process').exec;
var fs = require('fs');

var targetProgram = 'grep.c';

var gcovOptionList = ['-a', '-b', '-c'];

var gcovTest = 'gcov ' + randomGenerator(gcovOptionList) + ' ' + targetProgram;
writeText(fs, '\n'+gcovTest, 'result_gcov.txt');
gcovTest += ' >> ' + 'result_gcov.txt';
exec(gcovTest, function (err, stdout, stderr) {
    if(stdout) console.log(stdout);
    if(stderr) console.log('stderr: ' + stderr);	
    if (err !== null) {
        console.log('error: ' + err);
    }
});


//var execution = fs.readFileSync(outputFile, 'utf8');


function randomGenerator(list){
	len = list.length;
	index = index = Math.floor((Math.random() * len));
	return list[index];
}

function writeText(fs, input, outputFile){
	try{
		data = fs.readFileSync(outputFile, 'utf8');	
		data += input;
		fs.writeFileSync(outputFile, data, 'utf8');
	} catch(e){
		fs.writeFileSync(outputFile, '', 'utf8');
		data = fs.readFileSync(outputFile, 'utf8');	
		data += input;
		fs.writeFileSync(outputFile, data, 'utf8');
	}
	
}
