"use client";
import { QUIZ_QUESTIONS } from "@/data/quiz";
import { openQuizPage } from "@/redux/features/OpenQuizSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

const Menu = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className  = 'flex flex-col bg-white w-[550px] h-[500px] justify-center py-5 px-7 rounded-lg items-center'>
      <h1 className='text-4xl font-bold text-purple-900 uppercase underline tracking-wider'>WORLD TRIVIA GAMES</h1>
      <h2 className = 'mt-2 text-slate-900 text-center text-base font-medium'>How much do you know about the world an some its histerical phenomenones. <span className="font-bold block text-center">Start when you're ready</span></h2>
      <h2 className = 'text-slate-900 text-base font-semibold'>Test your knowdlege and stand a chance to win $1,000,000 in  cash if you can get all {QUIZ_QUESTIONS.length} questions in the next {QUIZ_QUESTIONS.length/2} minutes.</h2>
      <button
        onClick={() => {
          dispatch(openQuizPage());
        }} className='bg-gradient-to-r mt-5 from-purple-400 to-purple-700 rounded-lg px-20 py-3 w-fit text-white text-base font-medium transition duration-200 cursor-pointer hover:scale-105'
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Menu;
