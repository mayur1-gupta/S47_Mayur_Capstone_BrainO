import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import Result from '../Result/Result';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const { id } = useParams();
  const [QunNumber, setQunNumber] = useState(0);
  const [Answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const totalQuestions = 0;

  useEffect(() => {
    // Correct port number
     axios.get(`http://localhost:300/quiz/${id}`)
      .then((res) => {
        console.log("Questions:", res.data);
        setQuestions(res.data);
        setAnswer(res.data[0].js[QunNumber].Answer);
      })
      .catch((err) => {
        console.error("Error fetching questions:", err);
      });
  },[QunNumber]);


  // Correcting repeated increments and ensuring answer checking
  const handleOption = (option) => {
    if (Answer === option) {
      setScore(score + 1);
    }
    if (QunNumber < questions[0].js.length-1) {
      setQunNumber(QunNumber + 1);
      setAnswer(questions[0].js[QunNumber + 1].Answer);
       var totalQuestions = questions[0].js.length; 

    } else {
      handleSubmit();
    }
  };

  const handleNext = () => {
    // Correcting string-to-integer comparison
    if (QunNumber < 4) {
      setQunNumber(QunNumber + 1);
    } else {
      alert("Already on the last question");
    }
  };

  const handleSubmit = () => {
    alert("Quiz Completed");
    navigate(`/result/${id}`,{
      state: { 
        score: score,
        totalQun: questions[0].js.length,
      },
    });
  };
console.log(totalQuestions);
console.log(Answer);
  
  return (
    <div>
      <h1>Quiz Time</h1>
      <h2>Question Number: {QunNumber + 1}</h2>
      <h2>Score: {score}</h2>

      {questions.length > 0 && (
        <div>
          {/* Ensure valid QunNumber before accessing */}
          {QunNumber < questions[0].js.length && (
            <div>
              <p>{questions[0].js[QunNumber].Question}</p>
              <button onClick={() => handleOption("OptionA")}>
                {questions[0].js[QunNumber].OptionA}
              </button>
              <button onClick={() => handleOption("OptionB")}>
                {questions[0].js[QunNumber].OptionB}
              </button>
              <button onClick={() => handleOption("OptionC")}>
                {questions[0].js[QunNumber].OptionC}
              </button>
              <button onClick={() => handleOption("OptionD")}>
                {questions[0].js[QunNumber].OptionD}
              </button>
              <br />
              <button onClick={handleNext}>Next</button>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          )}
        </div>
      )}
        {/* <div> */}
           {/* <Result score={score}/> */}
        {/* </div> */}
    </div>
  );
}

export default Quiz;
