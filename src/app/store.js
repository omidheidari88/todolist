import {configureStore} from '@reduxjs/toolkit';
import postsReducer from '../components/posts/postsSlice';
import commentsReducer from '../components/comments/commentsSlice';
export const store = configureStore({
	reducer: {
		posts: postsReducer,
		comments: commentsReducer,
	},
});
