import React, { useEffect, useState } from "react";
import Story from "./Story";
import { faker } from "@faker-js/faker";
import { useSession } from "next-auth/react";

function Stories() {
	const [suggestion, setSuggestion] = useState([]);
	const { data: session } = useSession();
	useEffect(() => {
		const suggestion = [...Array(20)].map((_, i) => ({
			id: i,
			avartar: faker.image.avatar(),
			email: faker.internet.email(),
			fullName: faker.name.fullName(),
		}));
		setSuggestion(suggestion);
	}, []);

	return (
		<div
			className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm 
        overflow-x-auto sugScroll'
		>
			{session && (
				<Story img={session.user.image} username={session.user.username} />
			)}
			{suggestion.map((profile) => {
				return (
					<Story
						key={profile.id}
						img={profile.avartar}
						username={profile.fullName}
					/>
				);
			})}
		</div>
	);
}

export default Stories;
