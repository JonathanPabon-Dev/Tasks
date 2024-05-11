import { useSelector } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import FilterBtn from '../FilterBtn/FilterBtn';

const Filter = () => {
  const filter = useSelector(state => state.filters.status);
  return (
    <div className="d-flex gap-2 my-4">
      <FilterBtn selected={filter === statusFilters.all} text="All" />
      <FilterBtn selected={filter === statusFilters.active} text="Active" />
      <FilterBtn
        selected={filter === statusFilters.completed}
        text="Completed"
      />
    </div>
  );
};

export default Filter;
