import { Template } from 'meteor/templating';
import { Messenger } from 'meteor/hausor:messenger-bootstrap';

import { ReactivityProvider } from '/client/imports/facades';

import './index3.html';




Meteor.startup(function() {
    Tracker.autorun(function() {
        // console.log(ReactivityProvider.types.Message);
    });
});
Template.index3_template.events({
    'click .btn-info':function(){
        Messenger.deliver("your awesome message");
        // Messenger.deliver("your awesome error", "error")
    }
});

Template.index3_template.helpers({
    test:function(){
        console.log(2222);
        console.log(ReactivityProvider.types.Message);
        return ReactivityProvider.find(ReactivityProvider.types.Message);
    }
})
