"use client"

import Link from "next/link"

interface Category {
  id: string
  text: string
}

interface Props {
  category: Category
}

export default function CategoryCard({ category }: Props) {
  return (
    <Link
      href={{
        pathname: `/quiz/${category.id}`,
      }}
    >
      <div className="flex items-center justify-center bg-white ring-1 ring-gray-200 rounded-lg shadow-sm hover:shadow-lg h-full">
        <div className="text-center font-semibold text-xl text-gray-900 m-12">
          {category.text}
        </div>
      </div>
    </Link>
  )
}
