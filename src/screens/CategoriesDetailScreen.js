import React from 'react';
import CategoriesDetailBox from '@components/categories/CategoriesDetailBox';

const categoriesDetailBox = props => {
  return <CategoriesDetailBox params={props.route.params} />;
};

export default categoriesDetailBox;
