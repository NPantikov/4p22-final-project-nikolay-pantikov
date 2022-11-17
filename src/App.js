import './App.css';
import MyComponent from './components/MyComponent/MyComponent';
import MyClassComponent, { PI, multiplay } from './components/MyClassComponent/MyClassComponent';
import { multiply } from 'lodash';


function App() {
  return (
    <div className="App">
      <MyComponent />
      <MyClassComponent />
      <span>{ PI }</span>
      <span>{ multiply(3, 4) }</span>
    </div>
  );
}

export default App;
