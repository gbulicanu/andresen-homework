import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import QuizResult from './screens/QuizResult.jsx'
import MainQuiz from './screens/MainQuiz.jsx'
import Statistics from './screens/Statistics.jsx'
import { BrowserRouter as Router, Route, RouterProvider, createBrowserRouter } from 'react-router-dom'

  const router = createBrowserRouter([
    {
      path: "/main",
      element: <MainQuiz />
    },
    {
      path: "/stats",
      element: <Statistics />
    },
    {
      path: "/result",
      element: <QuizResult />
    },
    {
      path: "/",
      element: <App />,
    },
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
