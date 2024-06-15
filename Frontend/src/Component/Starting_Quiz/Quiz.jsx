import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Quizz() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [randomIndices, setRandomIndices] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:300/quiz/${id}`);
        if (res && res.data.length > 1) {
          setData(res.data[1].javascript);
          setLoading(false);
        } else {
          setError("Invalid data structure");
          setLoading(false);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (data.length > 0) {
      const indices = new Set();
      const testLength = data[0]?.test?.length || 0;
      while (indices.size < 5 && testLength > 0) {
        const randomN = Math.floor(Math.random() * testLength);
        indices.add(randomN);
      }

      setRandomIndices(Array.from(indices));
    }
  }, [data]);

  const handleNext = () => {
    if (currentIndex < randomIndices.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null); // Reset selected option for the next question
    }
  };

  const handleOption = (optionName) => {
    const questionIndex = randomIndices[currentIndex];
    const correctAnswer = data[0]?.test?.[questionIndex]?.Answer;
    console.log("Correct answer:", correctAnswer);


    setSelectedOption(optionName);
    console.log("Selected option:", optionName);
    if (currentIndex >= 4){
      handleSubmit();
    }
    if (optionName === correctAnswer) { 
      setScore((prev) => prev + 1);
      console.log("Correct! New score:", score + 1);
    }
    setTimeout(handleNext, 300);
  };

  const handleSubmit = () => {

    navigate(`/Result/${id}`, {Sanding_Result});
    console.log("Quiz submitted. Final score:", score);
    // Further actions, like sending data to a server or showing a summary
  };

  const Sanding_Result = {
    Email : localStorage.getItem("Email"),
    Score: score,
    TotalQun: 5,
    correctAnswers: score,
    wrongAnswers: 5 - score,
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data.length === 0 || randomIndices.length === 0) {
    return <div>No data available.</div>;
  }

  const questionIndex = randomIndices[currentIndex];
  const question = data[0]?.test?.[questionIndex]; // Get the current question

  return (
    <div>
      <h1>Quiz Time</h1>
      <h2>Question {currentIndex + 1}</h2>
      <h3>{question?.Q || "Question not found"}</h3>
      <p onClick={() => handleOption("OptionA")}>{question?.OptionA || "Option A not found"}</p>
      <p onClick={() => handleOption("OptionB")}>{question?.OptionB || "Option B not found"}</p>
      <p onClick={() => handleOption("OptionC")}>{question?.OptionC || "Option C not found"}</p>
      <p onClick={() => handleOption("OptionD")}>{question?.OptionD || "Option D not found"}</p>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleNext}>Next</button>
      <div>Your current score: {score}</div> {/* Display the current score */}
    </div>
  );
}

export default Quizz;
