"use client"

import { useState } from "react"
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function MyCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Product 1", price: 19.99, quantity: 1, image: "/placeholder.svg?height=80&width=80" },
    { id: 2, name: "Product 2", price: 29.99, quantity: 2, image: "/placeholder.svg?height=80&width=80" },
    { id: 3, name: "Product 3", price: 39.99, quantity: 1, image: "/placeholder.svg?height=80&width=80" },
    { id: 4, name: "Product 4", price: 49.99, quantity: 3, image: "/placeholder.svg?height=80&width=80" },
  ])
  const [notes, setNotes] = useState("")

  const updateQuantity = (id: number, change: number) => {
    setCartItems((items) =>
      items
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <Card className="flex-grow">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
            My Cart
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[calc(100vh-350px)] lg:h-[calc(100vh-250px)]">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 bg-secondary/10 rounded-lg"
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full sm:w-20 h-40 sm:h-20 object-cover rounded-md"
                  />
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-lg font-bold text-primary">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex flex-row sm:flex-col items-center sm:items-end space-x-4 sm:space-x-0 sm:space-y-2 w-full sm:w-auto">
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, -1)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => updateQuantity(item.id, -item.quantity)}>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <div className="w-full lg:w-80 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </CardContent>
          <Separator className="my-4" />
          <CardFooter className="flex flex-col gap-4">
            <div className="flex justify-between w-full">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-2xl font-bold">${total.toFixed(2)}</span>
            </div>
            <Button className="w-full">Checkout</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Order Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="notes">Special instructions or comments</Label>
            <Textarea
              id="notes"
              placeholder="Add any special instructions or comments about your order here..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="mt-2"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

