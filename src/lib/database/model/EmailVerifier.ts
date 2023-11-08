import { Schema } from "mongoose";

const EmailVerifier: Schema = new Schema({
  email: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});

export default mongoose.models.EmailVerifier ||
  mongoose.model("EmailVefier", EmailVerifier);
