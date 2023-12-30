"use client";

import Link from "next/link";

import { FaBacon, FaMagnifyingGlass } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <>
      <nav className="relative flex items-center justify-between p-4 lg:px-6">
        <div className="block flex-none md:hidden">
          {/* <MobileMenu menu={menu} /> */}
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <Link
              href="/"
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              {/* <LogoSquare /> */}
              <FaBacon />
              <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                {/* {SITE_NAME} */}
                E-Com
              </div>
            </Link>
            <ul className="ml-3 hidden gap-6 text-sm md:flex md:items-center">
              <li>
                <Link
                  href={""}
                  className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <div className="text-neutral-500  hover:text-black  dark:text-neutral-400 dark:hover:text-neutral-300">
                  Categories
                </div>
              </li>
            </ul>
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            {/* <Search /> */}
            <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
              <input
                type="text"
                name="search"
                placeholder="Search for products..."
                autoComplete="off"
                className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
              />
              <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
                <FaMagnifyingGlass className="h-4" />
              </div>
            </form>
          </div>
          <div className="flex justify-end md:w-1/3">
            <IoCartOutline />
          </div>
        </div>
      </nav>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
