import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import ClipLoader from 'react-spinners/ClipLoader';
import myImage from '../images/_72c0ec90-9e06-4cc1-9583-c3a3a9603314.jpg';

export default function Home() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true); // Add this line

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await fetch('/api/post/getPosts');
			const data = await res.json();
			setPosts(data.posts);
			setLoading(false); // Add this line
		};
		fetchPosts();
	}, []);

	return (
		<div>
			<div className="flex flex-col justify-center items-center gap-6 p-20 max-w-6xl mx-auto mt-10 bg-gray-100 rounded-lg shadow-lg">
				<div className="text-center text-md sm:text-left">
					<h1 className="text-4xl font-bold text-gray-700 lg:text-6xl py-3">
						Welcome to my Blog
					</h1>
					<p className="text-gray-500 text-xl py-3">
						Erimyne's Blog is a blog I created to share the latest news and
						updates on sports all around the world. The blog primarily focuses
						on football especially the top five leagues in the world. This blog
						will also keep you updated on the latests transfer rumours in
						football. I hope you enjoy reading my blog
					</p>
					<Link
						to="/search"
						className="text-sm sm:text-base text-teal-500 font-bold hover:underline py-3"
					>
						View all posts
					</Link>
				</div>
			</div>

			<div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
				{loading ? (
					<div className="flex justify-center items-start h-screen">
						<ClipLoader color="#000000" loading={loading} size={150} />
						Loading posts...
					</div>
				) : (
					posts &&
					posts.length > 0 && (
						<div className="flex flex-col gap-4 shadow-lg rounded-md pt-1">
							<h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
								Recent Posts
							</h2>
							<div className="flex flex-wrap gap-4 justify-center">
								{posts.map((post) => (
									<PostCard key={post._id} post={post} />
								))}
							</div>
							<Link
								to={'/search'}
								className="text-lg text-teal-500 hover:underline text-center dark:text-white"
							>
								View all posts
							</Link>
						</div>
					)
				)}
			</div>
		</div>
	);
}
