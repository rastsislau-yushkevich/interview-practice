import './App.css';
// import ErrorBoundary from './components/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ReduxCounter from './components/ReduxCounter';
import Bulbasaur from './components/Bulbasaur';
// import Counter from './components/Counter';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <ErrorBoundary>
        <Counter />
      </ErrorBoundary> */}
        <ReduxCounter />
        <Bulbasaur />
      </div>
    </Provider>
  );
}

export default App;
