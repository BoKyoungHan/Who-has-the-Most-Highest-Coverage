var exec = require('child_process').exec;
var fs = require('fs');

var targetProgram = 'grep.c';
var outputFile = 'result_' + targetProgram + '.txt';

fs.writeFileSync(outputFile, '', 'utf8');




function myFunc(){

	exec("node waterfall.js");
	console.log("dd");

}


/* execution */
//setTimeout(myFunc, 1500, 'funky');
//myFunc();


var child = require('child_process').fork('waterfall.js');

child.on("message", function(){});	