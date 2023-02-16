import './App.css';

import { useApi } from './hooks/use-api';

function MyButton() {
  return (
    <div>Hello!
    <button>I'm a button</button>
    </div>
  );
}


function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {response}
        </p>
        <MyButton />
      </header>
    </div>
  );
}

export default App;
