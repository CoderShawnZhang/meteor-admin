import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
	action() {
		BlazeLayout.render('mainLayout', {yield:'index_template'});
	}
});

FlowRouter.route('/desktop',{
	action() {
		BlazeLayout.render('mainLayout', {yield:'desktop_template'});
	}
});

FlowRouter.route('/index', {
	action() {
		BlazeLayout.render('mainLayout', {yield:'index_template'});
	}
});

FlowRouter.route('/index1', {
	action() {
		BlazeLayout.render('mainLayout', {yield:'index1_template'});
	}
});

FlowRouter.route('/index2', {
	action() {
		BlazeLayout.render('mainLayout', {yield:'index2_template'});
	}
});

FlowRouter.route('/index3', {
    action() {
        BlazeLayout.render('mainLayout', {yield:'index3_template'});
    }
});