"use client";

import { useEffect, useState } from "react";

export default function test() {
  const [datas, setDatas] = useState([]);

  async function getData() {
    try {
      const response = await fetch(`/api/map/nearbyPlaces`);

      const { results } = await response.json();

      console.log(results);
      setDatas(results);
    } catch (err) {
      throw err;
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return <></>;
}
