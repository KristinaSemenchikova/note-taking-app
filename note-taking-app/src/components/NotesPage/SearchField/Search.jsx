import React, { useState } from "react";
import s from "./Search.module.scss";

const SearchField = ({  hashTags ,setTagFilter, tagFilter }) => {
  let onTagClick = e => {
    debugger
    e.preventDefault();
    setTagFilter(e.currentTarget.dataset.tagName);
  };
  let userTags;
  if (hashTags)
    userTags = hashTags.map((tag, i) => (
     tag !== tagFilter ?  <span onClick = {onTagClick} data-tag-name={tag}  key={i} className={s.tagItem}>
        {tag}
      </span>
      : <span onClick = {onTagClick} data-tag-name={tag}  key={i} className={s.active}>
      {tag}
    </span>
    ));
  return (
    <div className={s.search}>
      <span className={s.tagItem} onClick = {onTagClick} data-tag-name=''>All notes</span>
      <div className={s.tags}>{userTags} </div>
    </div>
  );
};

export default SearchField;
