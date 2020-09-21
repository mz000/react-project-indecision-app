class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        let json = localStorage.getItem('options')
        let storedOptions = JSON.parse(json)
        this.setState(() => {
            return {
                options: storedOptions
            }
        })
    }
    componentDidUpdate(){
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options', json)
    }













    handleDeleteOption(option) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((opt) => {option !== opt})
            }
        })
    }
    handleDeleteOptions() {
        this.setState( () => ({options: []}))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        alert(option)
    }
    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item'
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exist'
        }
        this.setState((prevState) => {
           return {
                options: prevState.options.concat([option])
           }
        })
    }
    render() {
        const title = "Indecision"
        const subtitle = "Put your life in the hands of computer"
        return (
            <div>
                <Header title={title} subtitle={subtitle} />            
                <Actions hasOption={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption ={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

const Actions = (props) => {
    return (
        <div>
            <button disabled={!props.hasOption} onClick={props.handlePick}>Random Pickup</button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            {
                props.options.map((opt) => <Option key={opt} optionText={opt} handleDeleteOption={props.handleDeleteOption} />)
            }
            <button onClick={props.handleDeleteOptions}>Remove all</button>      
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
            onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}
            >
            remove</button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.addOption = this.addOption.bind(this)
        this.state = {
            error: ''
        }
    }
    addOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        e.target.elements.option.value = ''
        const error = this.props.handleAddOption(option)
        this.setState(() => ({error}))
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addOption}>
                    <input name="option"></input>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))