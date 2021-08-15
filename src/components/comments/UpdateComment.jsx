import React from 'react';
import {useDispatch} from 'react-redux';
import {updateComment as update} from '../comments/commentsSlice';
const UpdateComment = ({postId, commentId}) => {
	const dispatch = useDispatch();
	const updateCommnetHandler = () => dispatch(update(postId, commentId, 'updated cmt'));
	return (
		<div>
			<button onClick={updateCommnetHandler}>update Comment</button>
		</div>
	);
};

export default UpdateComment;
