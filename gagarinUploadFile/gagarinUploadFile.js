if (Meteor.isClient) {

    Session.setDefault('fileName', 'Nothing yet...');

    Template.hello.helpers({
        fileName: function() {
            return Session.get('fileName');
        }
    });

    Template.hello.events({
        "change input": function(event) {
            console.log("change input", event);
            Session.set('fileName', 'EVENT FIRED :-)');
        }
    });
}
