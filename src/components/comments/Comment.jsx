import React from 'react';
import {useSelector} from 'react-redux';
import UpdateComment from './UpdateComment';

const Comment = ({id, postId}) => {
	const comment = useSelector((state) => state.comments.ID[id]);
	// const comment = comments.filter((comment) => comment.commentId === id)[0];
	const {commentId, body} = comment;
	return (
		<div>
			<h3>{commentId}</h3>
			<h4>{body}</h4>
			<UpdateComment postId={postId} commentId={commentId} />
		</div>
	);
};

export default Comment;
