import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

import './sidebar.html';
import '/client/imports/api/app.js';

if (Meteor.isClient) {
    Template.sidebar.events({
        'click .aabbcc':function (event) {
            $(event.target).parent('.nav-dropdown').addClass('active');
            $(event.target).parent('.nav-dropdown').siblings('li').removeClass('active');
            if($(event.target).next('ul').hasClass('isOpened')){
                $(event.target).next('ul').removeClass('isOpened').hide(350);
            }else {
                $(event.target).next('ul').addClass('isOpened').show(350);
                $(event.target).parent('.nav-dropdown').siblings('li').find('ul').removeClass('isOpened').hide(350);
            }
        }
    });
}

