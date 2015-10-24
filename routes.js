Router.route('/', {
    template: 'home'
});

Router.route('/newContact', {
    template: 'newContact'
});

Router.route('/locater', {
    template: 'map'
});

Router.route('/view/:_id', {
	template: 'view',
    data: function(){
        var person_id = this.params._id;
        return Contacts.findOne({ _id: person_id });
    }
});

Router.route('/edit/:_id', {
	template: 'edit',
    data: function(){
        var person_id = this.params._id;
        return Contacts.findOne({ _id: person_id });
    }
});

Router.route('/delete/:_id', {
	template: 'delete',
    data: function(){
        var person_id = this.params._id;
        Contacts.remove({ _id: person_id });
        Router.go('/');
    }
});