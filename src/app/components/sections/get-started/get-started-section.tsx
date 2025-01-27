import ImpakterProTextLogo from "@/components/ui/impakter-pro-text-logo";
import Image from "next/image";

export default function GetStartedSection() {
  return (
    <section className="pt-20 bg-primary-light relative overflow-hidden">
      <div className="grid grid-cols-2 pl-20">
        <div className="flex flex-col gap-5">
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
        <div>
          <Image
            src={"/get-started-img.webp"}
            width={1316}
            height={549}
            alt="Dashboard image"
          />
        </div>
      </div>
    </section>
  );
}
