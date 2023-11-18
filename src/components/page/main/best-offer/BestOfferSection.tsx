import { PlaceDetailsType } from "@/lib/types/place-detail";
import BestOfferLoadingSkeleton from "./BestOfferLoadingSkeleton";
import dynamic from "next/dynamic";
const BestOfferList = dynamic(
  () => import("@/components/page/main/best-offer/BestOfferList"),
  {
    loading: () => <BestOfferLoadingSkeleton />,
  }
);
export default function BestOfferSection({
  data,
  token,
}: {
  token: string;
  data: PlaceDetailsType[];
}) {
  return (
    <section className="flex flex-col space-y-5 mt-10">
      <h1 className="text-3xl font-semibold my-5 mx-8 md:text-5xl">
        Best Offers Nearby
      </h1>
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center cursor-pointer">
        <BestOfferList token={token} data={data} />
      </div>
    </section>
  );
}
