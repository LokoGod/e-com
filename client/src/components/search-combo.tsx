"use client";

import React, { useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export function SearchCombo() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(""); // Track input value
  const [isFocused, setIsFocused] = useState(false); // Track input focus

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {/* Navbar Search Bar */}
      <div className="relative w-full max-w-md">
        <Command className="rounded-lg border shadow-md">
          <CommandInput
            placeholder="Search..."
            value={query}
            onValueChange={setQuery}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <CommandList>
            {
              query.length > 0 ? (
                <>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>Calendar</CommandItem>
                    <CommandItem>Search Emoji</CommandItem>
                    <CommandItem>Calculator</CommandItem>
                  </CommandGroup>
                </>
              ) : isFocused ? (
                // If the user is focused but hasn't typed anything
                <div className="p-2 text-sm text-gray-500">
                  Start typing to see suggestions
                </div>
              ) : null /* Not focused and no query => show nothing */
            }
          </CommandList>
        </Command>
      </div>

      {/* Modal Search Box (opens with Ctrl + K) */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
