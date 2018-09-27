var exec = require('child_process').exec;




function myFunc(){

	exec("rm grep.gcda")
	exec("node waterfall.js");

}


setTimeout(myFunc, 1500, 'funky');