import { NextResponse } from "next/server";
import { Resend } from "resend";
import CodeSender from "@/components/email/CodeSender";
import EmailVerifier from "@/lib/database/model/EmailVerifier";
export async function POST(request: Request) {
  try {
    const api_key = process.env.RESEND_API_KEY;
    if (!api_key) throw new Error("RESEND_API_KEY is missing ");

    const resend = new Resend(api_key);

    const req = await request.json();

    const index = req.email.indexOf("@");
    const name = req.email.slice(0, index);
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ11234567890";
    let code = "";

    for (let i = 0; i <= characters.length; i++) {
      let random_number = Math.floor(Math.random() * characters.length);
      code += characters.substring(random_number, random_number + 1);
    }

    const email_verifier = new EmailVerifier({
      email: req.email,
      code,
    });

    await email_verifier.save();

    await resend.emails.send({
      from: "hanapbh.dev@gmail.com",
      to: req.email,
      subject: "Welcome to Hanap-BH",
      react: CodeSender({ name, code }),
    });
    return NextResponse.json({ msg: "done" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: error }, { status: 500 });
  }
}
