var exec = require('child_process').exec;
var fs = require('fs');


var grepOptionList = ['-E', '-F', '-G', '-P', '-e', '-i', '-w', '-x', '-v', '-n'];
var patternList = ['if', 'while', 'len', '^i', '[^0-9]', '\.s', '.*'];
var gcovOptionList = ['-a', '-b', '-c'];
var targetProgram = 'grep.c';
var outputFile = 'result_' + targetProgram + '.txt';

fs.writeFileSync(outputFile, '', 'utf8');

for(let i=0; i<1; i++){
	exec('rm grep.gcda', function(){
		var cmd = '';
		for(let i=0; i<10; i++){
			cmd += cmdGenerator();
		}
	
		writeText(fs, cmd);
		//console.log(cmd);
		exec(cmd, function(){
			var outputFile = 'result_' + targetProgram + '.txt';
			var gcovTest = 'gcov ' + randomGenerator(gcovOptionList) + ' ' + targetProgram;
			console.log(gcovTest);
			
			//writeText(fs, '\n'+gcovTest+'\n');
			data = fs.readFile(outputFile, 'utf8', function(){
				data += '\n'+gcovTest+'\n';
				fs.writeFile(outputFile, data, 'utf8', function(){
					gcovTest += ' >> ' + outputFile;
					exec(gcovTest, function (err, stdout, stderr) {
					    if(stdout) console.log(stdout);
			    		if(stderr) console.log('stderr: ' + stderr);	
			    		if (err !== null) {
			        		console.log('error: ' + err);
			    		}
					});
				});
			});	




		});

		// var child = require('child_process').fork('child.js');
		// child.on("message", function(){});
	});
}





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

function cmdGenerator(){
	cmd = './a.out ';
	cmd += randomGenerator(grepOptionList);
	cmd += ' ';
	cmd += randomGenerator(patternList);
	cmd += ' ';
	cmd += targetProgram;
	cmd += '; ';

	return cmd;
}


function randomGenerator(list){
	len = list.length;
	index = index = Math.floor((Math.random() * len));
	return list[index];
}

function preWork(){
	var cmd = '';
	for(let i=0; i<5; i++){
		cmd += cmdGenerator();
	}
	console.log(cmd);
	writeText(fs, cmd);
	exec(cmd);
	

}

function test(){	
	var cmd = '';
	for(let i=0; i<10; i++){
		cmd += cmdGenerator();
	}
	
	writeText(fs, cmd);
	console.log(cmd);
	exec(cmd);

	// var cmd = '';
	// for(let i=0; i<5; i++){
	// 	cmd += cmdGenerator();
	// }
	// console.log(cmd);
	// writeText(fs, cmd);
	// exec(cmd);

	// writeText(fs, "check point");


	//point
	var child = require('child_process').fork('child.js');
	child.on("message", function(){});


}
