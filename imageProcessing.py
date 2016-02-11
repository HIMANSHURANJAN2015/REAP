import sys

type1 = (sys.argv[1]) # this is the file name
usn = (sys.argv[2]) #
subjectCode = (sys.argv[3])
name=type1+usn+subjectCode+".jpeg"
#print(name);
file1=open(name,"w");