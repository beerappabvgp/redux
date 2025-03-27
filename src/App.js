import logo from './logo.svg';
import './App.css';
import { ThemeToggler } from './components/ThemeToggler';
import { ThemeProvider } from './components/ThemeContext';
import { SecondComponent } from './components/SecondComponent';
import { store } from './redux/store.js';
import { Counter } from './components/Counter';
import { Provider } from "react-redux";

function App() {
  return (
   <Provider store={store}>
     <ThemeProvider>
      {/* <div>
        <h1 className='underline'>Hello World !!!</h1>
        <ThemeToggler />
        <br />
        <SecondComponent />
      </div> */}
      <Counter />
    </ThemeProvider>
   </Provider>
  );
}

export default App;
