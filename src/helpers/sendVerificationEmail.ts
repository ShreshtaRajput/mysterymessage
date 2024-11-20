import resend from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { apiResponse } from "@/types/apiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<apiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "hello world",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: "Email was sent successfully" };
  } catch (emailError) {
    console.error("Failed to send email", emailError);
    return { success: false, message: "Error sending the email" };
  }
}
