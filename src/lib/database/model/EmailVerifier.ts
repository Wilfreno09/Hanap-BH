import mongoose, { Schema } from "mongoose";

const EmailVerifierSchema: Schema = new Schema({
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
  mongoose.model("EmailVerifier", EmailVerifierSchema);
