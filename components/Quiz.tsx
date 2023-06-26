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
    <div className="flex flex-col max-w-3xl gap-10 bg-white p-10 ring-1 ring-gray-200 rounded-xl">
      {curIdx < questions.length ? (
        <>
          <div className="grid grid-cols-3 items-center w-full text-lg">
            <div className="font-medium text-gray-600">
              {getCategoryText(categoryId)}
            </div>
            <div className="font-bold text-center">{`${curIdx + 1} of ${
              questions.length
            }`}</div>
            <div className="text-end text-gray-600">{`Score: ${correctCounter()}`}</div>
          </div>
          <div className="px-10">
            <Question
              question={questions[curIdx]}
              onAnswerSelected={onAnswerSelected}
              goNext={goNext}
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-8">
          <div className="w-full text-2xl text-gray-900">
            <span>You scored </span>
            <span className="font-bold">{correctCounter()}</span>
            <span>{` out of ${questions.length}!`}</span>
          </div>
          <div className="flex flex-col w-full items-center">
            <a
              href="/"
              className="rounded-lg py-4 px-8 w-fit ring ring-sky-800 bg-sky-700 hover:ring-sky-900 hover:bg-sky-800"
            >
              <p className="text-xl font-medium text-white">
                Pick a new category
              </p>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
