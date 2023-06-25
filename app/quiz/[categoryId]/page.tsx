import { CATEGORIES } from "@/app/categories"
import Quiz from "@/components/Quiz"

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category: category.id }))
}

async function getQuestions(categoryId: string) {
  const res = await fetch(
    "https://the-trivia-api.com/v2/questions?" +
      new URLSearchParams({
        categories: categoryId,
        region: "US",
      })
  )
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

async function QuizPage({ params }: { params: { categoryId: string } }) {
  const resJSON = await getQuestions(params.categoryId)

  return (
    <main>
      <div className="flex flex-col items-center container p-16 mx-auto">
        <Quiz categoryId={params.categoryId} questions={resJSON} />
      </div>
    </main>
  )
}

export default QuizPage
