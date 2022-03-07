import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../share/baseURL";

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

// fetch Dishes
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));
  return fetch(baseUrl + "dishes")
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;
    }
  },
  error => {
        var errmess = new Error(error.message);
        throw errmess;
  })
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch(err => dispatch(dishesFailed(err.message)));
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errMess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errMess,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

// fetch Comments

export const fetchComments = () => (dispatch) => {
  dispatch(commentsLoading(true));
  fetch(baseUrl + "comments")
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;
    }
  },
  error => {
        var errmess = new Error(error.message);
        throw errmess;
  })
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch(err => dispatch(commentsFailed(err.message)))
    ;
    
};

export const commentsLoading = () => ({
  type: ActionTypes.COMMENTS_LOADING,
});

export const commentsFailed = (errMess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMess,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const fetchPromotions = () => (dispatch) => {
  dispatch(promotionsLoading(true));
  fetch(baseUrl + "promotions")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((promotions) => dispatch(addPromotions(promotions)))
    .catch((err) => dispatch(promotionsFailed(err.message)));
};

export const addPromotions = (promotions) => ({
  type: ActionTypes.ADD_PROMOTIONS,
  payload: promotions,
});

export const promotionsLoading = () => ({
  type: ActionTypes.PROMOTIONS_LOADING,
});

export const promotionsFailed = (errMess) => ({
  type: ActionTypes.PROMOTIONS_FAILED,
  payload: errMess,
});
