import { takeLatest, put, select } from 'redux-saga/effects';
import { FETCH_CATEGORIES, IS_LIKE_CATEGORY } from './constants';
import * as actionsSidebar from './actions';
import * as categoriesApi from '../../api/categories';
import {
  Auth_NicknameSelector,
  Auth_AccessTokenSelector,
} from '../Auth/selectors';
import { displayNotification } from '../Notifications/actions';
export default function* categoryListSaga() {
  yield takeLatest(FETCH_CATEGORIES, fetchCategories);
}

export function* fetchCategories() {
  try {
    const tokenSelector = yield select(Auth_AccessTokenSelector);
    const categories = yield categoriesApi.get(tokenSelector);
    yield put(actionsSidebar.fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(displayNotification({ message: error.message, type: 'error' }));
  }
}

export function* setLikeCategory() {
  yield takeLatest(IS_LIKE_CATEGORY, pathLikeCategory);
}

export function* pathLikeCategory(actions) {
  const nicknameSelector = yield select(Auth_NicknameSelector);
  const tokenSelector = yield select(Auth_AccessTokenSelector);
  const data = {
    ...actions.payload,
    nickname: nicknameSelector,
    token: tokenSelector,
  };
  try {
    yield categoriesApi.patch(data);
    yield put(
      displayNotification({ message: 'Your favorites categories has changed!' })
    );
    yield put(actionsSidebar.fetchCategories());
  } catch (error) {
    yield put(displayNotification({ message: error.message, type: 'error' }));
  }
}
