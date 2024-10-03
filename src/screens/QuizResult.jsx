import "../App.css";
function QuizResult() {
    return (
    <>
        <div className="card">
            <h3>Thank you for completing this quiz. Here are your results:</h3>
            <p>You answered 5 out of 10 questions correctly.</p>
        </div>
        <div className="card">
            <h3>Configuration:</h3>
            <p>Type: Multi-choice</p>
            <p>Category: Misc</p>
            <p>Time: 5m</p>
            <p>Difficulty: Medium</p>
        </div>
        <div className="card">
            <p>Actual time to answer all questions: 3:23</p>
        </div>
        <div className="card">
            <button>Restart</button>
            <button>Chose another card</button>
        </div>
    </>
    );
}

export default QuizResult;