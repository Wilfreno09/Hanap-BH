import BestOfferLoadingSkeleton from "@/components/page/main/BestOfferLoadingSkeleton";
import NearbyLoadingSkeleton from "@/components/page/main/NearbyLoadingSkeleton";

export default function loading() {
  return (
    <>
      <NearbyLoadingSkeleton />
      <BestOfferLoadingSkeleton />
    </>
  );
}
