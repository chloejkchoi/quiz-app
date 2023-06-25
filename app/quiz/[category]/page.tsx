import { CATEGORIES } from "@/app/data"
import Quiz from "@/components/Quiz"

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category: category.id }))
}

async function getQuestions(category: string) {
  const res = await fetch(
    "https://the-trivia-api.com/v2/questions?" +
      new URLSearchParams({
        categories: category,
        region: "US",
      })
  )
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

async function QuizPage({ params }: { params: { category: string } }) {
  const resJSON = await getQuestions(params.category)

  return (
    <main>
      <div className="flex flex-col items-center container p-16 mx-auto">
        <Quiz questions={resJSON} />
      </div>
    </main>
  )
}

export default QuizPage
