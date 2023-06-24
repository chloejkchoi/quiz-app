import CategoryCard from "@/components/CategoryCard";

const CATEGORIES = [
  { id: "film_and_tv", text: "Film and TV" },
  { id: "music", text: "Music" },
  { id: "history", text: "History" },
  { id: "geography", text: "Geography" },
  { id: "art_and_literature", text: "Art and Literature" },
  { id: "sport_and_leisure", text: "Sports and Leisure" },
  { id: "general_knowledge", text: "General Knowledge" },
  { id: "science", text: "Science" },
  { id: "food_and_drink", text: "Food and Drinks" },
];

export default function Home() {
  return (
    <main>
      <div className="text-gray-600">
        <div className="flex flex-col items-center container p-16 mx-auto">
          <div className="flex flex-col text-center w-full gap-2">
            <h1 className="text-3xl font-medium title-font mb-4 text-gray-900">
              Trivia
            </h1>
            <h2 className="text-xl">Choose a category to start</h2>
          </div>
          <div className="grid grid-cols-4 gap-6 min-w-fit max-w-3xl mt-16">
            {CATEGORIES.map((category) => (
              <CategoryCard category={category} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
