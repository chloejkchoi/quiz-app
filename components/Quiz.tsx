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
    setSelectedAnswers(newAnswers)
  }

  const goNext = (): void => {
    setCurIdx(curIdx + 1)
  }

  return (
    <div className="flex flex-col max-w-xl gap-10">
      <div className="grid grid-cols-3 items-center w-full text-lg">
        <div className="font-medium text-gray-600">
          {getCategoryText(categoryId)}
        </div>
        <div className="font-bold text-center">{`${curIdx + 1} of ${
          questions.length
        }`}</div>
        <div className="text-end text-gray-600">{`Score: ${correctCounter()}`}</div>
      </div>
      {curIdx < questions.length ? (
        <Question
          question={questions[curIdx]}
          onAnswerSelected={onAnswerSelected}
          goNext={goNext}
        />
      ) : (
        <div>Finished</div>
      )}
    </div>
  )
}
