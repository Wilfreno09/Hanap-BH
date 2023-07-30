import { Avatar } from "@mui/material";
import styles from "./Content.module.css";
import Image from "next/image";
import { PlacePropTypes } from "@/lib/types/Props";
import Link from "next/link";
export default function Content({
  children,
  place_vicinity,
  place_name,
}: PlacePropTypes) {
  return <>{children}</>;
}
