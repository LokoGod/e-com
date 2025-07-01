"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ShoppingCart, User, Menu, X, Gamepad2, Cpu, Keyboard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const categories = [
  {
    title: "Gaming",
    icon: Gamepad2,
    items: [
      { name: "Gaming Laptops", href: "#" },
      { name: "Gaming PCs", href: "#" },
      { name: "Consoles", href: "#" },
      { name: "Gaming Chairs", href: "#" },
    ],
  },
  {
    title: "Components",
    icon: Cpu,
    items: [
      { name: "Graphics Cards", href: "#" },
      { name: "Processors", href: "#" },
      { name: "Motherboards", href: "#" },
      { name: "RAM", href: "#" },
    ],
  },
  {
    title: "Peripherals",
    icon: Keyboard,
    items: [
      { name: "Keyboards", href: "#" },
      { name: "Mice", href: "#" },
      { name: "Headsets", href: "#" },
      { name: "Monitors", href: "#" },
    ],
  },
]

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [cartCount] = React.useState(3)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center space-x-2">
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="h-8 w-8 rounded-lg bg-white flex items-center justify-center"
              >
                <Gamepad2 className="h-5 w-5 text-black" />
              </motion.div>
            </div>
            <span className="text-xl font-bold bg-white bg-clip-text text-transparent">
              Disrupt
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {categories.map((category, index) => (
                  <NavigationMenuItem key={category.title}>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <NavigationMenuTrigger className="group">
                        <category.icon className="mr-2 h-4 w-4" />
                        {category.title}
                      </NavigationMenuTrigger>
                    </motion.div>
                    <NavigationMenuContent>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="grid w-[400px] gap-3 p-4"
                      >
                        {category.items.map((item) => (
                          <motion.div key={item.name} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                            <NavigationMenuLink
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.name}</div>
                            </NavigationMenuLink>
                          </motion.div>
                        ))}
                      </motion.div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <NavigationMenuLink
                      href="#"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      Deals
                      <Badge className="ml-2 bg-red-500 text-white">Hot</Badge>
                    </NavigationMenuLink>
                  </motion.div>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search, Cart, User Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <AnimatePresence>
                {isSearchOpen ? (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 300, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center"
                  >
                    <Input
                      placeholder="Search products..."
                      className="pr-10"
                      autoFocus
                      onBlur={() => setIsSearchOpen(false)}
                    />
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute right-0"
                      onClick={() => setIsSearchOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button size="sm" variant="ghost" onClick={() => setIsSearchOpen(true)}>
                      <Search className="h-4 w-4" />
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Cart */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="relative">
              <Button size="sm" variant="ghost">
                <ShoppingCart className="h-4 w-4" />
                {cartCount > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center"
                  >
                    {cartCount}
                  </motion.div>
                )}
              </Button>
            </motion.div>

            {/* User */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button size="sm" variant="ghost">
                <User className="h-4 w-4" />
              </Button>
            </motion.div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button size="sm" variant="ghost">
                      <Menu className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <div className="flex flex-col space-y-4 mt-8">
                    <div className="relative">
                      <Input placeholder="Search products..." className="pr-10" />
                      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </div>

                    {categories.map((category, index) => (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center space-x-2 font-medium">
                          <category.icon className="h-4 w-4" />
                          <span>{category.title}</span>
                        </div>
                        <div className="ml-6 space-y-1">
                          {category.items.map((item) => (
                            <motion.a
                              key={item.name}
                              href={item.href}
                              whileHover={{ x: 4 }}
                              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {item.name}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    ))}

                    <motion.a
                      href="#"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center space-x-2 font-medium"
                    >
                      <span>Deals</span>
                      <Badge className="bg-red-500 text-white">Hot</Badge>
                    </motion.a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
