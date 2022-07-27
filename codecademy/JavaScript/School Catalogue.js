//声明学校类
class School{
    constructor(name, level, numberOfStudents){
      this._name=name;
      this._level=level;
      this._numberOfStudents=numberOfStudents;
    }
    //获取名称
    get name(){
      return this._name;
    }
    //获取年级
    get level(){
      return this._level;
    }
    //获取学生人数
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    //判断输入的学生人数类型是否为数字类型
    set numberOfStudents(newNumber){
      if (typeof newNumber==='number'){
        this._numberOfStudents=newNumber;
      } else {
        console.log ('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
    //输出描述文字
    quickFacts(){
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }
    //通过随机数抽取老师
    static pickSubstituteTeacher(substituteTeachers){
      let randomNumber=Math.floor(Math.random()*substituteTeachers.length);
      return substituteTeachers[randomNumber];
    }
  }
  
  class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy=pickupPolicy;
    }
    
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  }
  
  class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeams){
      super(name, 'high', numberOfStudents);
      this._sportsTeams=sportsTeams;
    }
    
    get sportsTeams(){
      return this._sportsTeams;
    }
  }
  
  const lorraineHansbury=new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  
  lorraineHansbury.quickFacts();
  
  const sub=School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  
  const alSmith=new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  console.log(alSmith.sportsTeams);