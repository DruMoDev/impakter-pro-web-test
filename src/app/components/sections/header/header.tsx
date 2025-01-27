"use client";
// import Image from "next/legacy/image";
import Link from "next/link";
// import logo from "../../assets/img/logo.png";
import Navbar from "@/components/sections/header/navbar-header";
import ImpakterProTextLogo from "../../ui/impakter-pro-text-logo";

export default function Header() {
  return (
    <header className="h-[4rem] items-center flex relative border-b">
      <div className="max-w-[1308px] mx-auto items-center w-full flex justify-between px-5 lg:px-0">
        <Link href={"/"} className="font-bold">
          <ImpakterProTextLogo />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
