// CODE here for your Lambda Classes
class Person
	{
		constructor(attrs)
		{
			this.name = attrs.name;
			this.age = attrs.age;
			this. location = attrs.location;
		}
		
		speak() { console.log(`Hello, my name is ${this.name}, I am from ${this.location}`); }
	}

class Instructor extends Person
	{
		constructor(attrs)
		{
			super(attrs);
			this.specialty = attrs.specialty;
			this.favLanguage = attrs.favLanguage;
			this.catchPhrase = attrs.catchPhrase;
		}

      demo(subject) { console.log(`Today we are learning about ${subject}`); }
			grade(studentObj, subject) 
      { 
        console.log(`${studentObj.name} recieves a perfect score on ${subject}`); 
      }

      submitGrade(studentObj)
      {
        let gradeSeed = Math.floor(Math.random() * 2) + 1;
        let variance = Math.random() * 10 + 1;

        if(gradeSeed % 2) { studentObj.grade -= Math.round(variance); }
        else { studentObj.grade += Math.round(variance); }
      }
	}

class Student extends Person
{
	constructor(attrs)
	{
		super(attrs);
		this.previousBackground = attrs.previousBackground;
		this.className = attrs.className;
		this.favSubjects = attrs.favSubjects;
    this.grade = attrs.grade;
	}
	
	listsSubjects()
	{
		this.favSubjects.forEach((element) => console.log(element));
	}
	
	PRAssignment(subject) 
  { 
    console.log(`${this.name} has begun sprint challenge on ${subject}`); 
  }

  getGrade() { return this.grade; }

  canGraduate()
  {
    if(this.grade > 70)
    {
      console.log(`Congratulations ${this.name} you successfully graduated with a ${this.grade}!`);
    }

    else
    {
      console.log(`Sorry ${this.name} your grade is current ${this.grade}. you will need more learning and practice before you graduate.`);
    }
  }
}

class ProjectManager extends Instructor
{
	constructor(attrs)
	{
		super(attrs);
		
		this.gradClassName = attrs.gradClassName;
		this.favInstructor = attrs.favInstructor;
	}
	
	standUp(slackChannel) { console.log(`${this.name} announces to ${slackChannel} @channel standby times!`); }
	debugsCode(studentObj, subject) { console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`); }
}

const fred = new Instructor(
{
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const doug = new Instructor(
{
  name: 'Doug',
  location: 'Los Angeles',
  age: 28,
  favLanguage: 'LESS',
  specialty: 'UX Design',
  catchPhrase: `Never create a bad looking website`,
});

const nathan = new Student(
{
  name: 'Nathan',
  location: 'Northfield',
  age: 43,
  previousBackground: 'Information Technology',
  className: 'WEBPT9',
  grade: 80,
  favSubjects: [ 'HTML', 'CSS/LESS', 'JavaScript']
});

const sam = new Student(
{
  name: 'Sam',
  location: 'Michigan City',
  age: 24,
  previousBackground: 'Healthcare',
  className: 'WEBPT10',
  grade: 70,
  favSubjects: [ 'JavaScript', 'React', 'Redux']
});

const michael = new ProjectManager(
{
  name: 'Michael',
  location: 'Chicago',
  age: 32,
  favLanguage: 'React',
  specialty: 'Front-end',
  catchPhrase: "Get your standup forms in!",
  gradClassName: 'WEBFT18',
  favInstructor: 'Pace'
});

const julie = new ProjectManager(
{
  name: 'Julie',
  location: 'Boulder',
  age: 29,
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `Who needs help most?`,
  gradClassName: 'WEBPT2',
  favInstructor: 'Doug'
});

console.log(fred);
console.log(doug);
console.log(nathan);
console.log(sam);
console.log(michael);
console.log(julie);

fred.speak();
doug.demo('JavaScript');
doug.grade(nathan, 'JavaScript');
console.log('\nNathan likes these subjects: ');
nathan.listsSubjects();
nathan.PRAssignment('CSS');
michael.standUp('#webpt9');
julie.debugsCode(sam, 'LESS');

// Stretch goal stuff
fred.submitGrade(nathan);
console.log("Nathan's grade after 1st unit: " + nathan.getGrade());
doug.submitGrade(sam);
console.log("Sam's grade after 1st unit: " + sam.getGrade());
michael.submitGrade(nathan);
console.log("Nathan's grade after 2nd unit: " + nathan.getGrade());
julie.submitGrade(sam);
console.log("Sam's grade after 2nd unit: " + sam.getGrade());

fred.submitGrade(nathan);
console.log("Nathan's grade after 3rd unit: " + nathan.getGrade());
doug.submitGrade(sam);
console.log("Sam's grade after 3rd unit: " + sam.getGrade());
michael.submitGrade(nathan);
console.log("Nathan's grade after 4th unit: " + nathan.getGrade());
julie.submitGrade(sam);
console.log("Sam's grade after 4th unit: " + sam.getGrade());
michael.submitGrade(nathan);
console.log("Nathan's grade after 5th unit: " + nathan.getGrade());
julie.submitGrade(sam);
console.log("Sam's grade after 5th unit: " + sam.getGrade());

nathan.canGraduate();
sam.canGraduate();