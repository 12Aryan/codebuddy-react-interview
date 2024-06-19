import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://codebuddy.review/posts');
      const result = await response.json();
      setPosts(result.data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded shadow">
            <img src={post.avatar} alt="Author Avatar" className="w-16 h-16 rounded-full mb-4" />
            <h2 className="text-xl font-bold">{post.firstName} {post.lastName}</h2>
            <p>{post.writeup}</p>
            {post.image && <img src={post.image} alt="Post" className="w-full mt-4" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
