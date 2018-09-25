console.log("hi");
var exec = require('child_process').exec;
var fs = require('fs');
var targetProgram = 'grep.c';
var gcovOptionList = ['-a', '-b', '-c'];

var outputFile = 'result_' + targetProgram + '.txt';
	var gcovTest = 'gcov ' + randomGenerator(gcovOptionList) + ' ' + targetProgram;
	console.log(gcovTest);
	writeText(fs, '\n'+gcovTest+'\n');
	gcovTest += ' >> ' + outputFile;
	exec(gcovTest, function (err, stdout, stderr) {
	    if(stdout) console.log(stdout);
	    if(stderr) console.log('stderr: ' + stderr);	
	    if (err !== null) {
	        console.log('error: ' + err);
	    }
	});

function writeText(fs, input){
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


function randomGenerator(list){
	len = list.length;
	index = index = Math.floor((Math.random() * len));
	return list[index];
}