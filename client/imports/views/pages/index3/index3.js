import { Template } from 'meteor/templating';
import { Messenger } from 'meteor/hausor:messenger-bootstrap';
import './index3.html';

Template.index3_template.events({
    'click .btn-info':function(){
        Messenger.deliver("your awesome message");
        // Messenger.deliver("your awesome error", "error")
    }
})