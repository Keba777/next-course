import { Resend } from "resend";
import WelcomeTemplate from "@/emails/WelcomTemplate";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "akkeba@gmail.com",
    to: "kibreabaklilu@gmail.com",
    subject: "...",
    react: <WelcomeTemplate name="Kibreab" />,
  });

  return NextResponse.json({});
}
