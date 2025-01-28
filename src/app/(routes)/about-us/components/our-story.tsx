import Line from "@/components/ui/line";
import { EXTERNAL_LINKS } from "@/data/links/all-web-external-links";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function OurStory() {
  return (
    <section className="py-20 bg-primary-light">
      <div className="container flex flex-col gap-4 justify-center items-center">
        <Line />
        <h2 className="h2-content">Our Story</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5">
          <div className="flex flex-col gap-5">
            <p className="text-typo-secondary text-lg">
              In June 2014, IMPAKTER was born with the idea to become the
              ultimate inspiration for a sustainable lifestyle.
            </p>
            <p className="text-typo-secondary text-lg">
              We do this by building tools, stories and experience that makes
              sustainable living easy. From education to championing it. For
              individuals and institutions. Across the globe.
            </p>
            <div className="flex gap-5">
              <p className="p-content">visit:</p>
              <Link
                href={EXTERNAL_LINKS.impakterIndex}
                className="flex gap-2 text-sm text-[#743C5F] font-semibold items-center">
                IMPAKTER INDEX <ExternalLink className="size-4" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="p-content">
              We started with, <strong>IMPAKTER MEDIA</strong>, a sustainable
              business magazine. Our extended coverage spans from ESG, finance,
              business, climate tech, sustainable living, and more. With have
              established a community of thousands of loyal monthly readers who
              are inspired daily by hundreds of sustainability expert
              contributors, and dozens of
              <strong> global ESG partners</strong>.
            </p>
            <p className="p-content">
              We have developed a{" "}
              <strong>
                proprietary methodology to assess sustainability efforts
              </strong>{" "}
              of an organizations. This powers our marquee product IMPAKTER PRO.
              An ESG software for CSRD reporting for businesses designed for
              speed, cost & efficiency.
            </p>
            <p className="p-content">
              And we are constantly growing with more products and services:
            </p>
            <p className="p-content">
              ·{" "}
              <strong className="text-[#743C5F]">
                IMPAKTER INDEX
              </strong>
              , an encylopedia of yearly sustainability efforts by global
              companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
