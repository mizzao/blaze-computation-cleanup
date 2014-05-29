B1;3201;0cif (Meteor.isClient) {
    Template.hello.greeting = function () {
	message = Session.get("greeting");
	alert("Reactive computation got " + message);
	return message;
    };

    Template.controls.events = {
	"click .random": function() {
	    Session.set("greeting", Random.id());
	},
	"click .remove": function() {
	    $(".greeting").remove();
	}
    };
	

    Meteor.startup(function() {
	Session.set("greeting", Random.id());
	UI.insert(UI.render(Template.hello), document.body);
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
