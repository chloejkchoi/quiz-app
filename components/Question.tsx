"use client"

import { IQuestion } from "@/app/interfaces"
import { useState } from "react"

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

  return (
    <div>
      <div>{question.question.text}</div>
      <br />
      <div className="flex flex-col gap-4">
        <button
          onClick={() => {
            onAnswerSelected(question.correctAnswer, true)
            setShowResult(true)
          }}
        >
          {question.correctAnswer}
        </button>
        {question.incorrectAnswers.map((value: string) => (
          <button
            onClick={() => {
              onAnswerSelected(value, false)
              setShowResult(true)
            }}
          >
            {value}
          </button>
        ))}
      </div>
      {showResult && (
        <button
          onClick={() => {
            setShowResult(false)
            goNext()
          }}
        >
          next
        </button>
      )}
    </div>
  )
}
