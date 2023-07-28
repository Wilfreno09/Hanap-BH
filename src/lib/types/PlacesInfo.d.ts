export interface PlacesInfo {
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  place_id: string;
  rating: string;
  reference: string;
  scope: string;
  types: string;
  user_ratings_total: number;
  vicinity: string;
}

export interface PlaceDetail {
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  name: string;
  photos: {
    height: number;
    photo_reference: string;
    width: number;
  };
  place_id: string;
  vicinity: string;
}
