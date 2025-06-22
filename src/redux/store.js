import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';


const initialState = {
  tasks:[
    { id: 0, title: 'Learn new recipe', completed: false },
    { id: 1, title: 'Go for a walk', completed: true },
    { id: 2, title: 'Read a Redux article', completed: false },
    { id: 3, title: 'Write shopping list', completed: false },
  ],
  filters:{
    status:"all",
  }
}


const rootReducer = (state = initialState, action) => {
  return state;
}

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
