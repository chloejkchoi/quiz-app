"use client"

import { IAnswer, IQuestion } from "@/app/interfaces"
import Question from "./Question"
import { useState } from "react"
import { getCategoryText } from "@/app/categories"

interface Props {
  categoryId: string
  questions: IQuestion[]
}

export default function Quiz({ categoryId, questions }: Props) {
  const [curIdx, setCurIdx] = useState<number>(0)
  const [selectedAnswers, setSelectedAnswers] = useState<IAnswer[]>(
    Array<IAnswer>(questions.length).fill({
      answerString: "",
      isCorrect: false,
    })
  )

  const correctCounter = (): number => {
    let count: number = 0
    selectedAnswers.forEach((answer: IAnswer): void => {
      if (answer.isCorrect) count++
    })
    return count
  }

  const onAnswerSelected = (
    selectedAnswer: string,
    isCorrect: boolean
  ): void => {
    const newAnswers = [...selectedAnswers]
    newAnswers[curIdx] = { answerString: selectedAnswer, isCorrect: isCorrect }
    console.log(newAnswers)
    setSelectedAnswers(newAnswers)
  }

  const goNext = (): void => {
    if (curIdx >= questions.length - 1) {
      // show results
    }
    setCurIdx(curIdx + 1)
    console.log(curIdx)
  }

  return (
    <div>
      <div>{getCategoryText(categoryId)}</div>
      <div>{`Score: ${correctCounter()}/${questions.length}`}</div>
      <Question
        question={questions[curIdx]}
        onAnswerSelected={onAnswerSelected}
        goNext={goNext}
      />
    </div>
  )
}
