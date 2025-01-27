import Badge from "@/components/ui/badge";
import { Banknote, Box, Clock, PiggyBank, UserCheck, Image } from "lucide-react";

export default function WhyImpkaterSection() {
  return (
    <section className="py-20 bg-primary-light">
      <div className="container flex flex-col gap-4">
        <div>
          <Badge>Explore</Badge>
        </div>
        <p className="p-content font-medium">
          Why Businesses Choose IMPAKTER PRO ESG Software
        </p>
        <h2 className="h2-content">
          We cover essentials of CSRD reporting and go beyond with value-adds to
          ensure you meet all your sustainability needs.
        </h2>

        <div className="grid grid-cols-3 mt-5 gap-5">
          <div className="flex justify-start gap-7 rounded-3xl p-5 shadow items-center">
            <Banknote className="text-primary size-7" />
            <p className="font-semibold text-base text-balance">
              Cost-Effective ESG Solutions
            </p>
          </div>

          <div className="flex justify-start gap-7 rounded-3xl p-5 shadow items-center">
            <Clock className="text-primary size-7" />
            <p className="font-semibold text-base text-balance">
              Time-Efficient Compliance
            </p>
          </div>

          <div className="flex justify-start gap-7 rounded-3xl p-5 shadow items-center">
            <UserCheck className="text-primary size-7" />
            <p className="font-semibold text-base text-balance">
              User-Friendly for ESG Beginners
            </p>
          </div>

          <div className="flex justify-start gap-7 rounded-3xl p-5 shadow items-center">
            <Box className="text-primary size-7" />
            <p className="font-semibold text-base text-balance">
              EU Regulation Ready
            </p>
          </div>

          <div className="flex justify-start gap-7 rounded-3xl p-5 shadow items-center">
            <PiggyBank className="text-primary size-7" />
            <p className="font-semibold text-base text-balance">
              No Consultancy Cost
            </p>
          </div>

          <div className="flex justify-start gap-7 rounded-3xl p-5 shadow items-center">
            <Image className="text-primary size-7" />
            <p className="font-semibold text-base text-balance">
              Daily ESG News & Updates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
