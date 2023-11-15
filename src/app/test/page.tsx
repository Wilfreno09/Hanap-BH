"use client";
export const dynamic = "auto";
export const revalidate = 0;
import { useEffect, useState } from "react";

export default function page() {
  const [data, setData] = useState();
  async function getData() {
    try {
      const api_resposne = await fetch("/api/test", {});
      const api_data = await api_resposne.json();
      setData(api_data);
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    getData();
    console.log("here");
  }, []);
  return <div>{JSON.stringify(data)}</div>;
}
