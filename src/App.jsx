import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className="card">
        <input type='number' name='numberOfQuestions' min={5} max={15} />
        <select name='category'>
        </select>
        <select name='difficulty'>
        </select>
        <select name='type'>
        </select>
        <select name='name'>
          <option value={1}>1m</option>
          <option value={2}>2m</option>
          <option value={5}>5m</option>
        </select>
      </div>
      <div className='card'>
        <button onClick={() => navigate('/main')}>Start quiz</button>
        <button onClick={() => navigate('/stats')}>See my statistics</button>
      </div>
    </>
  )
}

export default App
