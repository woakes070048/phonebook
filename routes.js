Router.route('/', {
    template: 'home'
});

Router.route('/home', {
    template: 'home'
});

Router.route('/newContact', {
    template: 'newContact'
});

Router.route('/results/:ContactName', {
    template: 'results',
    data: function(){
        var name = this.params.ContactName;
        var results = Contacts.findOne({name:name});
        return results;
    }
});

Router.route('/resulta/:ContactName', {
    template: 'results',
    data: function(){
        var name = this.params.ContactName;
        var results = Contacts.findOne({name:name});
        return results;
    }
});

Router.route('/resultu/:ContactName', {
    template: 'results',
    data: function(){
        var name = this.params.ContactName;
        var results = Contacts.findOne({lastname:name});
        return results;
    }
});

Router.route('/search', {
    template: 'search'
});

Router.route('/searchFirstName', {
    template: 'searchFirstName'
});

Router.route('/searchLastName', {
    template: 'searchLastName'
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