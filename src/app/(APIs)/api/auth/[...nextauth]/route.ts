import dbConnect from "@/lib/database/connect";
import User from "@/lib/database/model/User";
import { GoogleProfileType } from "@/lib/types/session-type";
import { UserDetailType } from "@/lib/types/user-detail-type";
import nextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const clientId = process.env.GOOGLE_CLIENT_ID;
if (!clientId) throw new Error("Missing GOOGLE_CLIENT_ID");

const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
if (!clientSecret) throw new Error("Missing GOOGLE_CLIENT_SECRET");

const secret = process.env.NEXTAUTH_SECRET;
if (!secret) throw new Error("Missing NEXTAUTH_SECRET");

const handler = nextAuth({
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
  ],
  secret,
  callbacks: {
    async session({ session }) {
      await dbConnect();

      const user = await User.findOne({
        "contact.email": session.user?.email?.toLowerCase(),
      });

      return user;
    },

    async signIn({ profile }) {
      try {
        const user_profile = profile as GoogleProfileType;
        await dbConnect();
        const user = await User.findOne({
          "contact.email": profile?.email,
        });

        if (!user) {
          const new_user = new User<UserDetailType>({
            given_name: user_profile?.given_name.toLowerCase(),
            middle_name: "",
            family_name: user_profile.family_name.toLowerCase(),
            profile_pic: user_profile.picture,
            contact: {
              email: profile?.email?.toLowerCase()!,
              social_media: {
                facebook: "",
                twitter: "",
                instagram: "",
              },
              phone_number: [""],
            },
          });

          await new_user.save();
          console.log("new_user: ", new_user);
        }

        return true;
      } catch (error) {
        console.log("Error: ", error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
