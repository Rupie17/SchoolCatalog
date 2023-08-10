class Catalog {
    constructor() {
      this._schools = [];
    }
    get schools() {
      return this._schools;
    }
    addSchools(school) {
      this._schools.push(school);
    }
  }
  const schoolCatalog = new Catalog();
  
  class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
      schoolCatalog.addSchools(this);
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set numberOfStudents(students) {
      if(typeof students === 'number') {
      this._numberOfStudents = students;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
    static pickSubstituteTeacher() {
      const subArr = ['Jamal Crawford', 'Lou Williams', 'JR Smith', 'James Harden', 'Jason Terry', 'Michael Jordan'];
      let randomIndex = Math.floor(Math.random() * (subArr.length - 1));
      return subArr[randomIndex];
    }
  }
  
  class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class Middle extends School {
    constructor(name, numberOfStudents) {
      super(name, 'middle', numberOfStudents);
    }
  }
  
  class High extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  
  const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  
  lorraineHansbury.quickFacts();
  console.log(School.pickSubstituteTeacher());
  
  const alSmith = new High('Al E Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  console.log(alSmith.sportsTeams);
  
  console.log(schoolCatalog.schools);
  