import { useState, useEffect } from "react";
import { resultInitialState } from "./Constants";
import AnswerTimer from "./AnswerTimer";
const getRandomQuestions = (questions, num = 10) => {
  let shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};
const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);
  const [showAnswerTimer, setShowAnswerTimer] = useState(true);
  const [quizQuestions, setQuizQuestions] = useState([]);
  useEffect(() => {
    setQuizQuestions(getRandomQuestions(questions));
  }, []);
  const { question, choices, correctAnswer, type } =
    quizQuestions[currentQuestion] || {};
  const onAnswerClick = (answer, index) => {
    if (type === "Coding") return;
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };
  const onClickNext = (finalAnswer) => {
    setAnswerIdx(null);
    setShowAnswerTimer(false);
    setResult((prev) =>
      finalAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (currentQuestion !== quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
    setTimeout(() => {
      setShowAnswerTimer(true);
    });
  };
  const onTryAgain = () => {
    setResult(resultInitialState);
    setShowResult(false);
    setQuizQuestions(getRandomQuestions(questions));
  };
  const handleTimeUp = () => {
    setAnswer(false);
    onClickNext(false);
  };
  const handleCodingSubmission = (code) => {
    localStorage.setItem(`codingQuestion_${currentQuestion}`, code);
    onClickNext(true);
  };
  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          {showAnswerTimer && (
            <AnswerTimer duration={60} onTimeUp={handleTimeUp} />
          )}
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total=question">/{quizQuestions.length}</span>
          <h2>{question}</h2>
          {type === "MCQs" && (
            <ul>
              {choices.map((choice, index) => (
                <li
                  onClick={() => onAnswerClick(choice, index)}
                  key={choice}
                  className={answerIdx === index ? "selected-answer" : null}
                >
                  {choice}
                </li>
              ))}
            </ul>
          )}
          {type === "Coding" && (
            <div>
              <textarea
                placeholder="Write your code here..."
                onBlur={(e) => handleCodingSubmission(e.target.value)}
              ></textarea>
            </div>
          )}
          <div className="footer">
            <button
              onClick={() => onClickNext(answer)}
              disabled={answerIdx === null && type === "MCQs"}
            >
              {currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Questions:<span>{quizQuestions.length}</span>
          </p>
          <p>
            Total Score:<span>{result.score}</span>
          </p>
          <p>
            Correct Answers:<span>{result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span>{result.wrongAnswers}</span>
          </p>
          <button onClick={onTryAgain}>Try again</button>
        </div>
      )}
    </div>
  );
};
export default Quiz;
