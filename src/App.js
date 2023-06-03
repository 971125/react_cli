import './App.css';
import { Button } from 'antd'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const add = () => {
    setCount(() => count + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button type='primary' onClick={add}>
          测试button{count}
        </Button>
      </header>
    </div>
  );
}

export default App;
