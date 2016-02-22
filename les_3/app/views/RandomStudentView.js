var app = app || {};

// maak hier een app.randomStudentView object
// dit object is je koppeling met je html om random studenten te kunnen laten zien
// als je op shuffle klikt, dan moet dit script dit afvangen en actie ondernemen
// om bij de model iets op te halen

app.randomStudentsView = {

    init: function(properties){
        this.properties = properties;
        this.model = this.properties.model || {};

        this.refreshElements();
        this.refreshEvents();



        this.render({
            teachers:[{firstName:"Berend"}, {firstName:"Hugo"}, {firstName:"Jelle"}]
        });

    },

    render: function(data){

        // Grab the template script
        var teachersTemplateSrc = document.querySelector("#teachers-template").innerHTML;

        // Compile the template
        var teachersTemplate = Handlebars.compile(teachersTemplateSrc);

        // Pass our data to the template
        var teachersHTML = teachersTemplate(data);

        document.querySelector(".container").innerHTML = teachersHTML;
    },

    refreshElements: function(){
        var elements = this.properties.elements || [];

        elements.forEach(function(element){
            this[element] = document.querySelector(element);
        }, this);

    },

    refreshEvents: function(){
        var events = this.properties.events || [];

        for(var key in events){
            var split = key.split(" ");
            var selector = split[0];
            var event = split[1];
            var handler = events[key];
            var element = document.querySelector(selector);

            element.addEventListener(event, this[handler].bind(this));
        };
    },

    toggleTest: function(){
        console.log("test");
        this.render({
            teachers:[{firstName:"Ingrid"}, {firstName:"Theo"}, {firstName:"Rosmerta"}]
        });
    },

    toggleSecondTest: function(){
        console.log("test2");
        this.render({
            teachers:[{firstName:"Ingrid"}, {firstName:"Theo"}, {firstName:"Rosmerta"}]
        });
    }

}