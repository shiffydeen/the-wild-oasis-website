import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { createGuest, getGuest } from "./app/_lib/data-service";
 
export const { handlers, signIn, signOut, auth } = NextAuth({

  providers: [Google],

  callbacks: {
    authorized({auth, request}) {
      return !!auth?.user;
    },

    async signIn({user, account, profile}) {
     try {
        const exisitingGuest = await getGuest(user.email);
        if(!exisitingGuest) await createGuest({email: user.email, fullName: user.name});
        return true;
      } catch (error) {
        return false;
      }
    },

    async session({session, user}) {
      const guest = await getGuest(session.user.email)
      session.user.guestId = guest.id
      return session;
    }

  },

  pages: {
    signIn: "/login"
  }
})