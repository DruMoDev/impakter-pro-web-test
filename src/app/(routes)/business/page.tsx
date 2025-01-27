import ShowcaseReport from "@/components/sections/showcase-report/showcase-report-section";
import BetterROI from "./components/better-roi";
import Hero from "./components/hero-business";
import Reporting from "./components/reporting";
import GetStarted from "@/components/sections/get-started/get-started-section";
import FAQs from "@/components/sections/faqs/faqs";

export default function Business() {
  return (
    <>
      <Hero />
      <BetterROI />
      <Reporting />
      <ShowcaseReport />
      <FAQs title="FAQs for ESG Software in the EU" faqs={[]} />
      <GetStarted />
    </>
  );
}
