
import { Truck, Shield, DollarSign, Headphones } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Truck,
      title: "Worldwide Shipping",
      description: "Fast delivery to your doorstep",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Safe and encrypted transactions",
    },
    {
      icon: DollarSign,
      title: "Money Back Guarantee",
      description: "30-day return policy",
    },
    {
      icon: Headphones,
      title: "Online Customer Service",
      description: "24/7 support available",
    },
  ]

  return (
    <div className="bg-[#0f1115] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 rounded-lg transition-transform hover:scale-105"
            >
              <feature.icon className="w-12 h-12 text-[#00ff66] mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
