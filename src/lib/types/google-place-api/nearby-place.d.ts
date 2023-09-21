export type NearbyPlaceType = {
  place_id: string;
  name: string;
  geometry: {
    location: LatLngLiteral;
  };
  photos: [
    {
      height: number;
      width: number;
      photo_reference: string;
    }
  ];
  rating: number;
  vicinity: string;
};
