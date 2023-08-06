import mongoose, { Schema } from "mongoose";

const PlacesSchema: Schema = new Schema({
  owner: {
    type: Schema.ObjectId,
    default: undefined,
  },
  place_id: {
    type: String,
    required: true,
  },
  vicinity: {
    type: String,
    required: true,
  },
  geometry: {
    location: {
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
  },
  name: {
    type: String,
    required: true,
  },
  photos: {
    height: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    photo_reference: {
      type: String,
      required: true,
    },
  },
});

export default mongoose.models.PlaceDetail ||
  mongoose.model("PlaceDetail", PlacesSchema);
