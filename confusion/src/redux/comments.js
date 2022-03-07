import * as ActionTypes from "./ActionTypes";

const initialState = {
  isLoading: true,
  errMess: null,
  comments: [],
};

export const Comments = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      let comment = action.payload;
      let comments = { ...state }.comments;
      comment.rating
      ? (comment.rating = Number(comment.rating))
      : (comment.rating = Number("5"))
      comments.push(comment);
      console.log("Comment: ", comments);
      return { ...state, isLoading: false, comments: comments };

    case ActionTypes.ADD_COMMENTS:
      return { ...state, isLoading: false, comments: action.payload };

    case ActionTypes.COMMENTS_LOADING:
      return { ...state, isLoading: true, comments: [] };

    case ActionTypes.COMMENTS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
