import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import QuizResult from './screens/QuizResult.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizResult />
  </StrictMode>,
)
