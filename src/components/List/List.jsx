import { useSelector } from 'react-redux';

const List = () => {
  const tasks = useSelector(state => state.tasks);
  return (
    <ul className="list-group w-100">
      {tasks.map(task => (
        <li
          key={task.id}
          className={`list-group-item  d-flex justify-content-between align-items-center ${
            task.completed ? 'list-group-item-success' : ''
          }`}
        >
          <p
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            {task.text}
          </p>
          <button type="button" className="btn btn-danger">
            <i className="bi bi-trash-fill"></i>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
