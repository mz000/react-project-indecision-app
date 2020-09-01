let app = {
    title: "Indecision app",
    subtitle: "Put your life in the hands of computer",
    options: ["one", "two"]
}

const formSubmit = (e) => {
    e.preventDefault()

    console.log(e.type)
}

let template = (
    <div>
        <h1>Welcome to my site!</h1>
        <p>Home</p>
        {app.subtitle && <p>{app.subtitle}</p>}

        <a href="https://www.google.com/">Google</a>
        <br></br>
        <a href="https://www.bing.com/">Bing</a>
        <br></br>

        {app.subtitle && <p>Title: {app.title}</p> && <p>Subtitle: {app.subtitle}</p>}
        <p>{app.options.length >0 ? "here are your options: " + app.options : "there is no option"}</p>

        <form onSubmit={formSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
        </form>

    </div>);

    const approot = document.getElementById('app');
    ReactDOM.render(template, approot);
