import Badge from "@/components/ui/badge";
import DividerSlim from "@/components/ui/divider-slim";
import Line from "@/components/ui/line";
import { BriefcaseBusiness, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <article className="w-full flex flex-col gap-2">
      <div>
        <Badge>Let&apos;s talk</Badge>
      </div>
      <h2 className="h2-content">Contact Us</h2>
      <Line />
      <p className="p-content">
        Fill out the form below and our sales team will get back to you as soon
        as possible
      </p>
      <p className="p-content font-semibold mt-3">General</p>
      <DividerSlim />
      <p className="p-content font-semibold">IMPAKTER LIMITED</p>
      <div>
        <p className="p-content">
          32 Lots Road, London SW10 0QJ, United Kingdom
        </p>
        <p className="p-content">Office Hours: 9.30 AM – 5.30 PM</p>
      </div>
      <Mail className="text-primary size-5 mt-5" />
      <p className="p-content font-semibold">Custom Service</p>
      <DividerSlim />
      <a
        href="mailto:impakter.pro@gmail.com"
        className="p-content w-fit underline">
        impakter.pro@gmail.com
      </a>

      <BriefcaseBusiness className="text-primary size-5 mt-5" />
      <p className="p-content font-semibold">Career at Impakter</p>
      <DividerSlim />
      <a href="mailto:info@gmail.com" className="p-content w-fit underline">
        info@gmail.com
      </a>
    </article>
  );
}
