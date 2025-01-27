import Image from "next/image";
import Line from "@/components/ui/line";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DividerSlim from "@/components/ui/divider-slim";
import { EXTERNAL_LINKS } from "@/data/links/all-web-external-links";

export default function HeroSection() {
  return (
    <section>
      <div className="flex flex-col  lg:mt-20 lg:gap-5 container relative">
        
          <Image
            src={"/hero-homepage.svg"}
            alt="Hero Image"
            height={300}
            width={300}
            className="lg:absolute -right-52 -top-52 w-auto static"
          />
        
        <div className="flex flex-col items-center text-center gap-y-3 md:gap-y-5 lg:text-start lg:items-start w-full lg:w-[45%]">
          <h1 className="h1-content ">
            ESG Software for CSRD Reporting: Easy. Affordable. Fast.
          </h1>
          <Line />
          <p className="p-content font-semibold">
            ESG Tool for 360° sustainability solution for EU businesses across
            all sectors.
          </p>
          <ul className="flex flex-col gap-2 md:flex-row md:gap-5 lg:flex-col lg:gap-2 lg:">
            <li className="p-content">· No Training Required</li>
            <li className="p-content">· Zero Consultancy Fee</li>
            <li className="p-content">· Setup within minutes</li>
          </ul>

          <DividerSlim />
          <Link href={EXTERNAL_LINKS.login} className="gap-2 btn btn-secondary">
            Free esg score <ArrowRight />
          </Link>
          <p className="p-content font-medium">*no credit card required</p>
        </div>
      </div>
    </section>
  );
}
