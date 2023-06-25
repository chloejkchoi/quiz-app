import CategoryCard from "@/components/CategoryCard"
import { CATEGORIES } from "./data"

export default function Home() {
  return (
    <main>
      <div className="text-gray-600">
        <div className="flex flex-col items-center container p-16 mx-auto">
          <div className="flex flex-col text-center w-full gap-2">
            <h1 className="text-4xl font-bold title-font mb-4 text-gray-900">
              Trivia
            </h1>
            <h2 className="text-2xl">Choose a category to get started</h2>
          </div>
          <div className="grid grid-cols-4 gap-6 min-w-fit max-w-3xl mt-16">
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
