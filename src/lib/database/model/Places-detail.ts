import { PlaceDetailType } from "@/lib/types/places-detail-types";
import mongoose, { Schema } from "mongoose";

const PlacesSchema: Schema = new Schema<PlaceDetailType>({
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
  location: {
    province: {
      type: String,
      default: undefined,
    },
    municipality: {
      type: String,
      default: undefined,
    },
    city: {
      type: String,
      default: undefined,
    },
    barangay: {
      type: String,
      default: undefined,
    },
    coordinate: {
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
      default: undefined,
    },
    width: {
      type: Number,
      default: undefined,
    },
    photo_reference: {
      type: String,
      default: undefined,
    },
  },
});

export default mongoose.models.PlaceDetail ||
  mongoose.model("PlaceDetail", PlacesSchema);
