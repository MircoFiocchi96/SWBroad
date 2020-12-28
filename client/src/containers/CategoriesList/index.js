import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function CategoriesList() {
  const categories = useSelector();
  useEffect(())
  return <SideBar categories={categories} />;
}
