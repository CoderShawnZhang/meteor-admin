import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
Meteor.startup(() => {
  // code to run on server at startup
  route = new Mongo.Collection('routes');
  message = new Mongo.Collection('messages');
  user = new Mongo.Collection('users');
});
