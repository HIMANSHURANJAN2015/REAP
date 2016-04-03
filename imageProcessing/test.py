import os,csv

def writeToCsv(data):
	with open('error.csv', 'a') as csvfile:
  		fieldnames = ['USN','Error']
  		writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
  		writer.writeheader()
  		usn = "1pi12cs102"
  		writer.writerow({'USN': data["USN"], 'Error': 'hello'})

if __name__ == '__main__':
	data = {}
	data["USN"] = "1pi12cs102"
	data["Error"] = "Hello"
	writeToCsv(data)