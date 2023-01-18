import {useState, useEffect} from 'react';

function CleanUp() {
  useEffect(() => {
    console.log('created :)!');
    return () => console.log('destroyed :(!');
  }, []);
  return <h1>CleanUp</h1>
}

function Once(){
  const [counter, setCount] = useState(0);
  const [keyword, setKeyword] = useState('');
  const plus = () => setCount((v) => v + 1);
  const onChange = (e) => setKeyword(e.target.value);

  // 첫 rendering에만 실행
  useEffect(() => {
    console.log('It runs once.');
  }, []);
  // 인자로 받는 arg가 변화할 때만 rendering
  useEffect(() => {
    console.log("It runs when 'counter' changes.");
  }, [counter]);
  // + 조건문
  useEffect(() => {
    if(keyword.length > 3){
      console.log("It runs when 'keyword' changes.");
    }
  }, [keyword]);
  return (
    <div>
      <h1>useEffect</h1>
      <input value={keyword} onChange={onChange} type="text" placeholder='Search here...' />
      <p>{counter}</p>
      <button onClick={plus}>Click!</button>
    </div>
  );
}

function App() {
  const [show, setShow] = useState(false);
  const onClick = () => setShow((v) => !v)
  return (
    <div>
      {show ? <Once /> : <CleanUp />}
      <button onClick={onClick}>{show ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;

