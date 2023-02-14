import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { User } from '../../../types';
import { client } from '../../../utils/client';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: 'zwel',
  callbacks: {
    async session({ session, user, token }): Promise<any> {
      const userInfo = {
        _id: token?.sub!,
        _type: 'user',
        userName: token?.name!,
        image: token?.picture!,
      };

      await client.createIfNotExists(userInfo);
      return userInfo;
    },
  },
});
