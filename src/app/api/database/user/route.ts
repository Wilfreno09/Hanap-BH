import User from "@/lib/database/model/User";
import { UserDetailType } from "@/lib/types/user-detail-type";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ msg: "success" }, { status: 200 });
}

export async function PATCH(request: Request) {
  try {
    const form = await request.json();
    await User.updateOne(
      { "contact.email": form.email },
      {
        $set: {
          given_name: form.given_name,
          family_name: form.family_name,
          birth_date: form.birth_date,
          gender: form.gender,
        } as UserDetailType,
      }
    );

    return NextResponse.json({ message: "Update Success" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
