"use client";
import { setRedirectRouter } from "@/lib/redux/slices/redirect-route-slice";
import { AppDispatch, useAppSelector } from "@/lib/redux/store";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function RouterSateSaver({
  children,
}: {
  children: React.ReactNode;
}) {
  const path_name = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  if (!path_name.endsWith("signup") && !path_name.endsWith("login")) {
    dispatch(setRedirectRouter({ route: path_name }));
  }
  return <>{children}</>;
}
