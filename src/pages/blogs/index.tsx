import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { request } from 'src/utils/request';

const Blogs = () => {
	// const [blogs] = useBlog();
	const [blogs, setBlogs] = useState<{
		itemCount: number;
		pageCount: number;
		posts: any[];
	}>();

	const router = useRouter();

	const readMore = (slug: string) => {
		router.push(`/blogs/${slug}`);
	};

	useEffect(() => {
		const getBlogs = async () => {
			const response = await request();
			setBlogs(response.data);
			console.log(response.data);
		};
		getBlogs();
	}, []);

	return (
		<div className='p-4'>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
				{blogs?.posts.map((post, index) => (
					<div
						className='card bg-base-100 shadow-xl hover:cursor-pointer hover:shadow-2xl'
						key={`post-${index}`}
						onClick={() => readMore(post.slug)}>
						<figure>
							<img src={post.image} alt={post.slug} />
						</figure>
						<div className='card-body'>
							<h2 className='card-title'>{post.title}</h2>
							<p>{post.summary}</p>
							<div className='card-actions justify-between items-center'>
								<div>
									<span className='font-bold'>Category:</span>{' '}
									{post.category.title}
								</div>
								<button
									className='btn btn-primary'
									onClick={() => readMore(post.slug)}>
									Read more
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Blogs;
