"use client"

import { IQuestion } from "@/app/interfaces"

interface Props {
  question: IQuestion
}

export default function Question({ question }: Props) {
  return (
    <div>
      <div>{question.question.text}</div>
      <br />
      <div>{question.correctAnswer}</div>
      {question.incorrectAnswers.map((value: string) => (
        <div>{value}</div>
      ))}
    </div>
  )
}
