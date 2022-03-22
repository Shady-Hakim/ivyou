import React from 'react';
import PropTypes from 'prop-types';

function Statuses({ statuses }) {
  return (
    <ul className='text-start position-absolute b-1 statuses fw-bold'>
      {statuses.map((status) => (
        <li key={status.id} style={{ color: status.color }}>
          {status.name}
        </li>
      ))}
    </ul>
  );
}

Statuses.propTypes = {
  statuses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Statuses;
