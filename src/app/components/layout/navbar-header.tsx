"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, LogIn, X } from "lucide-react";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <nav>
      <button
        className="block lg:hidden ml-auto"
        onClick={() => setIsMenu(!isMenu)}>
        {isMenu ? (
          <X className="size-7" />
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6C19 6.55228 18.5523 7 18 7H6C5.44772 7 5 6.55228 5 6ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM5 18C5 17.4477 5.44772 17 6 17H18C18.5523 17 19 17.4477 19 18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18Z"
              fill="#743C5F"
            />
          </svg>
        )}
      </button>
      <ul
        className={`${
          isMenu ? "top-[3.4rem] right-0" : "top-[3.4rem] -left-full"
        } uppercase text-clamp-small font-bold justify-between flex lg:flex-row flex-col absolute lg:static  bg-white z-50 w-full gap-6 lg:gap-10 items-center py-5 lg:py-0 transition-all duration-300 tracking-primary`}>
        <li>
          <button className="flex gap-1 uppercase">
            Solutions <ChevronDown className="size-5 text-primary" />
          </button>
        </li>

        <li>
          <Link href="/pricing-pageh" target="_blank" rel="noopener noreferrer">
            Pricing
          </Link>
        </li>

        <li>
          <Link href="/blog-page" target="_blank" rel="noopener noreferrer">
            Resources
          </Link>
        </li>
        <li>
          <button className="flex gap-1 uppercase">
            Company <ChevronDown className="size-5 text-primary" />
          </button>
        </li>
        <li>
          <Link href="/book-a-demo" className="btn btn-secondary">
            Book a demo
          </Link>
        </li>
        <li>
          <Link href="/sign-in" className="btn btn-primary">
            <LogIn className="size-4" />
            Sign in
          </Link>
        </li>
      </ul>
    </nav>
  );
}
