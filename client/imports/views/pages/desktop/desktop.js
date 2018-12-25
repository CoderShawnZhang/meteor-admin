import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import { ReactivityProvider } from '/client/imports/facades';
import './desktop.html';

if(Meteor.isClient){
	Template.desktop_template.helpers({
		messageList:function(){
			return ReactivityProvider.find(ReactivityProvider.types.Message);
		},
	});
	Template.desktop_template.events({
		"click #sendMessage":function(){
            ReactivityProvider.types.Message.insert({
					userId:2,
					message:new Date() + $('.txtMessage').val(),
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