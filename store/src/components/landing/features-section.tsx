import { Card } from "@/components/ui/card"
import { Truck, DollarSign, Headphones, Shield, CreditCard } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over Rs 10,000. Delivery in 2-5 business days.",
  },
  {
    icon: DollarSign,
    title: "Zero Surcharges",
    description: "All listed prices are final, no hidden fees!",
  },
  {
    icon: Headphones,
    title: "Customer Service",
    description: "WhatsApp, Email or Live Chat — message us anywhere!",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Backed by industry-leading payment systems.",
  },
  {
    icon: CreditCard,
    title: "Cash on Delivery",
    description: "Available for orders valued up to Rs 50,000.",
  },
]

export default function FeaturesSection() {
  return (
    <Card className="bg-neutral-900 p-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-black" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-white text-lg">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}