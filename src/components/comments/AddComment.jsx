import React from 'react';
import {useDispatch} from 'react-redux';
import {addComment} from '../comments/commentsSlice';
const AddComment = ({postId}) => {
	const dispatch = useDispatch();
	const addNewCommnet = () => dispatch(addComment(postId, 'im good baby'));
	return (
		<div>
			<button onClick={addNewCommnet}>Add Comment</button>
		</div>
	);
};

export default AddComment;
