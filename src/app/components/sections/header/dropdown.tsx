import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

export default function Dropdown({
  setIsMenu,
  name,
  links,
}: {
  setIsMenu: Dispatch<SetStateAction<boolean>>;
  name: string;
  links: { name: string; link: string }[];
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <li>
      <button
        className="flex gap-1 uppercase relative"
        onClick={() => setShowDropdown(!showDropdown)}>
        {name} <ChevronDown className="size-5 text-primary" />
        {showDropdown && (
          <div
            className="absolute flex flex-col bg-white border justify-start text-start text-nowrap rounded-lg  z-[9999] navbar-dropdown"
            onMouseLeave={() => setShowDropdown(!showDropdown)}>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className="border-b p-5 hover:text-primary transition-all duration-300"
                onClick={() => setIsMenu(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </button>
    </li>
  );
}
