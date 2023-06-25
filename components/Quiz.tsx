"use client"

import { IAnswer, IQuestion } from "@/app/interfaces"
import Question from "./Question"
import { useState } from "react"

interface Props {
  questions: IQuestion[]
}

export default function Quiz({ questions }: Props) {
  const [curIdx, setCurIdx] = useState<number>(0)
  const [selectedAnswers, setSelectedAnswers] = useState<IAnswer[]>(
    Array<IAnswer>(questions.length)
  )

  const onAnswerSelected = (
    questionIdx: number,
    selectedAnswer: string,
    isCorrect: boolean
  ): void => {
    const newAnswers = selectedAnswers.map(
      (answer: IAnswer, index: number): IAnswer => {
        if (index === questionIdx) {
          return { answerString: selectedAnswer, isCorrect: isCorrect }
        } else {
          return answer
        }
      }
    )
    setSelectedAnswers(newAnswers)
  }

  const navigate = (questionIdx: number): void => {
    if (questionIdx >= 0 && questionIdx < questions.length) {
      setCurIdx(questionIdx)
    } else if (questionIdx < 0) {
      // go back to home page
    } else {
      // go to results page
    }
  }

  // Progress bar
  // Ability to move to any question
  return <Question question={questions[curIdx]} />
}
