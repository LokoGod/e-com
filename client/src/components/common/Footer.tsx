import Link from "next/link";
import clsx from "clsx";
import { Suspense } from "react";

import { FaConnectdevelop, FaArrowRightFromBracket } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2024
  const copyrightName = "Tech Comp 101" || "Key-Master" || "";

  return (
    <>
      <footer className="text-sm text-neutral-500 dark:text-neutral-400 mt-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm dark:border-neutral-700 md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
          <div>
            <Link
              className="flex items-center gap-2 text-black dark:text-white md:pt-1"
              href="/"
            >
              <FaConnectdevelop size={25} />
              <span className="uppercase">{"Key-Master"}</span>
            </Link>
          </div>
          <nav  className="flex">
            <ul className="mr-20">
              <li>
                <Link
                  href={"#"}
                  className={clsx(
                    "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
                  )}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={clsx(
                    "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
                  )}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={clsx(
                    "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
                  )}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={clsx(
                    "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
                  )}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={clsx(
                    "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
                  )}
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={clsx(
                    "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
                  )}
                >
                  Shipping & Return Policy
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={clsx(
                    "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
                  )}
                >
                  FAQ
                </Link>
              </li>
            </ul>

            <ul className="mr-20">
              <li>
                <Link
                  href={"#"}
                  className={clsx(
                    "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
                  )}
                >
                  Locations
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={clsx(
                    "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
                  )}
                >
                  More
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={clsx(
                    "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
                  )}
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={clsx(
                    "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
                  )}
                >
                  Corporate Sales
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={clsx(
                    "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
                  )}
                >
                  After Sales Service
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={clsx(
                    "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
                  )}
                >
                  Delivery policy
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={clsx(
                    "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
                  )}
                >
                  Return and exchange policy
                </Link>
              </li>
            </ul>

            <ul className="mr-20">
              <li>
                <Link
                  href={"#"}
                  className={clsx(
                    "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
                  )}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={clsx(
                    "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
                  )}
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={clsx(
                    "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
                  )}
                >
                  Shipping & Return Policy
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={clsx(
                    "block p-2 text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm",
                  )}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:ml-auto">
            <a
              className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white"
              aria-label="Deploy on Vercel"
              href="https://vercel.com/templates/next.js/nextjs-commerce"
            >
              <span className="px-3">
              <FaArrowRightFromBracket />
              </span>
              <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
              <span className="px-3">Sign-In</span>
            </a>
          </div>
        </div>
        <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
            <p>
              &copy; {currentYear} {copyrightName}
              {copyrightName.length && !copyrightName.endsWith(".")
                ? "."
                : ""}{" "}
              All rights reserved.
            </p>
            <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
            <p>Designed in Colombo</p>
            <p className="md:ml-auto">
              <a
                href="https://vercel.com"
                className="text-black dark:text-white"
              >
                Crafted by ▲ PearlWave Labs
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
