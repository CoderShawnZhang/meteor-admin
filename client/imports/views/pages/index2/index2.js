import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

import './index2.html';

Meteor.startup(function(){

	 // $("#menu1").metisMenu({
		//     collapsingClass: 'collapsing'
		//   });
  //  $("#menu1").metisMenu({
		//     toggle: true
		//   });
});


Template.index2_template.helpers({
	initializeMetisMenu:function(){
		 setTimeout(() => {
	      $("#menu1").metisMenu({
		    collapsingClass: 'collapsing'
		  });
	    }, 100);
	}
});

Template.index2_template.events({
	'click .btn-default':function(){
		
		 
	},
	'click .btn-primary':function(){
		 $("#menu1").metisMenu({
		    collapsingClass: 'collapsing'
		  });
	},
});

	// Template.index2_template.onRendered( function(){
		// console.log(1231231);
  //   $('.menu1').metisMenu({
  //     toggle: true // disable the auto collapse. Default: true.
  //   });

	// Template.sidebar.helpers({

	// initializeMetisMenu() {
	//     setTimeout(() => {
	//       const sideMenu = $('#side-menu');
	//       sideMenu.removeData('mm');
	//       sideMenu.metisMenu();
	//     }, 100);
	//   },
	// });
