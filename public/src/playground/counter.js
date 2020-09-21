class App extends React.Component {
    render() {
        return (
            <div>
                <Counter count={2} />
            </div> 
        )
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: props.count
        }
    }
    
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        }) 
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })      
    }
    handleAddOne() {
        this.setState((prevState) => 
        {
            return {
                count: prevState.count + 1
            }
        })    
    }
    render() {
        return ( 
        <div>
           <h1>Counter: {this.state.count}</h1>
           <button onClick={this.handleAddOne}>+1</button>
           <button onClick={this.handleMinusOne}>-1</button>
           <button onClick={this.handleReset}>Reset</button>  
        </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<App />, document.getElementById('app'))

/* // events and attributes 

let count = 0   

const addOne = () => {
        count++;
        renderCounterApp();
    }
const minusOne = () => { 
        count--;
        renderCounterApp();
    }
const reset = () => {
        count = 0;
        renderCounterApp();
    }

const approot2 = document.getElementById('app2');

const renderCounterApp = () => {
    let templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <br></br><br></br>
            <button onClick={minusOne}>-1</button>
            <br></br><br></br>
            <button onClick={reset}>reset</button>
        </div>
    )
    
    ReactDOM.render(templateTwo, approot2)
}

renderCounterApp() */