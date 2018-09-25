#include <fstream>
#include <iostream>
#include <cstdlib>
#include <string>

using namespace std;

string cmd = "";
const string grepOptionList[] = {"-E", "-F", "-G", "-P", "-e", "-i", "-w", "-x", "-v", "-n"};
const string patternList[] = {"if", "while", "len", "^i", "[^0-9]", ".*"};
const string gcovOptionList[] = {"-a", "-b", "-c"};

const string targetProgram = "grep.c";
const string outputFile = "result_" + targetProgram + ".txt";

string randomGenerator(string list[]);
string cmdGenerator();

int main()
{
	system("rm grep.gcda");
	// string filePath = "test.txt";

	// // write File
	// ofstream writeFile(filePath.data());
	// if( writeFile.is_open() ){
	// 	writeFile << "Hello World!\n";
	// 	writeFile << "This is C++ File Contents.\n";
	// 	writeFile.close();
	// }

	// // read File
	// ifstream openFile(filePath.data());
	// if( openFile.is_open() ){
	// 	string line;
	// 	while(getline(openFile, line)){
	// 		cout << line << endl;
	// 	}
	// 	openFile.close();
	// }

	return 0;
}



string cmdGenerator(){
	cmd = "./a.out ";
	cmd += randomGenerator(grepOptionList);
	cmd += " ";
	cmd += " ";
	cmd += targetProgram;
	cmd += "; ";

	return cmd;
}


string randomGenerator(string list[]){
	int len = sizeof(list)/sizeof(string);
	int index = (rand() * len);
	return list[index];
}
