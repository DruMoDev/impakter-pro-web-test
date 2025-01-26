import Badge from "@/components/ui/badge";
import DividerSlim from "@/components/ui/divider-slim";
import Line from "@/components/ui/line";
import { CircleCheck, ExternalLink } from "lucide-react";

export default function ToolComparatorSection() {
  return (
    <section className="py-28">
      <div className="container">
        <div className="flex flex-col gap-y-5">
          <div>
            <Badge>Explore</Badge>
          </div>
          <h2 className="h2-content">
            Many Challenges of Corporate Sustainability Reporting. All Solved by
            One ESG Reporting Software.
          </h2>
          <Line />
          <p className="p-content font-semibold">
            From assessing your ESG performance to mapping your sustainability
            journey, our ESG tool offers support at every stage.
          </p>

          <div className="flex gap-7 mt-2">
            <div className="shadow-sm p-8 rounded-lg bg-white w-full hover:border-primary transition-all ease-in-out duration-300 border-2">
              <h4 className="font-semibold text-lg">ESG Tool for SMEs</h4>
              <DividerSlim />
              <ul className="space-y-3">
                <li className="flex gap-2 p-content font-medium">
                  <CircleCheck className="text-primary size-5" />
                  CSRD-compliant scorecard (in minutes)
                </li>
                <li className="flex gap-2 p-content font-medium">
                  <CircleCheck className="text-primary size-5" />
                  ESG progress report & action plan
                </li>
                <li className="flex gap-2 p-content font-medium">
                  <CircleCheck className="text-primary size-5" />
                  Sustainability badge (if qualified)
                </li>
                <li className="flex gap-2 p-content font-medium">
                  <CircleCheck className="text-primary size-5" />
                  ESG news & regulation updates
                </li>
              </ul>
              <button className="btn btn-primary mx-auto mt-8 ">
                Explore <ExternalLink className="size-4" />
              </button>
            </div>

            <div className="shadow-sm p-8 rounded-lg bg-white w-full hover:border-primary transition-all ease-in-out duration-300 border-2">
              <h4 className="font-semibold text-lg">
                ESG Tool for Enterprises
              </h4>
              <DividerSlim />
              <ul className="space-y-3">
                <li className="flex gap-2 p-content font-medium">
                  <CircleCheck className="text-primary size-5" />
                  Map entire supply chain by ESG score
                </li>
                <li className="flex gap-2 p-content font-medium">
                  <CircleCheck className="text-primary size-5" />
                  Manage supply chain ESG risks
                </li>
                <li className="flex gap-2 p-content font-medium">
                  <CircleCheck className="text-primary size-5" />
                  Track and monitor progress of suppliers
                </li>
                <li className="flex gap-2 p-content font-medium">
                  <CircleCheck className="text-primary size-5" />
                  Sustainable partner label (if qualified)
                </li>
              </ul>
              <button className="btn btn-primary mx-auto mt-8 ">
                Explore <ExternalLink className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
