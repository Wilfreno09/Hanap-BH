export type PlaceDetail = {
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  name: string;
  photos: [
    {
      height: number;
      width: number;
      photo_reference: string;
    }
  ];
  place_id: string;
  vicinity: string;
}
