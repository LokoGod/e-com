import {
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
import { FaChevronRight, FaHouse } from "react-icons/fa6";
import Image from "next/image";

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
              src="https://i.rtings.com/assets/products/yPRXGbwb/logitech-g-pro-keyboard/design-medium.jpg"
              className="w-20 h-20 rounded-lg shadow-lg"
              alt="Product sub image"
            />
          </li>
          <li>
          <Image
              src="https://i.rtings.com/assets/products/yPRXGbwb/logitech-g-pro-keyboard/design-medium.jpg"
              className="w-20 h-20 rounded-lg shadow-lg"
              alt="Product sub image"
            />
          </li>
          <li>
          <Image
              src="https://i.rtings.com/assets/products/yPRXGbwb/logitech-g-pro-keyboard/design-medium.jpg"
              className="w-20 h-20 rounded-lg shadow-lg"
              alt="Product sub image"
            />
          </li>
          <li>
          <Image
              src="https://i.rtings.com/assets/products/yPRXGbwb/logitech-g-pro-keyboard/design-medium.jpg"
              className="w-20 h-20 rounded-lg shadow-lg"
              alt="Product sub image"
            />
          </li>
          <li>
          <Image
              src="https://i.rtings.com/assets/products/yPRXGbwb/logitech-g-pro-keyboard/design-medium.jpg"
              className="w-20 h-20 rounded-lg shadow-lg"
              alt="Product sub image"
            />
          </li>
        </ul>
        <Image
          src="https://i.rtings.com/assets/products/yPRXGbwb/logitech-g-pro-keyboard/design-medium.jpg"
          className="ml-7 mt-10 rounded-lg w-[500px] shadow-lg"
          alt="Product main image"
        />
      </div>
    </>
  );
}
