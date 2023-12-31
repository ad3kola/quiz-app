'use client'
import { QUIZ_QUESTIONS } from '@/data/quiz'
import { openMenuPage } from '@/redux/features/OpenQuizSlice'
import { resetScore } from '@/redux/features/QuizScoreSlice'
import { useAppSelector } from '@/redux/hooks'
import { AppDispatch } from '@/redux/store'
import React from 'react'
import { useDispatch } from 'react-redux'
import { ArrowLeftCircleIcon, ArrowPathRoundedSquareIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

function TotalScore() {
    const dispatch = useDispatch<AppDispatch>();
    const totalscore = useAppSelector((state) => state.QuizScoreSlice.value.score)
    console.log(totalscore)

    const restartQuiz = () => {
        dispatch(openMenuPage());
        dispatch(resetScore());
    }
  return (
    <div className='flex flex-col bg-white w-[550px] h-[500px] justify-center py-5 px-7 rounded-lg items-center gap-5'>
        <h2 className='text-3xl font-bold'>Congratulations!!!</h2>
        <h2 className = 'text-base trext-slate-800'>You've completed the quiz</h2>
        <h3 className = 'flex text-center items-center font-bold text-lg w-full pt-2 text-slate-800'>{`Total Score:  ${totalscore} out of ${QUIZ_QUESTIONS.length} questions.`}</h3>
        <p className = {`${totalscore <= QUIZ_QUESTIONS.length/2 ? 'text-red-600' : 'text-green-600'} font-medium text-sm underline animate-bounce `}> {totalscore <= QUIZ_QUESTIONS.length/2 ? 'Nice attempt, you can do better :)' : 'Great Job, I knew you could do it '}</p>
        <button onClick = {restartQuiz} className='flex items-center justify-center bg-slate-900 rounded-lg px-16 py-3 w-full text-white text-base transition duration-300 cursor-pointer active:scale-95 font-bold hover:bg-slate-950 space-x-4'>

            <ArrowPathRoundedSquareIcon className='text-white h-6 mr-2' /> Restart Quiz</button>
    </div>
  )
}

export default TotalScore