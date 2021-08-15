import React from 'react';
import {useSelector} from 'react-redux';
import AddComment from '../comments/AddComment';
import Comment from '../comments/Comment';
const Post = ({id}) => {
	const post = useSelector((state) => state.posts.ID[id]);
	const {postId, body, comments} = post;
	const showComment = comments?.map((commentId) => (
		<Comment id={commentId} postId={postId} />
	));
	return (
		<div id={postId}>
			<h1>post ID:{postId}</h1>
			<h4>post Body:{body}</h4>

			<h1>Comment</h1>

			<h6>{showComment}</h6>

			<AddComment postId={postId} />
		</div>
	);
};

export default Post;
