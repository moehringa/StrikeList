import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
    
    const gearList = new Mongo.Collection('Items');
    
    
});
