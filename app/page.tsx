'use client'
import Menu from '@/components/Menu'
import Quiz from '@/components/Quiz'
import TotalScore from '@/components/TotalScore'
import { useAppSelector } from '@/redux/hooks'
import React from 'react'

export default function page() {

const page = useAppSelector(state => state.OpenQuizSliceReducer.value.page)

  return (
    <div className='h-screen w-full flex items-center justify-center bg-gradient-to-br from-purple-300 via-purple-500 to-purple-800'>
     {page == 'menu' && <Menu /> }
     {page == 'quiz' && <Quiz /> }
     {page == 'totalscore' && <TotalScore />} 
    </div>
  )
}
