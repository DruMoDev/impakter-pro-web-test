import Badge from "@/components/ui/badge";
import Line from "@/components/ui/line";
import Image from "next/image";

export default function ShowcaseReportSection() {
  return (
    <section className="py-20">
      <div className="container flex flex-col gap-y-5">
        <div>
          <Badge>Badges</Badge>
        </div>
        <h2 className="h2-content">
          Showcase Your Sustainability Reporting to Attract Customers
        </h2>
        <Line />
        <p className="p-content font-medium">
          Earn our sustainability badge as a payoff to your sustainability
          efforts. Display it digitally or physically to attract eco-conscious
          customers, investors, & partners.
        </p>
        <div className="grid grid-cols-2 gap-9  mx-auto w-3/4 mt-5">
          <div className="flex flex-col justify-between items-center gap-5 p-12 text-center text-balance border shadow-sm rounded-2xl">
            <div>
              <Image
                alt="IMPAKTER Badge 1"
                src={"/badge-1.webp"}
                className="w-full h-full"
                height={291}
                width={291}
              />
            </div>
            <h4 className="font-semibold text-xl">
              VERIFIED, if rated A or B for a given year
            </h4>
            <div>
              <Line />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-5 p-12 text-center text-balance border shadow-sm rounded-2xl ">
            <Image
              alt="IMPAKTER Badge 1"
              src={"/badge-2.webp"}
              className="w-full h-full"
              height={291}
              width={291}
            />
            <h4 className="font-semibold text-xl">
              PENDING, if rated C with exceptional progress in a year
            </h4>
            <div>
              <Line />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
