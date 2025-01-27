"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, LogIn, X } from "lucide-react";
import { EXTERNAL_LINKS } from "@/data/links/all-web-external-links";

const NAVBAR_LINKS = [
  {
    id: 1,
    title: "Solutions",
    link: "#",
    dropdown: true,
  },
  {
    id: 2,
    title: "Pricing",
    link: EXTERNAL_LINKS.pricing,
  },
  {
    id: 3,
    title: "Resources",
    link: EXTERNAL_LINKS.blog,
  },
  {
    id: 4,
    title: "Company",
    link: "#",
    dropdown: true,
  },
  {
    id: 5,
    title: "Book a demo",
    link: EXTERNAL_LINKS.contact,
    className: "btn btn-secondary",
  },
  {
    id: 6,
    title: "Sign in",
    link: EXTERNAL_LINKS.login,
    className: "btn btn-primary",
    icon: LogIn,
  },
];

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
        } uppercase font-bold justify-between flex lg:flex-row flex-col absolute lg:static z-50 w-full gap-6 lg:gap-10 items-center py-5 lg:py-1 transition-all duration-300`}>
        {NAVBAR_LINKS.map((link) => (
          <li key={link.id}>
            {link.dropdown ? (
              <button className="flex gap-1 uppercase">
                {link.title} <ChevronDown className="size-5 text-primary" />
              </button>
            ) : (
              <Link
                href={link.link}
                className={link.className}
                target="_blank"
                rel="noopener noreferrer">
                {link.icon && <link.icon className="size-4" />}
                {link.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
