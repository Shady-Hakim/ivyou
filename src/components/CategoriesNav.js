function CategoriesNav({ categories, categoryButtonHandler, activeCategory }) {
  return (
    <div className='btn-group'>
      <button
        type='button'
        className='btn btn-primary dropdown-toggle'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        {(activeCategory && activeCategory.name) || 'Select category'}
      </button>
      <ul className='dropdown-menu'>
        {categories &&
          categories.map((category) => (
            <li key={category.id}>
              <button
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
    // <div
    //   className='btn-group flex-wrap'
    //   role='group'
    //   aria-label='Basic outlined example'
    // >
    //   {categories &&
    //     categories.map((category) => (
    //       <button
    //         key={category.id}
    //         type='button'
    //         className={`btn ${
    //           activeId === category.id ? 'btn-primary' : 'btn-outline-primary '
    //         }`}
    //         onClick={() => categoryButtonHandler(category.id)}
    //       >
    //         {category.name}
    //       </button>
    //     ))}
    // </div>
  );
}

export default CategoriesNav;
