// events and attributes 

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

renderCounterApp()