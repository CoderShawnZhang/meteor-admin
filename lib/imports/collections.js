import { Mongo } from 'meteor/mongo';

// export const route = new Mongo.Collection('routes');
export const Message = new Mongo.Collection('messages');
export const User = new Mongo.Collection('users');
