"use client";
import {
  BanknotesIcon,
  HomeModernIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import KingBedRoundedIcon from "@mui/icons-material/KingBedRounded";
export default function Filters() {
  return (
    <section className="flex items-center">
      <button>
        <MapPinIcon />
        <p>nearby</p>
      </button>
      <button>
        <BanknotesIcon />
        <p>Price</p>
      </button>
      <button>
        <HomeModernIcon />
        <p>Vacant</p>
      </button>
      <button className="bg-red-500">
        <KingBedRoundedIcon className="text-5xl" />
        <p>Rooms Available</p>
      </button>
    </section>
  );
}
