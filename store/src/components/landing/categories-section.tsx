import { Card } from "@/components/ui/card"

const categories = [
  {
    title: "Keyboards",
    image: "/placeholder.svg?height=300&width=400",
    className: "bg-gradient-to-br from-gray-800 to-gray-900",
  },
  {
    title: "Gaming Mice",
    image: "/placeholder.svg?height=300&width=400",
    className: "bg-gradient-to-br from-blue-900 to-purple-900",
  },
  {
    title: "Headsets & Mic",
    image: "/placeholder.svg?height=300&width=400",
    className: "bg-gradient-to-br from-gray-700 to-blue-900",
  },
  {
    title: "Accessories",
    image: "/placeholder.svg?height=300&width=400",
    className: "bg-gradient-to-br from-amber-100 to-green-200",
  },
  {
    title: "Mousepads",
    image: "/placeholder.svg?height=300&width=400",
    className: "bg-gradient-to-br from-teal-600 to-blue-800",
  },
]

export default function CategoriesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {categories.map((category, index) => (
        <Card
          key={index}
          className={`relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer transition-transform hover:scale-105 ${category.className}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{ backgroundImage: `url(${category.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-white font-semibold text-lg">{category.title}</h3>
          </div>
        </Card>
      ))}
    </div>
  )
}