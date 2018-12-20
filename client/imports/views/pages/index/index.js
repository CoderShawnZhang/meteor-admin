import { Template } from 'meteor/templating';
import './index.html';



Route = new Mongo.Collection('routes');

var t=10;
Template.index_template.helpers({
	persend:function(){
		// Route.insert({'_id':10});
		var res = Route.findOne('86HeJDwd2Wg7sAuNv');
		console.log(res);
		return res.persend;
	}
});
Template.index_template.events({
	'click .btn-default':function(){
		var res = Route.findOne('86HeJDwd2Wg7sAuNv');
		var t = res.persend+10;
		Route.update('86HeJDwd2Wg7sAuNv',{$set:{persend:t}});
	},
	'click .btn-primary':function(){
		var res = Route.findOne('86HeJDwd2Wg7sAuNv');
		var x = res.persend-10;
		Route.update('86HeJDwd2Wg7sAuNv',{$set:{persend:x}});
	}
});