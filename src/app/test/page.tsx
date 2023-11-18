"use client";
export const dynamic = "force-dynamic";

import Error503 from "@/components/page/error/Error503";
import img1 from "../../../public/img/wallpaperflare.com_wallpaper (1).jpg";
import img2 from "../../../public/img/wallpaperflare.com_wallpaper (2).jpg";
import img3 from "../../../public/img/wallpaperflare.com_wallpaper (3).jpg";
import img4 from "../../../public/img/wallpaperflare.com_wallpaper (4).jpg";
import img5 from "../../../public/img/wallpaperflare.com_wallpaper.jpg";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Offline from "@/components/page/error/Offline";
import { useEffect, useState } from "react";
export default function page() {
  const images = [img1, img2, img3, img4, img5];
  const [data, setData] = useState();
  const path_name = usePathname();
  async function getData() {
    try {
      const api_response = await fetch("/api/test");
      const api_data = await api_response.json();
      setData(api_data.data);
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <section>
      <h1>{data}</h1>
    </section>
  );
}
