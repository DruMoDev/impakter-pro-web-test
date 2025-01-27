import FAQs from "./components/sections/faqs/faqs";
import GetStartedSection from "./components/sections/get-started/get-started-section";
import HeroSection from "./components/sections/hero/hero-homepage-section";
import ShowcaseReportSection from "./components/sections/showcase-report/showcase-report-section";
import ToolComparatorSection from "./components/sections/tool-comparator/tool-comparator-section";
import WhyImpkaterSection from "./components/sections/why-impakter/why-impakter-section";
import { FAQS_HOMEPAGE } from "./data/faqs/homepage";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ToolComparatorSection />
      <ShowcaseReportSection />
      <WhyImpkaterSection />
      <FAQs faqs={FAQS_HOMEPAGE} title="FAQs for ESG Software in the EU" />
      <GetStartedSection />
    </>
  );
}
