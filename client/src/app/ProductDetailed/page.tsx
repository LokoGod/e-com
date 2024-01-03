import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FaChevronRight, FaHouse } from "react-icons/fa6";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuShield } from "react-icons/lu";
import Image from "next/image";
import heroImg from "../../../public/logitechPro/pro-x-keyboard-gallery-1.png";
import img2 from "../../../public/logitechPro/logitech-g-pro-keyboard.jpg";
import img3 from "../../../public/logitechPro/design-medium.jpg";
import img4 from "../../../public/logitechPro/in-the-box-large.jpg";
import { Button } from "@/components/ui/button";

export default function ProductDetailed() {
  return (
    <>
      <div className="text-xs m-2 ml-7 mt-5">
        <Breadcrumb
          spacing="8px"
          separator={<FaChevronRight color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/Home">
              <FaHouse />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/Home">Keyboards</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="">Logitech G90</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="flex">
        <ul className="justify-start ml-7 mt-10">
          <li>
            <Image
              src={img2}
              className="mb-2 w-20 h-20 rounded-lg shadow-lg"
              alt="Product sub image"
            />
          </li>
          <li>
            <Image
              src={img3}
              className="mb-2 w-20 h-20 rounded-lg shadow-lg"
              alt="Product sub image"
            />
          </li>
          <li>
            <Image
              src={img4}
              className="mb-2 w-20 h-20 rounded-lg shadow-lg"
              alt="Product sub image"
            />
          </li>
        </ul>
        <Card className="ml-7 mt-10 rounded-lg w-[500px] shadow-lg">
          <Image src={heroImg} alt="Product main image" />
        </Card>

        <div className="mt-10 mx-5">
          <Card className="justify-center">
            <CardHeader>
              <CardTitle className="text-4xl mb-2">
                Logitech Pro Mechanical Keyboard
              </CardTitle>
              <p>Category</p>
              <CardDescription className="text-xl text-red-600 flex">
                Rs 86,550
                <Badge colorScheme="red" className="ml-5">
                  10% saved
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Badge>In Stock</Badge> <br></br>
              <Button className="mt-3">
                <LiaShoppingBagSolid size={20} className="mr-2" />
                Add to cart
              </Button>
              <Accordion type="single" collapsible className="mt-3">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Description</AccordionTrigger>
                  <AccordionContent>
                    The tournament-proven PRO gaming keyboard, now with advanced
                    GX Blue Clicky mechanical switches. Built to win in
                    collaboration with the world’s top esports athletes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Specs & Details</AccordionTrigger>
                  <AccordionContent>
                    <ul>
                      <li>Pro-inspired tenkeyless design</li>
                      <li>GX Blue clicky mechanical switches</li>
                      <li>LIGHTSYNC RGB lighting: </li>
                      <li>Height: 7.87 in (200 mm)</li>
                      <li>Actuation force: 1.76 oz (50 g)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <p className="mt-3 flex">
                <LuShield size={25} className="mr-2" />2 Year Warranty
              </p>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
      </div>

      <div className="text-center mt-10">
        <h1 className="text-6xl">KEYED FOR THE PROS</h1>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-700"></hr>
        <p className="mt-3">
          The tournament-proven PRO gaming keyboard—now with advanced GX Clicky
          mechanical switches.
        </p>
      </div>
    </>
  );
}
