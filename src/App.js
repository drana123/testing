import './App.css';
import {Greeter} from './Greeter'
import {Clock} from './Clock'
import {ClockClass} from './ClockClass'
import { ProductSearchContainer } from './Products/ProductSearchContainer';
function App() {
    return (
        < div className="App" >
           <Greeter message="hello frm greeter"></Greeter>
           {/* <Clock></Clock> */}
            {/* <ClockClass></ClockClass> */}
            {/* <ProductSearchContainer></ProductSearchContainer> */}
        </div>
    );
}
export default App;

