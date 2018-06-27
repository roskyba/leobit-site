

const addOne = () => {
  count++;
  renderCounterApp();
}

const minusOne = () => {
  count--;
  renderCounterApp();
}

const resetCount = () => {
  count = 0;
  renderCounterApp();
}

const renderCounterApp = () => {
  const template = (
    <div>
      <h1>Count: {count}</h1>
      <button className='add' onClick={addOne}>+1</button>
      <button className='minus' onClick={minusOne}>-1</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

renderCounterApp();