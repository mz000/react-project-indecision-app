class App extends React.Component {
    render() {
        return (
            <div>
                <ToggleView />
            </div>
        )
    }
}

class ToggleView extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.state = {
            visibility: false,
            options: ["342q", "234423", "234234"]            
        }
    }
    
    onFormSubmit(e) {
        e.preventDefault()
        const option = e.target.elements.option.value;
        if(option) 
            {
                e.target.elements.option.value = "";
                return this.state.options.push(option);
            }      
        }

    handleToggleVisibility() { 
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? "Hide Options" : "Show Options"} 
                </button>
                {this.state.visibility && this.state.options.map((opt) => <p key={opt}>{opt}</p>)}
                <br></br>
                <h2>Add new option</h2>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option"></input>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
/* let visibility = false;

const showDetailsAction = () => {
    visibility = !visibility;

    renderBuildIn();
}

const appRoot = document.getElementById("app");
const renderBuildIn = () => {
    let renderTemplate = 
        (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showDetailsAction}>
            {
                visibility ? "Hide Options" : "Show Options"
            }
            </button>
            {visibility ? <p>this is options</p> : <p></p>}
            
            {
                // another way:
                visibility && 
                <div>
                <p>hey this is options</p>
                </div>
            }
        </div>
        );
    
    ReactDOM.render(renderTemplate, appRoot)                    
}

renderBuildIn();
 */