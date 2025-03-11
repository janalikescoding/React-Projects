import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { increment,decrement,incrementByAmount } from './redux/counter';
import { useState } from 'react';
//import { useState } from 'react';

function App() {
  const {count} = useSelector((state) => state.counter);
  //const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <input type="number" value={value} onChange={handleChange} /><button onClick={() => dispatch(incrementByAmount(value))}>incrementByAmount</button> {/* dispatch(incrementByAmount(33))--> */}
      <p>{value}</p>
    </div>
  );
}

export default App;
