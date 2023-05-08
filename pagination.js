import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const handleData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const result = await res.json();
    console.log('data', result);
    setData([...result.products]);
  };
  useEffect(() => {
    handleData();
  }, []);
  console.log('data', data.length);
  const showPage= (lengthValue) => {
    const arr = Array.from({length: lengthValue/10}, (_, i) => i + 1);
    return arr.map((item) => (
      <button onClick={() => setPage(item)}>{item}</button>
    ))
    
  }
  return (
    <div className="App">
      <table>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
        {data.length &&
          data.slice(page * 10-10, page*10).map((ele) => {
            return (
              <tr>
                <td>{ele.title}</td>
                <td>{ele.description}</td>
                <td>{ele.price}</td>
              </tr>
            );
          })}
      </table>
      {data.length > 0 && 
      <div class="pagination">
        {page > 1 && <span onClick={() => setPage(page-1)}>Previous</span>}
        {showPage(data.length)}
        {page < data.length/10 && <span onClick={() => setPage(page+1)}>Next</span>}
      </div>
      }
    </div>
  );
}
