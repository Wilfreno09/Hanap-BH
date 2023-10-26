import User from "@/lib/database/model/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/database/connect";
export async function POST(request: Request) {
  try {
    const req = await request.json();

    await dbConnect();

    const user = await User.findOne({ "contact.email": req.email }).select(
      "-__v"
    );
    if (!user) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 400 }
      );
    }
    if (!(await bcrypt.compare(req.password, user.password))) {
      return NextResponse.json(
        { message: "Password is incorrect" },
        { status: 401 }
      );
    }
    const filtered_user = user.toJSON();
    delete filtered_user.password;
    return NextResponse.json({ user: filtered_user }, { status: 200 });
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
