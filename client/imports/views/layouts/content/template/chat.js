import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';
import { ReactivityProvider } from '/client/imports/facades';
import { Session } from 'meteor/session';

import './chat.html';

if(Meteor.isClient){
    Template.chat_template.helpers({
        messageList:function(){
            var uid = Session.get('chat_uid');
            console.log(uid);
            return ReactivityProvider.find(ReactivityProvider.types.Message,{userId:uid});
        },
    });
    Template.chat_template.events({
        "click #sendMessage":function(){
            ReactivityProvider.types.Message.insert({
                userId:2,
                message:new Date() + $('.txtMessage').val(),
                created_at:new Date(),
            });
            Session.set('chat_uid',2);
            var div=$(".panel-body");
            div.scrollTop(div[0].scrollHeight);
        },
        "click .close":function(){
            $("#chat_room").hide();
        }
    });

}