import './App.css';
import { Button } from 'antd'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const add = () => {
    setCount(() => count + 1)
  }
  const rest = () => {
    setCount(0)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button type='primary' onClick={add}>
          测试button{count}
        </Button>
        <Button type='link' onClick={rest}>
          重置
        </Button>
      </header>
    </div>
  );
}

export default App;
