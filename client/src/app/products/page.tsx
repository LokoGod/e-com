import ProductTable from "@/components/products/product-table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Products() {
  return (
    <>
      <div className=" mx-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dash</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Products</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <Tabs defaultValue="teaProducts">
        <Card className="w-fit mx-10 mt-5 mb-10">
          <TabsList>
            <TabsTrigger value="teaProducts">Tea Products</TabsTrigger>
            <TabsTrigger value="teaFlavours">Tea Flavours</TabsTrigger>
            <TabsTrigger value="teaCategories">Tea Categories</TabsTrigger>
          </TabsList>
        </Card>

        <TabsContent value="teaProducts">
          <div className="mx-10 my-5">
            <ProductTable />
          </div>
        </TabsContent>

        <TabsContent value="teaFlavours">
          <div></div>
        </TabsContent>
      </Tabs>
    </>
  );
}
