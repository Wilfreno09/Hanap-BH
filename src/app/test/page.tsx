"use client";

import Image from "next/image";

export default function test() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const photo_reference =
    "Aaw_FcK8BwUynLgh0xRujBjWKxPbyBOQ60UdCo_jCqLySh5tqn-DCffnup1fzshIpTFTMDrdT_oj4s8_m2yn45UC93Tun40o4x5fl0guoRqUc2VPETbGvEZPXdmv8u4taa3zEGxoR6_aN9tXJxBGJ60OPlz2ZT_EMEF11wlYtT3-yrTqEPhI";

  const maxwidth = 1004;
  return (
    <>
      test
      {/* <Image
        src={`https://maps.googleapis.com/maps/api/place/photo?key=${apiKey}&photo_reference=${photo_reference}&maxwidth=${maxwidth}`}
        alt="some image"
        fill
      /> */}
    </>
  );
}
