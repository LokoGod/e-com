import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { FaChevronRight, FaHouse } from "react-icons/fa6";

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
    </>
  );
}
