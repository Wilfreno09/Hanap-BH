"use client";
import img1 from "../../../public/img/wallpaperflare.com_wallpaper (1).jpg";
import img2 from "../../../public/img/wallpaperflare.com_wallpaper (2).jpg";
import img3 from "../../../public/img/wallpaperflare.com_wallpaper (3).jpg";
import img4 from "../../../public/img/wallpaperflare.com_wallpaper (4).jpg";
import img5 from "../../../public/img/wallpaperflare.com_wallpaper.jpg";
import { motion } from "framer-motion";
export default function page() {
  const images = [img1, img2, img3, img4, img5];
  return (
    <main className="">
      <section className="flex flex-col mx-auto my-5 space-y-5 w-full bg-green-700">
        <h1 className="text-2xl font-semibold my-3 mx-3 md:text-4xl">
          Closest to you
        </h1>
        <motion.div className="cursor-grab overflow-hidden w-full">
          <motion.div drag="x" className="flex">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="flex flex-col mx-3 justify-between rounded-lg shadow-md bg-white"
              >
                <div className="aspect-video h-40 w-auto rounded-lg  bg-gray-900 hover:scale-105 sm:h-80 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
