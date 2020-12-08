/*
Mentor provided problem to practice "in person"
Create a function that accepts an array and a string, 
in which the array has objects representing students with keys of gpa, school, name.
The function returns an object has keys matching the string passed in and 
the value is an array of all the students that have the same value for a key.

example student array input:
const input =
[
	{
  	name: 'Aggie Bateman',
    school: 'Seattle Central',
    gpa: 4.0
  },
  {
  	name: 'Steven Smith',
    school: 'University of Washington',
    gpa: 4.0
  },
  {
  	name: 'Burt Macklin',
    school: 'Seattle Central',
    gpa: 3.8
  }
];

example descriptor string:
constr toFind = 'school';

example output:
{
  'Seattle Central': [
    { name: 'Aggie Bateman', school: 'Seattle Central', gpa: 4 },
    { name: 'Burt Macklin', school: 'Seattle Central', gpa: 3.8 }
  ],
  'University of Washington': [
    {
      name: 'Steven Smith',
      school: 'University of Washington',
      gpa: 4
    }
  ]
}
*/ 

function studentQuery(studentsArr, descriptorString){
	const descriptorOutputObj = {};
	for(let i = 0; i < studentsArr.length; i++){
  	const value = studentsArr[i][descriptorString];
    if(!value){
    	continue;
    }
    if(!descriptorOutputObj.hasOwnProperty(value)){
    	descriptorOutputObj[value] = [studentsArr[i]];
    } else {
    	descriptorOutputObj[value].push(studentsArr[i]);
    }
  }
  return descriptorOutputObj;
};