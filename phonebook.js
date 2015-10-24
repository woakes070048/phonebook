Contacts = new Meteor.Collection('contacts');

if (Meteor.isClient) {
  Template.contacts.helpers({
      'contact': function(){
          return Contacts.find();
      }
  });

  Meteor.startup(function() {  
    GoogleMaps.load();
  });

  Template.map.helpers({  
    mapOptions: function() {
      if (GoogleMaps.loaded()) {
        return {
          center: new google.maps.LatLng(-37.8136, 144.9631),
          zoom: 8
        };
      }
    }
  });

  Template.addContact.events({
    'submit form': function(event){
        event.preventDefault();
        var ContactName = $('[name="ContactName"]').val();
        Contacts.insert({
            name: ContactName,
            createdAt: new Date()
        });
        $('[name="ContactName"]').val('');

        Router.go('/');
    }
  });

  Template.edit.events({
    'submit form': function(event){
        event.preventDefault();
        var ContactName = $('[name="ContactName"]').val();
        console.log(this._id);

        Contacts.update({_id : this._id}, {$set: {name: ContactName}});

        $('[name="ContactName"]').val('');

        Router.go('/');
    }
  });
}

if (Meteor.isServer) {

}
