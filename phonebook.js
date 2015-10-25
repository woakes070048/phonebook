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
    'click .btn': function(event){
        event.preventDefault();
        var ContactName = $('[name="ContactName"]').val();
        var Name = $('[name="LastName"]').val();
        var number = $('[name="number"]').val();
        var email = $('[name="email"]').val();
        var long = $('[name="Longitude"]').val();
        var lat = $('[name="Latitude"]').val();
        Contacts.insert({
            name: ContactName,
            lastname: Name,
            number: number,
            email: email,
            long: long,
            lat: lat,
            createdAt: new Date()
        });
        $('[name="ContactName"]').val('');
        $('[name="LastName"]').val('');
        $('[name="email"]').val('');
        $('[name="number"]').val('');
        $('[name="Longitude"]').val('');
        $('[name="Latitude"]').val('');

        Router.go('/');
    }
  });

  Template.search.events({
    'submit form': function(event){
        event.preventDefault();
        var ContactName = $('[name="keyword"]').val();
      //  var reply = Contacts.find({"name":"Amit"});
        $('[name="ContactName"]').val('');

        Router.go('/results/'+ContactName);
    }
  });

  Template.searchFirstName.events({
    'submit form': function(event){
        event.preventDefault();
        var ContactName = $('[name="Name"]').val();
      //  var reply = Contacts.find({"name":"Amit"});
        $('[name="Name"]').val('');

        Router.go('/resulta/'+ContactName);
    }
  });

  Template.searchLastName.events({
    'submit form': function(event){
        event.preventDefault();
        var ContactName = $('[name="Name"]').val();
      //  var reply = Contacts.find({"name":"Amit"});
        $('[name="Name"]').val('');

        Router.go('/resultu/'+ContactName);
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
