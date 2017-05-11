import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup( () => {
  class Person {
    constructor(name = '(you forgot to enter a name, dummy!)', age = "We get it. You don't look a day over 18.") {
      this.name = name;
      this.age = age;
    }
    getGreeting() {
      return `Hi! I am ${this.name}! A ${this.age} year-old dipsh*t!`;
    }
  }

  let me = new Person();
  console.log(me.getGreeting());
});
