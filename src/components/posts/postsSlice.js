import {createSlice, nanoid} from '@reduxjs/toolkit';
import {addComment, updateComment} from '../comments/commentsSlice';

// const initialState = [
// 	{
// 		postId: 1,
// 		body: 'new post',
// 		comments: [],
// 	},
// ];
const initialState = {
	IDs: [],
	ID: {
		1: {
			postId: 1,
			body: 'new post',
			comments: [],
		},
	},
};

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addPost: {
			reducer(state, action) {
				// state.push(action.payload);
				state.ID[action.payload.postId] = action.payload;
				state.IDs.push(action.payload.postId);
			},
			prepare(body) {
				const postId = nanoid();
				return {
					payload: {postId, body, comments: []},
				};
			},
		},
	},
	extraReducers: (builder) => {
		builder.addCase(addComment, (state, action) => {
			const {postId, comment} = action.payload;
			// state.map((post) => {
			// 	if (post.postId === postId) {
			// 		post.comments.push(comment.commentId);
			// 	}
			// 	return false;
			// });
			state.ID[postId].comments.push(comment.commentId);
		});
	},
});

export const {addPost} = postsSlice.actions;

export default postsSlice.reducer;
