import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

import './right.html';


Template.right.events({
	"click .userItem":function(){
		$('#chat_room').show();
	}
})