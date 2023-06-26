"use client"

import { IAnswer, IQuestion } from "@/app/interfaces"
import { useMemo, useState } from "react"

interface Props {
  question: IQuestion
  onAnswerSelected: (selectedAnswer: string, isCorrect: boolean) => void
  goNext: () => void
}

export default function Question({
  question,
  onAnswerSelected,
  goNext,
}: Props) {
  const [showResult, setShowResult] = useState<boolean>(false)
  const [selectedIdx, setSelectedIdx] = useState<number>()
  const answers = useMemo(() => {
    let combinedAnswers: IAnswer[] = question.incorrectAnswers.map(
      (value: string): IAnswer => {
        return { answerString: value, isCorrect: false }
      }
    )
    combinedAnswers.splice(
      Math.floor(Math.random() * (combinedAnswers.length + 1)),
      0,
      {
        answerString: question.correctAnswer,
        isCorrect: true,
      }
    )
    return combinedAnswers
  }, [question])

  const onAnswerClick = (idx: number): void => {
    setShowResult(true)
    setSelectedIdx(idx)
  }

  var classNames = require("classnames")

  return (
    <div className="flex flex-col gap-10">
      <div className="px-6 text-center font-medium text-2xl text-gray-900">
        {question.question.text}
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        {answers.map((answer: IAnswer, index: number) => {
          const answerClassName = classNames(
            "rounded-lg px-6 py-4 h-full ring text-xl",
            {
              "bg-white ring-gray-500 font-bold text-gray-900 hover:ring-gray-700 hover:bg-gray-100":
                !showResult,
              "ring-gray-400 text-gray-400 bg-gray-200":
                showResult && index != selectedIdx && !answer.isCorrect,
              "ring-red-700 text-gray-400 bg-gray-200":
                showResult && index == selectedIdx && !answer.isCorrect,
              "ring-green-700 text-gray-900 font-bold":
                showResult && answer.isCorrect,
            }
          )
          return (
            <button
              key={index}
              className={answerClassName}
              disabled={showResult}
              onClick={() => {
                onAnswerSelected(answer.answerString, answer.isCorrect)
                onAnswerClick(index)
              }}
            >
              {answer.answerString}
            </button>
          )
        })}
      </div>
      {showResult && (
        <div className="flex flex-col w-full items-center">
          <button
            className="rounded-lg py-4 px-8 w-fit ring ring-sky-800 bg-sky-700 hover:ring-sky-900 hover:bg-sky-800"
            onClick={() => {
              setShowResult(false)
              goNext()
            }}
          >
            <p className="text-xl font-medium text-white">Next</p>
          </button>
        </div>
      )}
    </div>
  )
}
