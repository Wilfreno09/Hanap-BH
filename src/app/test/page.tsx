"use client";
import Error503 from "@/components/page/error/Error503";
import img1 from "../../../public/img/wallpaperflare.com_wallpaper (1).jpg";
import img2 from "../../../public/img/wallpaperflare.com_wallpaper (2).jpg";
import img3 from "../../../public/img/wallpaperflare.com_wallpaper (3).jpg";
import img4 from "../../../public/img/wallpaperflare.com_wallpaper (4).jpg";
import img5 from "../../../public/img/wallpaperflare.com_wallpaper.jpg";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Offline from "@/components/page/error/Offline";
export default function page() {
  const path_name = usePathname();
  console.log(path_name);
  const images = [img1, img2, img3, img4, img5];
  return <Offline />;
}
