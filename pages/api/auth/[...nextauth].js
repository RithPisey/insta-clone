import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		// ...add more providers here
	],
	pages: {
		signIn: "/auth/signin",
	},
	callbacks: {
		async session({ session, token, user }) {
			session.user.username = session.user.name
				.split(" ")
				.join("")
				.toLocaleLowerCase();

			session.user.uid = token.sub;
			return session;
		},
	},
	secret: process.env.NEXT_PUBLIC_SECRET,
};
export default NextAuth(authOptions);

// providers: [
// 		GoogleProvider({
// 			clientId: process.env.GOOGLE_CLIENT_ID,
// 			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// 		}),
// 		// ...add more providers here
// 	],
// 	theme: {
// 		logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/900px-Instagram_logo_2022.svg.png",
// 		brandColor: "#F13287",
// 		colorScheme: "auto",
// 	},
