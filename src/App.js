import logo from './logo.svg';
import './App.css';
import { useState} from 'react'

function App() {
  const [ text, setText]=useState('')
  const[ todo, setTodo]=useState([])

  function addTodo(){
    setTodo([...todo,text])
    setText('')
  }
   
return (
    <div className="App">
    <div>
      <input
      type="text"
      value={text}
      placeholder='добовить тодо'
      onChange={e=> setText(e.target.value)}
      />
      <button onClick={addTodo}>+</button>
      <ol>
        {todo.map(item=>(
          <li>
            {item}
          </li>
        ))}
      </ol>
      </div>
       </div>
)
        }
    

export default App;


