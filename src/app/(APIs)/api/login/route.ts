import User from "@/lib/database/model/User";
import next from "next";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "@/lib/database/connect";
export async function POST(request: Request) {
  try {
    const { email, password, provider } = await request.json();

    await dbConnect();
    
    const user = await User.findOne({ "contact.email": email });
    if (!user) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 400 }
      );
    }
    if (!(await bcrypt.compare(user.password, password))) {
      return NextResponse.json(
        { message: "Password is incorrect" },
        { status: 401 }
      );
    }

    delete user.password;

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
