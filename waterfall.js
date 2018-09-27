var exec = require('child_process').exec;
var fs = require('fs');
var async = require('async');

var grepOptionList = ['-E', '-F', '-G', '-P', '-e', '-i', '-w', '-x', '-v', '-n'];
var patternList = ['if', 'while', 'len', '^i', '[^0-9]', '\.s', '.*'];
var gcovOptionList = ['-a', '-b', '-c'];
var targetProgram = 'grep.c';
var outputFile = 'result_' + targetProgram + '.txt';


fs.writeFileSync(outputFile, '', 'utf8');

var flag = null;
var cmd = '';
var gcovTest = '';


execution();


function execution(){
console.log("i");
exec('rm grep.gcda', function(err, stdout, stderr){
	flag = true;
	console.log("first");

	while(1){
		if(flag == true){
			for(let i=0; i<10; i++){
			cmd += cmdGenerator();
			}
			console.log(cmd);
			writeText(fs, cmd);
			exec(cmd, function(err, stdout, stderr){
			gcovTest = 'gcov ' + randomGenerator(gcovOptionList) + ' ' + targetProgram;
				console.log(gcovTest);
				writeText(fs, '\n'+gcovTest+'\n');
				gcovTest += ' >> ' + outputFile;
				// exec("ls", function(err, stdout, stderr){
				// 	console.log(stdout[0]);
				// });
				exec(gcovTest, function (err, stdout, stderr) {
	    			console.log("final call");
				});
			});

			flag = false;
			break;			
		}
	}
});

}







var First_func = function(){
	exec('rm grep.gcda');
	Second_func();
	
};

var Second_func = function(){
	for(let i=0; i<10; i++){
		cmd += cmdGenerator();
	}
	console.log(cmd);
	writeText(fs, cmd);
	Third_func();
};

var Third_func = function(){
	exec(cmd);
	Fourth_func();
};

var Fourth_func = function(){
	gcovTest = 'gcov ' + randomGenerator(gcovOptionList) + ' ' + targetProgram;
	console.log(gcovTest);
	writeText(fs, '\n'+gcovTest+'\n');
	Fifth_func();
};

var Fifth_func = function(){
	gcovTest += ' >> ' + outputFile;
	exec(gcovTest, function (err, stdout, stderr) {
    if(stdout) console.log(stdout);
    if(stderr) console.log('stderr: ' + stderr);	
    if (err !== null) {
        console.log('error: ' + err);
    }
	});
};





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
	index = Math.floor((Math.random() * len));
	return list[index];
}

