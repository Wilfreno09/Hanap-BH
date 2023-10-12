

export type RoomDetailType = {
  description: string;
  options: {
    price: number;
    occupant_count: number;
  }[];
  photo: PhotosType[];
};
