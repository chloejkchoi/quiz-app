"use client";

import Link from "next/link";

interface Category {
  id: string;
  text: string;
}

interface Props {
  category: Category;
}

export default function CategoryCard({ category }: Props) {
  return (
    <Link
      href={{
        pathname: "/quiz",
        query: { category: category.id },
      }}
    >
      <div
        className="flex items-center justify-center border-2 border-gray-200 rounded-lg hover:shadow-lg h-full"
        key={category.id}
      >
        <div className="text-center title-font font-medium text-xl text-gray-900 m-12">
          {category.text}
        </div>
      </div>
    </Link>
  );
}
