import './App.css';
import { Likes } from './Likes/Likes';
import { StatusFilter } from './StatusFilter/StatusFilter';

export const App = () => {
  return (
  <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="https://images.prom.ua/6552777201_w600_h600_6552777201.jpg" alt="surfing"/>
            <Likes like={3}/>
            <StatusFilter/>
          </div>
        </div>
      </div>
    </div>
  );
};
