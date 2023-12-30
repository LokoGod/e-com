import CarouselComp from "@/components/common/CarouselComp";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <>
      <div className="mt-10">
        <CarouselComp />
      </div>

      <h1 className="ml-10 font-medium text-5xl">Best sellers</h1>

      <div className="flex my-7 mx-10">
        <Card className="w-[350px] mr-10">
          <CardHeader>
            
            <CardDescription>Logitech</CardDescription>
            <CardTitle>PRO Keyboard</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="https://resource.logitechg.com/d_transparent.gif/content/dam/gaming/en/products/pro-keyboard/pro-keyboard-gallery/deu-pro-gaming-keyboard-gallery-topdown.png"
              alt="Card Image"
              className="w-full h-40 object-cover"
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="font-semibold">Rs 35,000.00</p>
            <p></p>
          </CardFooter>
          <CardFooter className="justify-center">
            <Button className="w-full">Add to cart</Button>
          </CardFooter>
        </Card>

        <Card className="w-[350px] mr-10">
          <CardHeader>
            <CardTitle>BlackWidow Chroma V2</CardTitle>
            <CardDescription>Razer</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src="https://assets.razerzone.com/eeimages/support/products/1179/1179_blackwidow_chroma_v2_alt.png"
              alt="Card Image"
              className="w-full h-40 object-cover"
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="font-semibold">Rs 48,000.00</p>
            <p></p>
          </CardFooter>
          <CardFooter className="justify-center">
            <Button className="w-full">Add to cart</Button>
          </CardFooter>
        </Card>

        <Card className="w-[350px] mr-10">
          <CardHeader>
            <CardTitle>K70 Pro</CardTitle>
            <CardDescription>Corsair</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src="https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=500%2Cq=85%2Cwidth=1000/wp-content/uploads/corsair-k70-rgb-pro-review.png"
              alt="Card Image"
              className="w-full h-40 object-cover"
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="font-semibold">Rs 32,500.00</p>
            <p></p>
          </CardFooter>
          <CardFooter className="justify-center">
            <Button className="w-full">Add to cart</Button>
          </CardFooter>
        </Card>

        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>K2 RGB </CardTitle>
            <CardDescription>Keychron</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src="https://oneofzero.net/cdn/shop/products/k2aluminumcaseMAIN.jpg?v=1587605686"
              alt="Card Image"
              className="w-full h-40 object-cover"
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="font-semibold">Rs 69,900.00</p>
            <p></p>
          </CardFooter>
          <CardFooter className="justify-center">
            <Button className="w-full">Add to cart</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
