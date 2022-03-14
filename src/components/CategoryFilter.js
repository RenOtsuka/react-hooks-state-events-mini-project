import React from "react";

function CategoryFilter({categories, handleCategoryChange}) {

  const categoryList = categories.map(category => {
    return (<button key={categories.indexOf(category)} onClick={handleCategoryChange}>{category}</button>)
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
