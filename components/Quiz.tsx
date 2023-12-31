"use client";
import { QUIZ_QUESTIONS } from "@/data/quiz";
import React, { useState } from "react";
import { ArrowLeftCircleIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { calculateScore } from "@/redux/features/QuizScoreSlice";
import { openTotalScorePage } from "@/redux/features/OpenQuizSlice";
import { useAppSelector } from "@/redux/hooks";

interface QuizProps {
  question: string;
  opt1: string;
  opt2: string;
  opt3: string;
  opt4: string;
  answer: number;
}

function Quiz() {
  const dispatch = useDispatch<AppDispatch>();
  const totalscore = useAppSelector(
    (state) => state.QuizScoreSlice.value.score
  );
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const [optionChosen, setOptionChosen] = useState<number>(0);

  const checkAnswer = (ans: number) => {
    if (currentQuestion.answer == ans) {
      dispatch(calculateScore());
    }
  };

  const nextQuestion = () => {
      setQuestionIndex(questionIndex + 1);
    if (questionIndex == QUIZ_QUESTIONS.length - 1) return;

};

const prevQuestion = () => {
    setQuestionIndex(questionIndex - 1);
    if (questionIndex == 0) return;
  };

  const finishQuiz = () => {
    if (currentQuestion.answer == optionChosen) {
      dispatch(calculateScore());
    }
    console.log(
      "Chosen Option: ",
      optionChosen,
      "Current Answer:",
      currentQuestion.answer,
      "---",
      totalscore
    );
    dispatch(openTotalScorePage());
  };
  const currentQuestion = QUIZ_QUESTIONS[questionIndex];
  return (
    <div className="flex flex-col bg-white w-[500px] h-[450px] px-5 py-10 rounded-lg">
      <h1 className="text-lg font-bold tracking-wider">
        {currentQuestion.question}
      </h1>
      <ul className="flex flex-col gap-3 w-full mt-2">
        <li>
          <button
            onClick={() => checkAnswer(1)}
            className="focus:bg-slate-900 focus:border-slate-950 focus:text-white text-sm flex items-center border border-slate-500 rounded-md px-3 h-12 w-full"
          >
            {currentQuestion.opt1}
          </button>
        </li>
        <li>
          <button
            onClick={() => checkAnswer(2)}
            className="focus:bg-slate-900 focus:border-slate-950 focus:text-white text-sm flex items-center border border-slate-500 rounded-md px-3 h-12 w-full"
          >
            {currentQuestion.opt2}
          </button>
        </li>
        <li>
          <button
            onClick={() => checkAnswer(3)}
            className="focus:bg-slate-900 focus:border-slate-950 focus:text-white text-sm flex items-center border border-slate-500 rounded-md px-3 h-12 w-full"
          >
            {currentQuestion.opt3}
          </button>
        </li>
        <li>
          <button
            onClick={() => checkAnswer(4)}
            className="focus:bg-slate-900 focus:border-slate-950 focus:text-white text-sm flex items-center border border-slate-500 rounded-md px-3 h-12 w-full"
          >
            {currentQuestion.opt4}
          </button>
        </li>
      </ul>
      <p className="flex items-center justify-center mx-auto py-3 text-center text-gray-500 text-xs space-x-2">
        <CheckBadgeIcon className="h-4" />
        {`${questionIndex + 1}  of ${QUIZ_QUESTIONS.length} questions `}{" "}
      </p>
      <div className="flex items-center space-x-1">
        {" "}
        {questionIndex > 0 && (
          <ArrowLeftCircleIcon
            onClick={prevQuestion}
            className="flex items-center h-14 text-slate-900 cursor-pointer hover:text-slate-800 duration-100"
          />
        )}
        {questionIndex == QUIZ_QUESTIONS.length - 1 ? (
          <button
            onClick={finishQuiz}
            className="bg-slate-900 rounded-lg px-16 py-3 w-full text-white text-base font-medium transition duration-300 cursor-pointer active:scale-95 hover:bg-slate-700"
          >
            Finish Quiz
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="bg-purple-700 rounded-lg px-16 py-3 w-full text-white text-base font-medium transition duration-300 cursor-pointer active:scale-95 hover:bg-purple-600"
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
