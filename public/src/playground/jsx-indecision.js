let app = {
    title: "indecision app",
    subtitle: "put your life in the hands of computer",
    options: ["one", "two"]
}

let user = {
    name:"John",
    location:"Los Angeles",
    age: 25
}
//////////////////////////
let template = (
    <div>
        <h1>Welcome to my site!</h1>
        <p>Home</p>
        <a href="https://www.google.com/">Google</a>
        <br></br><br></br>
        <a href="https://www.bing.com/">Bing</a>
        <br></br><br></br>
        {app.subtitle && <p>Title: {app.title}</p> && <p>Subtitle: {app.subtitle}</p>}
        <p>{app.options.length >0 ? "here are your options: " + app.options : "there is no option"}</p>
    </div>);

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>
    }
}

let userContent = (
    <div>
        <h2>User information:</h2>
        <p>{user.name}</p>
        {getLocation(user.location)}
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    </div>);    

const approot = document.getElementById('app');
const newapproot = document.getElementById('user');

ReactDOM.render(template, approot);
ReactDOM.render(userContent, newapproot)
