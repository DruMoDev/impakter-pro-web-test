import HeroSection from "./components/sections/hero/hero-section";
import ShowcaseReportSection from "./components/sections/showcase-report/showcase-report-section";
import ToolComparatorSection from "./components/sections/tool-comparator/tool-comparator-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ToolComparatorSection />
      <ShowcaseReportSection />
    </>
  );
}
