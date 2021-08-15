import React from 'react';
import {useDispatch} from 'react-redux';
import {addPost} from './postsSlice';
const AddPost = () => {
	const dispatch = useDispatch();
	const addNewPost = () => dispatch(addPost('new post'));
	return (
		<div>
			<button onClick={addNewPost}>Add Post</button>
		</div>
	);
};

export default AddPost;
