
export default async function Geolocation(){
  try {
  const key:string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;
    const result = await fetch(
      `https://www.googleapis.com/geolocation/v1/geolocate?key=${key}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { location } = await result.json();
    return location
  } catch (err) {
    throw err;
  }
}
