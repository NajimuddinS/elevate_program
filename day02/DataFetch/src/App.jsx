import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    async function getData() {
      let posts = "https://jsonplaceholder.typicode.com/posts";
      try {
        const response = await fetch(posts);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        // console.log(json);
        setData(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
  }, []);
  
  // console.log(data)
  
  return (
    <>
      <div className="card">
        {data.map((posts)=>(
        <table>
          <tr>
            <th>{posts.id}</th>
            <th>{posts.id}</th>
            <th>{posts.id}</th>
          </tr>
      </table>
        ))}
      </div>
    </>
  )
}

export default App
