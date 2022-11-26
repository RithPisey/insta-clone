import { faker } from "@faker-js/faker";
import React, { useEffect, useState } from "react";
function Suggestion() {
	const [suggestion, setSuggestion] = useState([]);
	useEffect(() => {
		const suggestion = [...Array(5)].map((_, i) => ({
			name: faker.name.fullName(),
			img: faker.image.avatar(),
			work: faker.company.name(),
			id: i,
		}));
		setSuggestion(suggestion);
	}, []);

	return (
		<div className='mt-4 ml-10'>
			<div className='flex justify-between text-sm mb-5'>
				<h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
				<button className='text-gray-600 font-semibold'>See All</button>
			</div>
			{suggestion.map((profile) => {
				return (
					<div
						key={profile.id}
						className='flex items-center justify-between mt-3'
					>
						<img
							className=' w-10 h-10 border p-[2px] rounded-full'
							src={profile.img}
							alt=''
						/>
						<div className='flex-1 ml-4'>
							<h2 className='font-semibold text-sm'>{profile.name}</h2>
							<h3 className='text-xs text-gray-400'>Works at {profile.work}</h3>
						</div>
						<button className='font-xm text-blue-400'>follow</button>
					</div>
				);
			})}
		</div>
	);
}

export default Suggestion;
