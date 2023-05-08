import React, {useState} from 'react';
import "./styles.css";

export default function App() {
  const arr = ['play cricket', 'play video game', 'read book'];
  const [list, setList] = useState(arr);
  const [showDelete, setshowDelete] = useState([])
  const handleList = (item) => {
    const filterList = list.filter(ele => ele !== item);
    setList(filterList);
  }
  const showDeletButton = (e) => {
    if(e.target.checked) {
      return setshowDelete([...showDelete, e.target.value]);
    }
    return setshowDelete(showDelete.filter(ele => ele !== e.target.value))
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ul> 
      {list.length && list.map((item, i) => (
           <>
           <li key={i}>{item}</li>
           <input type="checkbox" value={item} onClick={(e) => showDeletButton(e)} />
           {showDelete.includes(item) && <button onClick={() => handleList(item)}>Delete</button>}
           </>
      ))}
      </ul>
    </div>
  );
}
