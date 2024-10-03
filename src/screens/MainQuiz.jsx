import { useNavigate } from 'react-router-dom';
import '../App.css'

function MainQuiz() {
  const answers = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];
  const navigate = useNavigate();

  const handleEndQuiz = () => {
    if (confirm('Are you sure you end this quiz?'))
      navigate("/");
  }

  return (
    <>
      <div className="card">
        <p>What is the answer for mock question?</p>
      </div>
      <div className="card">
        <ul>
          {answers.map((a) => (
            <>
              <li ley={a}>
                {a}
                <button>true</button>
                <button>false</button>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="card">
        <p>Question 3 of 6</p>
      </div>
      <div className="card">
        <p>Timer: 2m left...</p>
      </div>
      <div className="card">
        <button name="endQuiz" onClick={handleEndQuiz}>End Quiz</button>
      </div>
    </>
  );
}

export default MainQuiz;
