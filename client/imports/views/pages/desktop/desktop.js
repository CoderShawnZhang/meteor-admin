import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

import './desktop.html';

message = new Mongo.Collection('messages');

if(Meteor.isClient){

	Template.desktop_template.helpers({
		messageList:function(){

			return message.find();
		},
	});
	Template.desktop_template.events({
		"click #sendMessage":function(event){
				message.insert({
					userId:2,
					message:$('.txtMessage').val(),
					created_at:new Date(),
				});
		 	var div=$(".panel-body");
     		div.scrollTop(div[0].scrollHeight);
		},
		"click .close":function(){
			$("#chat_room").hide();
		}
	});
}