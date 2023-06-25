export interface IQuestion {
  category: string
  id: string
  tags: string[]
  difficulty: string
  regions: string[]
  isNiche: boolean
  question: {
    text: string
  }
  correctAnswer: string
  incorrectAnswers: string[]
  type: string
}

export interface IAnswer {
  answerString: string
  isCorrect: boolean
}
