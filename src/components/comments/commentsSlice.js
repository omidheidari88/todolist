import {createSlice, nanoid} from '@reduxjs/toolkit';

// const initialState = [
// 	{
// 		commentId: 1,
// 		body: 'this is comment number 1',
// 	},
// ];
const initialState = {
	IDs: [],
	ID: {
		1: {
			commentId: 1,
			body: 'this is comment number 1',
		},
	},
};

export const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {
		addComment: {
			reducer(state, action) {
				const {comment} = action.payload;
				// state.push(comment);
				state.ID[comment.commentId] = comment;
				state.IDs.push(comment.commentId);
			},
			prepare(postId, body) {
				const commentId = nanoid();
				return {
					payload: {
						postId,
						comment: {commentId, body},
					},
				};
			},
		},
		updateComment: {
			reducer(state, action) {
				const {commentId, body} = action.payload;
				// state.map((comment) => {
				// 	if (comment.commentId === commentId) {
				// 		comment.body = body;
				// 	}
				// 	return false;
				// });
				state.ID[commentId].body = body;
			},
			prepare(postId, commentId, body) {
				return {
					payload: {
						postId,
						commentId,
						body,
					},
				};
			},
		},
	},
});

export const {addComment, updateComment} = commentsSlice.actions;

export default commentsSlice.reducer;
