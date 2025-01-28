import Badge from "@/components/ui/badge";
import DividerSlim from "@/components/ui/divider-slim";
import imgBadge1 from "@/(routes)/about-us/assets/un-badge-1.svg";
import imgBadge2 from "@/(routes)/about-us/assets/un-badge-2.svg";
import imgBadge3 from "@/(routes)/about-us/assets/un-badge-3.svg";
import imgBadge4 from "@/(routes)/about-us/assets/un-badge-4.svg";
import imgBadge5 from "@/(routes)/about-us/assets/un-badge-5.svg";
import Image from "next/image";

const CARDS_INFO = [
  {
    title: "Quality education",
    img: imgBadge1,
    body: "It is an evolving set of systems ",
  },
  {
    title: "Quality education",
    img: imgBadge2,
    body: "It is an evolving set of systems ",
  },
  {
    title: "Quality education",
    img: imgBadge3,
    body: "It is an evolving set of systems ",
  },
  {
    title: "Quality education",
    img: imgBadge4,
    body: "It is an evolving set of systems ",
  },
  {
    title: "Quality education",
    img: imgBadge5,
    body: "It is an evolving set of systems ",
  },
];

export default function UNCommitment() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col gap-4 items-start">
          <Badge>United nations</Badge>
          <h2 className="h2-content">Our UN SDG Commitment</h2>
          <DividerSlim />
          <div className="grid grid-cols-1 lg:grid-cols-5 justify-between gap-6">
            {CARDS_INFO.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center gap-3">
                <h4 className="font-semibold">{card.title}</h4>
                <Image
                  src={card.img}
                  alt={card.title + " badge"}
                  height={150}
                  width={150}
                />
                <DividerSlim />
                <p className="p-content font-medium">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
