import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { request } from 'src/utils/request';

const Blog = () => {
	const router = useRouter();
	const [post, setPosts] = useState<any>();

	useEffect(() => {
		const getBlogs = async () => {
			const response = await request(`${router.query.slug}`);
			setPosts(response.data);
			console.log(response.data);
		};
		getBlogs();
	}, [router.isReady]);

	return (
		<div>
			{post ? (
				<div className='p-4'>
					<p className='font-bold text-2xl'>{post.title}</p>
					<p>
						<span className='font-bold'>Category:</span> {post.category.title}
					</p>
					<iframe srcDoc={post.content} className='w-full h-screen'></iframe>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default Blog;
