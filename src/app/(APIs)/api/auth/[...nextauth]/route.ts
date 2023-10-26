import User from "@/lib/database/model/User";
import { UserDetailType } from "@/lib/types/user-detail-type";
import nextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/database/mongoclient";
import dbConnect from "@/lib/database/connect";
const clientId = process.env.GOOGLE_CLIENT_ID;
if (!clientId) throw new Error("Missing GOOGLE_CLIENT_ID");

const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
if (!clientSecret) throw new Error("Missing GOOGLE_CLIENT_SECRET");

const secret = process.env.NEXTAUTH_SECRET;
if (!secret) throw new Error("Missing NEXTAUTH_SECRET");

const handler = nextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "youremail@example.com",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        try {
          const response = await fetch("/api/login", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
              provider: "credentials",
            }),
          });
          const { user } = await response.json();

          if (!user) {
            return null;
          }

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 30,
  },
  secret,
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    async signIn({ user, profile, account }) {
      console.log("Sign in:", { user, profile, account });
      try {
        if (account?.provider === "google") {
          await dbConnect();
          const user = await User.findOne({
            "contact.email": profile?.email,
          });

          if (!user) {
            const new_user = new User({
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
          }
        }
        return true;
      } catch (error) {
        console.log("Error: ", error);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        return {
          token: {
            ...user,
          },
        };
      }
      return token;
    },
    async session({ session, token }) {
      await dbConnect();

      const user_result = await User.findOne({
        "contact.email": token.email?.toLowerCase()!,
      }).select("-password -__v");

      const filtered_user = user_result.toJSON();
      filtered_user.id = filtered_user._id;
      delete filtered_user._id;

      if (!user_result) {
        return session;
      }
      session.user = filtered_user;
      console.log("SEssion:", session);
      return session;
    },
  },
});

export { handler as GET, handler as POST };
