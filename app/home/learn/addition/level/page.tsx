"use client"
import React, { useState, useEffect } from 'react';

// Function to generate a random single-digit number
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10); // Returns a random number between 0 and 9
};

// Function to add two numbers
const addNumbers = (num1, num2) => {
  return num1 + num2;
};



const Page = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [sum, setSum] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [questionCount, setQuestionCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const startQuiz = () => {
    const newNum1 = generateRandomNumber();
    const newNum2 = generateRandomNumber();
    const newSum = addNumbers(newNum1, newNum2);
    setNum1(newNum1);
    setNum2(newNum2);
    setSum(newSum);
    setShowQuiz(true);
    setStartTime(new Date());
  };

  const handleInputChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      checkAnswer();
    }
  };

  const checkAnswer = () => {
    const answer = parseInt(userAnswer);
    if (!isNaN(answer) && answer === sum) {
      setIsCorrect(true);
      setCorrectCount(prevCount => prevCount + 1);
    } else {
      setIsCorrect(false);
    }
    setQuestionCount(prevCount => prevCount + 1);
    setUserAnswer('');
  };

  useEffect(() => {
    if (questionCount === 60) {
      setEndTime(new Date());
      setShowQuiz(false);
    } else {
      const newNum1 = generateRandomNumber();
      const newNum2 = generateRandomNumber();
      const newSum = addNumbers(newNum1, newNum2);
      setNum1(newNum1);
      setNum2(newNum2);
      setSum(newSum);
      setUserAnswer('');
      setIsCorrect(null);
    }
  }, [questionCount]);

  return (
    <div className='bg-gradient-to-b from-White to-light-blue min-h-screen w-full py-20'>
      <h1 className='text-Black text-6xl text-center'>Start</h1>
      {!showQuiz && questionCount < 60 && (
        <button onClick={startQuiz} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>
          Start Quiz
        </button>
      )}
      {showQuiz && questionCount < 60 && (
        <div className='text-center mt-8'>
          <p className='text-Black text-2xl'>Question {questionCount + 1}: What is the sum of {num1} and {num2}?</p>
          <input 
            type="text" 
            value={userAnswer} 
            onChange={handleInputChange} 
            onKeyDown={handleEnterPress} 
            className='border border-gray-400 text-Black rounded px-4 py-2 mt-4' 
          />
          {isCorrect !== null && (
            <p className={`mt-4 text-${isCorrect ? 'green' : 'red'}-500 text-lg font-bold`}>
              {isCorrect ? 'Correct!' : 'Wrong!'}
            </p>
          )}
        </div>
      )}
      {questionCount === 60 && (
        <div className='text-center mt-8'>
          <h2 className='text-2xl font-bold'>Quiz Completed!</h2>
          <p className='mt-4'>Number of Correct Answers: {correctCount}</p>
          <p>Time taken: {Math.round((endTime - startTime) / 1000)} seconds</p>
        </div>
      )}
    </div>
  );
};

export default Page;





 