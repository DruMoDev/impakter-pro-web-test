import ImpakterProTextLogo from "@/components/ui/impakter-pro-text-logo";
import Image from "next/image";

export default function GetStartedSection() {
  return (
    <section className="py-20 bg-primary-light relative overflow-hidden">
      <div className="grid grid-cols-2 max-w-[1308px] mx-auto">
        <div className="flex flex-col gap-5 pr-20">
          <ImpakterProTextLogo />
          <h2 className="h2-content">Ready to get started?</h2>
          <p className="p-content font-semibold">
            From assessing your current ESG performance to road-mapping your
            path to comprehensive sustainability
          </p>
          <div className="flex gap-5">
            <button className="btn btn-primary">Contact Us</button>
            <button className="btn btn-secondary">Get Free Score</button>
          </div>
        </div>
      </div>
        <div className="absolute bottom-0 right-0 w-1/2 max-h-[90%]">
          <Image
            src={"/get-started-img.webp"}
            width={1316}
            height={549}
            alt="Dashboard image"
          />
        </div>
    </section>
  );
}
