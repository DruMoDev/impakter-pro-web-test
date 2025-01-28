import GetStarted from "@/components/sections/get-started/get-started-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact for ESG SaaS Sales & Consultation | IMPAKTER PRO",
  description:
    "Reach out for sales, feedback, or ESG consultations. Our team is here to help with all your sustainability needs.",
};

export default function ContactUs() {
  return (
    <>
      <GetStarted />
    </>
  );
}
