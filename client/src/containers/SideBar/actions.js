import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  IS_LIKE_CATEGORY,
} from './constants';

export function fetchCategories() {
  return {
    type: FETCH_CATEGORIES,
  };
}

export function fetchCategoriesSuccess(categories) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    list: categories,
  };
}

export function setLikeCategory(payload) {
  return {
    type: IS_LIKE_CATEGORY,
    payload: payload,
  };
}
