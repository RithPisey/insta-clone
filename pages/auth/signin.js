import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import React from "react";
import Header from "../../components/Header";

function signin({ providers }) {
	return (
		<>
			<Header />
			<div className=' flex flex-col items-center justify-evenly -mt-32 min-h-screen py-2 px-14 text-center'>
				<div className='flex flex-col items-center justify-evenly h-56 mt-26'>
					<img
						className=' w-20'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/900px-Instagram_logo_2022.svg.png'
						alt=''
					/>
					<p className='font-xs italic'>
						This is not a REAL app, it is built for educational purpose only
					</p>
				</div>
				<div className='-mt-36'>
					{Object.values(providers).map((provider) => {
						return (
							<div key={provider.name}>
								<button
									className='p-3 bg-blue-500 rounded-lg text-white'
									onClick={() =>
										SignIntoProvider(provider.id, { callbackUrl: "/" })
									}
								>
									Sign in with {provider.name}
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

//Server side render
export async function getStaticProps() {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}

export default signin;
