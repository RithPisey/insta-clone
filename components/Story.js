import React from "react";

export default function Story({ img, username }) {
	return (
		<div>
			<img
				className='hover:scale-110 transition transform duration-200 ease-in-out h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer'
				src={img}
				alt='profile'
			/>
			<p className=' text-center text-xs w-14 truncate'>{username}</p>
		</div>
	);
}
