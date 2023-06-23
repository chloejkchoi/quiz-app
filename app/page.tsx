export default function Home() {
  const categories: string[] = [
    "film_and_tv",
    "music",
    "history",
    "geography",
    "art_and_literature",
    "sport_and_leisure",
    "general_knowledge",
    "science",
    "food_and_drink",
  ];
  return (
    <main>
      <div className="text-gray-600">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full gap-2">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Trivia
            </h1>
            <h2 className="text-xl">Choose a category to start</h2>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-10">
            {categories.map((category) => (
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
