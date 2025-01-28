import { EXTERNAL_LINKS } from "@/data/links/all-web-external-links";
import { ChevronDown, LogIn } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

export default function NavbarLinks({
  isMenu,
  setIsMenu,
}: {
  isMenu: boolean;
  setIsMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const [showDropdownSolutions, setShowDropdownSolutions] = useState(false);
  const [showDropdownCompany, setShowDropdownCompany] = useState(false);

  return (
    <ul
      className={`${
        isMenu ? "left-0" : "-left-full"
      } uppercase top-[3.4rem] font-bold lg:justify-between flex lg:flex-row flex-col absolute lg:static z-50 w-full gap-8 lg:gap-10 lg:items-center py-20 lg:py-1 transition-all duration-500 bg-white lg:bg-transparent items-start pl-5 lg:pl-0 h-screen lg:auto text-base 2xl:text-sm`}>
      <li>
        <button
          className="flex gap-1 uppercase relative"
          onClick={() => setShowDropdownSolutions(!showDropdownSolutions)}>
          Solutions <ChevronDown className="size-5 text-primary" />
          {showDropdownSolutions && (
            <div
              className="absolute flex flex-col bg-white border justify-start text-start text-nowrap rounded-lg top-8"
              onMouseLeave={() =>
                setShowDropdownSolutions(!showDropdownSolutions)
              }>
              <Link
                href={EXTERNAL_LINKS.esgToolBusiness}
                className="border-b w-full h-full p-5 hover:bg-primary-light hover:text-primary transition-all duration-300"
                onClick={() => setIsMenu(false)}>
                ESG For Companies
              </Link>
              <Link
                href={EXTERNAL_LINKS.esgToolSupply}
                className="w-full h-full p-5 hover:bg-primary-light hover:text-primary transition-all duration-300"
                onClick={() => setIsMenu(false)}>
                ESG For Enterprises
              </Link>
            </div>
          )}
        </button>
      </li>
      <li>
        <Link href={EXTERNAL_LINKS.pricing}>Pricing</Link>
      </li>
      <li>
        <button
          className="flex gap-1 uppercase"
          onClick={() => setShowDropdownCompany(!showDropdownCompany)}>
          Company <ChevronDown className="size-5 text-primary" />
          {showDropdownCompany && (
            <div
              className="absolute flex flex-col bg-white border justify-start text-start text-nowrap rounded-lg top-14"
              onMouseLeave={() => setShowDropdownCompany(!showDropdownCompany)}>
              <Link
                href={EXTERNAL_LINKS.aboutUs}
                className="border-b w-full h-full py-4 px-10 hover:bg-primary-light hover:text-primary transition-all duration-300"
                onClick={() => setIsMenu(false)}>
                About Us
              </Link>
              <Link
                href={EXTERNAL_LINKS.contact}
                className="w-full h-full py-4 px-10 hover:bg-primary-light hover:text-primary transition-all duration-300"
                onClick={() => setIsMenu(false)}>
                Contact Us
              </Link>
            </div>
          )}
        </button>
      </li>
      <li>
        <Link href={EXTERNAL_LINKS.contact} className="btn btn-secondary">
          Book a demo
        </Link>
      </li>
      <li>
        <Link
          href={EXTERNAL_LINKS.login}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary flex gap-1 items-center">
          <LogIn className="size-4" />
          Sign in
        </Link>
      </li>
    </ul>
  );
}
