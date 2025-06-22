import './StatusFilter.css';
import { useSelector } from 'react-redux';
import { statusFilters } from '../../redux/constants';


export const StatusFilter = () => {

  const filter = useSelector(state => state.filters.status);

  return (
    <div className="button-controls">
     {/*<button selected={filter === statusFilters.all}>All</button>*/}
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
};
