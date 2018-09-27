#include <fstream>
#include <iostream>
#include <cstdlib>
#include <cstring>
#include <ctime>

using namespace std;

string cmd = "";
string grepOptionList[] = {"-E", "-F", "-G", "-P", "-e", "-i", "-w", "-x", "-v", "-n"};
string patternList[] = {"if", "while", "len", "^i", "[^0-9]", ".*"};
string gcovOptionList[] = {"-a", "-b", "-c"};

string targetProgram = "grep.c";
string outputFile = "result_" + targetProgram + ".txt";

int lenOfGrepOptionList = sizeof(grepOptionList)/sizeof(string);
int lenOfPatternList = sizeof(patternList)/sizeof(string);
int lenOfGcovOptionList = sizeof(gcovOptionList)/sizeof(string);

string randomGenerator(int len, string list[]){
	
	//int len = sizeof(list)/sizeof(string);
	//cout << sizeof(list) << endl;
	int index = (rand() % len);
	return list[index];
}

string cmdGenerator(){
	string cmd = "";
	
	srand((unsigned)time(NULL));
	for(int i=0; i<10; i++){
		cmd += "./a.out ";
		cmd += randomGenerator(lenOfGrepOptionList, grepOptionList);
		cmd += " ";
		cmd += randomGenerator(lenOfPatternList, patternList);
		cmd += " ";
		cmd += targetProgram;
		cmd += "; ";	
	}
	

	return cmd;
}

/* TODO : fix indexing problem */
int main()
{
	//system("rm grep.gcda");
	
	//for(int i=0; i<10; i++){
		cmd = cmdGenerator();
	//}
	
	cout << cmd << endl;

	//system(cmd);
	FILE *fp;
	int state;

	char buff[10000];
	fp = popen(cmd, "r");
	if (fp == NULL)
	{
	perror("erro : ");
	exit(0);
	}
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





