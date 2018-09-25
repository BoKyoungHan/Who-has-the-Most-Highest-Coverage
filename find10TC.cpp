#include <fstream>
#include <iostream>
#include <cstdlib>
#include <cstring>

using namespace std;

string cmd = "";
string grepOptionList[] = {"-E", "-F", "-G", "-P", "-e", "-i", "-w", "-x", "-v", "-n"};
string patternList[] = {"if", "while", "len", "^i", "[^0-9]", ".*"};
string gcovOptionList[] = {"-a", "-b", "-c"};

string targetProgram = "grep.c";
string outputFile = "result_" + targetProgram + ".txt";


string randomGenerator(string list[]){
	int len = sizeof(list)/sizeof(string);
	int index = (rand() * len);
	return list[index];
}

string cmdGenerator(){
	cmd = "./a.out ";
	randomGenerator(grepOptionList);
	cmd += " ";
	cmd += " ";
	cmd += targetProgram;
	cmd += "; ";

	return cmd;
}

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





