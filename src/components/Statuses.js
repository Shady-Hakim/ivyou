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

export default Statuses;
