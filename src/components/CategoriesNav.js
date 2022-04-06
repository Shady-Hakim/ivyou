import React from 'react';
import PropTypes from 'prop-types';

function CategoriesNav({ categories, categoryButtonHandler, activeCategory }) {
  return (
    <div className='btn-group'>
      <a
        type='button'
        href='/'
        role='button'
        id='dropdownMenuLink'
        aria-expanded='false'
        className='btn btn-primary dropdown-toggle'
        data-bs-toggle='dropdown'
      >
        {(activeCategory && activeCategory.name) || 'Select category'}
      </a>
      <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
        {categories
          && categories.map((category) => (
            <li key={category.id}>
              <button
                type='button'
                className={`dropdown-item ${
                  activeCategory && activeCategory.id === category.id
                    ? 'btn-primary active'
                    : 'btn-outline-primary'
                }`}
                onClick={() => categoryButtonHandler(category)}
              >
                {category.name}
              </button>
              <hr className='dropdown-divider' />
            </li>
          ))}
      </ul>
    </div>
  );
}
CategoriesNav.defaultProps = {
  activeCategory: undefined,
};
CategoriesNav.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  categoryButtonHandler: PropTypes.func.isRequired,
  activeCategory: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
export default CategoriesNav;
