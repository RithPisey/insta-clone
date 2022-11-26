import React, { useState, useEffect } from "react";
import Post from "./Post";
import { faker } from "@faker-js/faker";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

function Posts() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		// const post = [...Array(5)].map((_, i) => ({
		// 	id: faker.datatype.number(),
		// 	avatar: faker.image.avatar(),
		// 	img: faker.image.imageUrl(500, 500, "", true),
		// 	caption: faker.lorem.sentences(),
		// 	fullName: faker.name.fullName(),
		// }));

		return onSnapshot(
			query(collection(db, "posts"), orderBy("timestamp", "desc")),
			(snapshot) => {
				setPosts(snapshot.docs);
			}
		);

		// setPosts(post);
	}, [db]);

	return (
		<div>
			{posts.map((post) => {
				return (
					<Post
						key={post.id}
						id={post.id}
						username={post.data().username}
						caption={post.data().caption}
						userImg={post.data().profileImg}
						postImg={post.data().image}
					/>
				);
			})}
		</div>
	);
}

export default Posts;
