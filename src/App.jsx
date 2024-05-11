import Filter from './components/Filter/Filter';
import List from './components/List/List';

const App = () => {
  return (
    <>
      <h1 className="mt-5">Tasks List</h1>
      <Filter />
      <div className="d-flex gap-2 w-50">
        <input
          type="text"
          className="px-3 rounded-3 border-0 w-75"
          placeholder="Add new task text"
        />
        <button type="button" className="btn btn-primary w-25">
          Add task
        </button>
      </div>
      <div className="d-flex gap-2 w-50 mt-4">
        <List />
      </div>
    </>
  );
};

export default App;
