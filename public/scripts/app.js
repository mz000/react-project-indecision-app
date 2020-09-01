"use strict";

var app = {
    title: "Indecision app",
    subtitle: "Put your life in the hands of computer",
    options: ["one", "two"]
};

var formSubmit = function formSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        console.log(app.options);
    } else {
        console.log("empty fields!!");
    }
    renderTemplate();
};

var resetSubmit = function resetSubmit(e) {
    //e.target.elements.option.value = "";
    app.options = [];
    renderTemplate();
};

var approot = document.getElementById('app');
var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Welcome to my site!"
        ),
        React.createElement(
            "p",
            null,
            "Home"
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "a",
            { href: "https://www.google.com/" },
            "Google"
        ),
        React.createElement("br", null),
        React.createElement(
            "a",
            { href: "https://www.bing.com/" },
            "Bing"
        ),
        React.createElement("br", null),
        app.subtitle && React.createElement(
            "p",
            null,
            "Title: ",
            app.title
        ) && React.createElement(
            "p",
            null,
            "Subtitle: ",
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "here are your options: " + app.options : "there is no option"
        ),
        React.createElement(
            "h3",
            null,
            app.options.length
        ),
        [React.createElement(
            "p",
            { key: "1" },
            "a"
        ), React.createElement(
            "p",
            { key: "2" },
            "b"
        ), React.createElement(
            "p",
            { key: "3" },
            "c"
        )],
        React.createElement(
            "form",
            { onSubmit: formSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add option"
            )
        ),
        React.createElement("br", null),
        React.createElement(
            "button",
            { onClick: resetSubmit },
            "Reset"
        )
    );

    ReactDOM.render(template, approot);
};

renderTemplate();
