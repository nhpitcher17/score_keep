import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup( () => {
/*  class Person {
    constructor(name = '(you forgot to enter a name, dummy!)', age = "We get it. You don't look a day over 18.") {
      this.name = name;
      this.age = age;
    }
    getGreeting() {
      return `Hi! I am ${this.name}! A ${this.age} year-old dipsh*t!`;
    }
  }

  class Employee extends Person {
    constructor(name, age, title) {
      super(name, age);
      this.title = title;
    }
    getGreeting() {
      if (this.title) {
        return super.getGreeting() + ` And ${this.title}!`;
      } else {
        return super.getGreeting();
      }

    }
    hasJob() {
      return !!this.title;
    }
  }

  let me = new Programmer('Tom', '25', 'Python');
  console.log(me.getGreeting());
*/

});
