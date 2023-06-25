export const CATEGORIES = [
  { id: "film_and_tv", text: "Film and TV" },
  { id: "music", text: "Music" },
  { id: "history", text: "History" },
  { id: "geography", text: "Geography" },
  { id: "art_and_literature", text: "Art and Literature" },
  { id: "sport_and_leisure", text: "Sports and Leisure" },
  { id: "general_knowledge", text: "General Knowledge" },
  { id: "science", text: "Science" },
  { id: "food_and_drink", text: "Food and Drinks" },
]

export const getCategoryText = (id: string): string => {
  let categoryText: string = ""
  CATEGORIES.forEach((value): void => {
    if (id == value.id) {
      categoryText = value.text
      return
    }
  })
  return categoryText
}
