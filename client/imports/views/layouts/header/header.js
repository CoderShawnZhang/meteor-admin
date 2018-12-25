import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

import './header.html';

Template.header.events({
	"click #toggle-right":function(event){
        if ($(event.target).hasClass('open')) {
            $('#sidebar-right').animate({
                "right": "-245px"
            },300);
            $(event.target).removeClass('open').addClass('closed');
        } else {
            $('#sidebar-right').animate({
                "right": "0px"
            },300);
            $(event.target).removeClass('closed').addClass('open');
        }
        // $('#sidebar-right').toggleClass('sidebar-right-open');
        // $("#toggle-right .fa").toggleClass("fa-indent fa-dedent");
	},
	"click #toggle-left":function(){
		var bodyEl = $('#main-wrapper');
        ($(window).width() > 767) ? $(bodyEl).toggleClass('sidebar-mini'): $(bodyEl).toggleClass('sidebar-opened');
	},
    "click .config-link":function(event){
        if ($(event.target).hasClass('open')) {
            $('#config').animate({
                "right": "-205px"
            }, 150);
            $(event.target).removeClass('open').addClass('closed');
        } else {
            $("#config").animate({
                "right": "0px"
            }, 150);
            $(event.target).removeClass('closed').addClass('open');
        }
    },
    "click .theme-style-wrapper":function(event){
        $('#main-wrapper').attr('class', '');
        if(!$(event.target).hasClass('theme-style-wrapper')) {
            var themeValue = $(event.target).parent('.theme-style-wrapper').data('theme');
        }else{
            var themeValue =  $(event.target).data('theme');
        }
        $('#main-wrapper').addClass(themeValue);
    }
});