import dbConnect from "@/lib/database/connect";
import User from "@/lib/database/model/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function POST(request: Request) {
  try {
    const {
      given_name,
      middle_name,
      family_name,
      gender,
      birth_date,
      profile_pic,
      email,
      password,
    } = await request.json();

    await dbConnect();

      const check_email = await User.findOne({ "contact.email": email });
      
    if (check_email) {
      NextResponse.json({ message: "Email already exist" }, { status: 409 });
    }
    const hashed_password = await bcrypt.hash(password, 14);
    const new_user = new User({
      given_name,
      family_name,
      middle_name,
      gender,
      birth_date,
      profile_pic,
      email,
      password: hashed_password,
    });
    await new_user.save();
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
