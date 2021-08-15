import React from 'react';
import {useSelector} from 'react-redux';
import Post from './Post';

const Posts = () => {
	const postIDs = useSelector((state) => state.posts.IDs);
	const showPost = postIDs?.map((postId) => <Post key={postId} id={postId} />);
	return <div>{showPost}</div>;
};

export default Posts;
