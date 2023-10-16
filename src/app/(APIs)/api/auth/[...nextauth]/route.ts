import dbConnect from "@/lib/database/connect";
import User from "@/lib/database/model/User";
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
        "contact.email": session.user?.email?.toLowerCase()!,
      });
      if (!user) {
        session.user.birth_date = undefined;
        session.user.contact.phone_number = [];
        session.user.family_name = "";
        session.user.gender = undefined;
        session.user.given_name = "";
        session.user.middle_name = "";
        session.user.place_owned = [];
        session.user.profile_pic = session.user.image!;

        console.log("Session:...:", session);
        return session;
      }
      const new_user = { ...user };
      delete new_user.password;
      const { _doc } = new_user;
      session.user = _doc;

      return session;
    },

    async signIn({ profile }) {
      try {
        await dbConnect();
        const user = await User.findOne({
          "contact.email": profile?.email,
        });

        if (!user) {
          const new_user = new User<UserDetailType>({
            given_name: profile?.given_name.toLowerCase()!,
            middle_name: "",
            family_name: profile?.family_name.toLowerCase()!,
            profile_pic: profile?.picture!,
            contact: {
              email: profile?.email?.toLowerCase()!,
              social_media: {
                facebook: "",
                twitter: "",
                instagram: "",
              },
              phone_number: [],
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
