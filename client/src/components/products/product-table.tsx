"use client";

import { useState } from "react";
import Image from "next/image";
import { Edit, MoreHorizontal, PackagePlus, Trash } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Slider } from "../ui/slider";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

// Sample product data
const products = [
  {
    id: "1",
    name: "Handmade black tea",
    image: "/products/black.jpg?height=50&width=50",
    category: "Black",
    flavour: "Original",
    price: 129.99,
    stock: 23,
    status: "In Stock",
  },
  {
    id: "2",
    name: "Handmade Cinnamon black tea",
    image: "/products/cinnamon.jpg?height=50&width=50",
    category: "Black",
    flavour: "Cinnamon",
    price: 24.99,
    stock: 45,
    status: "In Stock",
  },
  {
    id: "3",
    name: "Handmade Ginger black tea",
    image: "/products/ginger.jpg?height=50&width=50",
    category: "Black",
    flavour: "Ginger",
    price: 12.99,
    stock: 67,
    status: "In Stock",
  },
  {
    id: "4",
    name: "Handmade Heen Bovitiya green tea",
    image: "/products/heenBovitiya.jpg?height=50&width=50",
    category: "Green",
    flavour: "Heen Bovitiya",
    price: 59.99,
    stock: 0,
    status: "Out of Stock",
  },
];

// Get unique categories from products
const categories = Array.from(
  new Set(products.map((product) => product.category))
);

// Find min and max price for slider
const minPrice = Math.min(...products.map((product) => product.price));
const maxPrice = Math.max(...products.map((product) => product.price));

export default function ProductTable() {
  const [productList, setProductList] = useState(products);
  const [nameFilter, setNameFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRange, setPriceRange] = useState([0, maxPrice]);

  const handleDelete = (id: string) => {
    setProductList(productList.filter((product) => product.id !== id));
  };

  // Apply filters to products
  const filteredProducts = products.filter((product) => {
    // Name filter (case-insensitive)
    const nameMatch = product.name
      .toLowerCase()
      .includes(nameFilter.toLowerCase());

    // Category filter
    const categoryMatch =
      categoryFilter === "" || product.category === categoryFilter;

    // Price range filter
    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    return nameMatch && categoryMatch && priceMatch;
  });

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Product Name</Label>
          <Input
            id="name"
            placeholder="Search products..."
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger id="category">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>
            Price Range: ${priceRange[0].toFixed(2)} - $
            {priceRange[1].toFixed(2)}
          </Label>
          <Slider
            min={minPrice}
            max={maxPrice}
            step={1}
            value={priceRange}
            onValueChange={setPriceRange}
            className="py-4"
          />
        </div>

        <div className="space-y-8 flex justify-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/products/addProducts">
                <Button>
                  <PackagePlus />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="left">Add Products</TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Flavour</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-center">Stock</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={50}
                    height={50}
                    className="rounded-md object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.flavour}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell className="text-right">
                  ${product.price.toFixed(2)}
                </TableCell>
                <TableCell className="text-center">{product.stock}</TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant={
                      product.status === "In Stock" ? "default" : "destructive"
                    }
                  >
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(product.id)}
                      >
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
