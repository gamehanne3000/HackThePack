import React from 'react';
import CategoriesDetailBox from '@components/categories/CategoriesDetailBox';
import {TitleWithBorder} from '@components/TitleWithBorder';

const categoriesDetailBox = props => {
  const titleFromCategory = props.route.params.detailUnit[0].category;
  return (
    <>
      <TitleWithBorder title={titleFromCategory} />
      <CategoriesDetailBox params={props.route.params} />
    </>
  );
};

export default categoriesDetailBox;
