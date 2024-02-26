"use client";
import generateNumbersAndSum from "@/lib/function";
import React, { useState } from "react";


const Test: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [enteredAnswer, setEnteredAnswer] = useState<number | null>(null);
  const [number1 ,setNumber1] = useState<number | null>(null);
  const [tempAnswer ,setTempAnswer] = useState<number | null>(null);
  const [number2 ,setNumber2] = useState<number | null>(null);
  const [operators ,setOperators] = useState<string | null>(null);
  const [result ,setResult] = useState<number | null>(null);
  
  const handleStart = () => {
    setStarted(true);
    setStartTime(Date.now());
    setQuestionNumber(1);
    const [num1, num2, sum, operator] = generateNumbersAndSum();
    setNumber1(num1)
    setNumber2(num2)
    setOperators(operator)
    setResult(sum)  
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> ,  ) => {
    const inputValue = parseInt(e.target.value);
    setTempAnswer(inputValue)
    const inputLength = String(inputValue).length;
    const sumLength = String(result).length;
    if (inputLength === sumLength) {
        setEnteredAnswer(inputValue)
        handleAnswer(inputValue , result)
        console.log("handle answer called")
        console.log(inputValue)
      }
  };

  const handleAnswer = (input: number | null, result: number | null) => {
    setEnteredAnswer(input);
    if (input === result) {
      setScore(score + 1);
    }
    if (questionNumber < 60) {
      setQuestionNumber(questionNumber + 1);
      const [num1, num2, sum, operator] = generateNumbersAndSum();
      setNumber1(num1)
      setNumber2(num2)
      setOperators(operator)
      setResult(sum)
      setTempAnswer(null)
      // Reset entered answer to zero for the next question
    } else {
      setGameOver(true);
      setEndTime(Date.now());
    }
  };

  const handleRetry = () => {
    setStarted(false);
    setQuestionNumber(0);
    setScore(0);
    setStartTime(null);
    setEndTime(null);
    setGameOver(false);
  };

  if (!started) {
    return <button onClick={handleStart}>Start</button>;
  }

  if (gameOver) {
    const timeTaken = endTime && startTime ? (endTime - startTime) / 1000 : 0;
    return (
      <div>
        <p>Score: {score}/60</p>
        <p>Time taken: {timeTaken} seconds</p>
        <button onClick={handleRetry}>Retry</button>
      </div>
    );
  }

 

  return (
    <div>
      <p>Question {questionNumber}/60:</p>
      <p>
        {number1} {operators} {number2} = ?
      </p>
      <input
        className="text-Black"
        type="number"
        value={tempAnswer === null ? "" : tempAnswer}
        onChange={handleChange}
      />
    <p></p>
    </div>
  );
};

export default Test;
