import React from 'react';

function CategoriesNav({ categories, categoryButtonHandler, activeId }) {
  return (
    <div className='btn-group' role='group' aria-label='Basic outlined example'>
      {categories &&
        categories.map((category) => (
          <button
            key={category.id}
            type='button'
            className={`btn ${
              activeId === category.id ? 'btn-primary' : 'btn-outline-primary '
            }`}
            onClick={() => categoryButtonHandler(category.id)}
          >
            {category.name}
          </button>
        ))}
    </div>
  );
}

export default CategoriesNav;
