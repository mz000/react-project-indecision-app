let app = {
    title: "Indecision app",
    subtitle: "Put your life in the hands of computer",
    options: ["one", "two"]
}

const formSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value;
    if(option)
    {
        app.options.push(option)
        e.target.elements.option.value = "";
        console.log(app.options)
    } else {
        console.log("empty fields!!")
    }
    renderTemplate();
}

const resetSubmit = (e) => {
    //e.target.elements.option.value = "";
    app.options = [];
    renderTemplate();
}

const approot = document.getElementById('app');
const renderTemplate = () => {
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
            <h3>{app.options.length}</h3>
            {
                [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]
            }
            <form onSubmit={formSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>  
            </form>
            <br></br>
            
            <button onClick={resetSubmit}>Reset</button>
    
        </div>);
    
    ReactDOM.render(template, approot);
}

renderTemplate();

