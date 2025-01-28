import { EXTERNAL_LINKS } from "@/data/links/all-web-external-links";
import Link from "next/link";

export default function LinksSection() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 text-sm gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold ">ESG Software</h3>
        <Link href={EXTERNAL_LINKS.esgToolBusiness}>
          ESG Tool for Companies
        </Link>
        <Link href={EXTERNAL_LINKS.esgToolSupply}>ESG Tool for Enterprise</Link>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-semibold ">Pricing</h3>
        <Link href={EXTERNAL_LINKS.pricing}>Plans & Pricing</Link>{" "}
        <Link href={EXTERNAL_LINKS.login}>*Free Initial ESG Score</Link>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-semibold ">Company</h3>
        <Link href={EXTERNAL_LINKS.aboutUs}>About Us</Link>{" "}
        <Link href={EXTERNAL_LINKS.contact}>Contact Us</Link>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-semibold ">IMPAKTER Platforms</h3>
        <Link href={EXTERNAL_LINKS.impakterMedia}>IMPAKTER Media</Link>
        <Link href={EXTERNAL_LINKS.impakterPro}>IMPAKTER PRO</Link>{" "}
        <Link href={EXTERNAL_LINKS.impakterIndex}>IMPAKTER INDEX</Link>
      </div>
    </div>
  );
}
