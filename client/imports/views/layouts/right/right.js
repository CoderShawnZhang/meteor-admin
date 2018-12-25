import { Template } from 'meteor/templating';
import { ReactivityProvider } from '/client/imports/facades';
import { $ } from 'meteor/jquery';
import { Session } from 'meteor/session';

import './right.html';

Template.right.onRendered(function(){
    var t = ReactivityProvider.find(ReactivityProvider.types.User);
    if(t.length = 0){
        ReactivityProvider.insert(ReactivityProvider.types.User,{id:1, avatar:'/img/avatar3.png', nickName:'系统管理员'});
        ReactivityProvider.insert(ReactivityProvider.types.User,{id:2, avatar:'/img/avatar1.png', nickName:'财务管理员'});
        ReactivityProvider.insert(ReactivityProvider.types.User,{id:3, avatar:'/img/avatar2.png', nickName:'接单员'});
        ReactivityProvider.insert(ReactivityProvider.types.User,{id:4, avatar:'/img/avatar4.jpg', nickName:'仓库管理员'});
        ReactivityProvider.insert(ReactivityProvider.types.User,{id:5, avatar:'/img/avatar5.png', nickName:'物流管理员'});
        ReactivityProvider.insert(ReactivityProvider.types.User,{id:6, avatar:'/img/avatar6.png', nickName:'订单管理员'});
        ReactivityProvider.insert(ReactivityProvider.types.User,{id:7, avatar:'/img/avatar7.png', nickName:'物料管理员'});
        ReactivityProvider.insert(ReactivityProvider.types.User,{id:8, avatar:'/img/avatar8.png', nickName:'售后管理员'});
        ReactivityProvider.insert(ReactivityProvider.types.User,{id:9, avatar:'/img/avatar9.png', nickName:'门店负责人'});
        ReactivityProvider.insert(ReactivityProvider.types.User,{id:10, avatar:'/img/avatar4.jpg', nickName:'采购管理员'});
    }
});

Template.right.events({
	"click .userItem":function(event){
		var src = $(event.target).parents('li').find('img').attr('src');
		var name = $(event.target).parents('li').find('.name').html();
		var uid = $(event.target).parents('li').find('.uid').val();
        Session.set('chat_uid',uid);
        $('#chat_room').find('img').attr('src',src);
        $('#chat_room').find('.panel-title').html(name);
		$('#chat_room').show();
	}
});
Template.right.helpers({
	userList:function(){
		return ReactivityProvider.find(ReactivityProvider.types.User);
	}
});