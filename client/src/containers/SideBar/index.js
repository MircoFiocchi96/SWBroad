import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, setLikeCategory } from './actions';
import { fetchStreams } from '../StreamsList/actions';
import {
  CategoriesList_ListSelector,
  CategoriesList_LoadingSelector,
} from './selectors';
import Loading from '../../components/Global/Loading';
import SideBar from '../../components/SideBar';

export default function CategoriesList() {
  const dispatch = useDispatch();
  const categories = useSelector(CategoriesList_ListSelector);
  const isLoading = useSelector(CategoriesList_LoadingSelector);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const callback = (data) => {
    const nameCategory = data.name.toLowerCase();
    dispatch(fetchStreams({ category: nameCategory }));
  };

  const setFavorite = ({ c, isFav }) => {
    const nameCategory = c.name.toLowerCase();
    dispatch(setLikeCategory({ category: nameCategory, like: isFav }));
  };

  const categoriesWithCallback = categories.map((c) => {
    return {
      ...c,
      onClick: () => {
        callback(c);
      },
      isFavorite: () => {
        setFavorite({ c, isFav: true });
      },
      isNotFavorite: () => {
        setFavorite({ c, isFav: false });
      },
    };
  });

  return isLoading ? (
    <Loading />
  ) : (
    <SideBar data={categoriesWithCallback}></SideBar>
  );
}
