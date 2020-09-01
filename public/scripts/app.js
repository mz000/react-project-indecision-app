"use strict";

var app = {
    title: "Indecision app",
    subtitle: "Put your life in the hands of computer",
    options: ["one", "two"]
};

var formSubmit = function formSubmit(e) {
    e.preventDefault();

    console.log(e.type);
};

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
        "form",
        { onSubmit: formSubmit },
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
            "button",
            null,
            "Add option"
        )
    )
);

var approot = document.getElementById('app');
ReactDOM.render(template, approot);
