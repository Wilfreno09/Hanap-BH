import dbConnect from "@/lib/database/connect";
import User from "@/lib/database/model/User";
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
      try {
        const user = await User.findOne({
          contact: { email: session.user?.email },
        });
        return user;
      } catch (error) {
        return session;
      }
    },
    async signIn({ profile }) {
      await dbConnect();

      try {
        const user = await User.findOne({ contact: { email: profile?.email } });

        if (!user) {
          const new_user = new User({
            given_name: profile?.given_name,
            middle_name: "",
            family_name: profile.family_name,
            profile_pic: profile.picture,
            contact: {
              email: profile?.email,
            },
          });

          await new_user.save();
        }

        return true;
      } catch (error) {
        return false;
      }
    },
  },
  debug: true,
});

export { handler as GET, handler as POST };
