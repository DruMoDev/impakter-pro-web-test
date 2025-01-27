import DividerSlim from "@/components/ui/divider-slim";
import LeftSection from "./left-section";
import RightSection from "./right-section";
import ImpakterProTextLogo from "@/components/ui/impakter-pro-text-logo";

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <LeftSection />
          <RightSection />
        </div>
        <DividerSlim />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-0">
          <div className="flex gap-3 flex-col lg:flex-row">
            <ImpakterProTextLogo />{" "}
            <p className="font-semibold">
              © 2024 Impakterpro.com All rights reserved
            </p>
          </div>

          <div className="flex gap-3 justify-end">
            <p className="font-semibold">Terms & Conditions</p>
            <span className="text-typo-secondary/50">|</span>
            <p className="font-semibold">Privacy Policy</p>
            <span className="text-typo-secondary/50">|</span>
            <p className="font-semibold">Contact Us</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
