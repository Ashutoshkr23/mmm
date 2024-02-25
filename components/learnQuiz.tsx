"use client";
import generateNumbersAndSum from "@/lib/function";
import React, { useState } from "react";
const SumGame: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [enteredAnswer, setEnteredAnswer] = useState<number | null>(null);

  const handleStart = () => {
    setStarted(true);
    setStartTime(Date.now());
    setQuestionNumber(1);
  };

  const handleAnswer = (input: number, sum: number) => {
    setEnteredAnswer(input);
    if (input === sum) {
      setScore(score + 1);
    }
    if (questionNumber < 60) {
      setQuestionNumber(questionNumber + 1);
      setEnteredAnswer(0); // Reset entered answer to zero for the next question
    } else {
      setGameOver(true);
      setEndTime(Date.now());
    }
    console.log(input, sum, score);
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

  const [num1, num2, sum, operator] = generateNumbersAndSum();

  return (
    <div>
      <p>Question {questionNumber}/60:</p>
      <p>
        {num1} {operator} {num2} = ?
      </p>
      <input
        type="number"
        value={enteredAnswer === null ? "" : enteredAnswer}
        onChange={(e) => handleAnswer(parseInt(e.target.value), sum)}
      />
    </div>
  );
};

export default SumGame;
