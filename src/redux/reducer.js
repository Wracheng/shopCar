import { combineReducers } from 'redux'
function shoes (state = [], action) {
  if (action.type === 'ADD_SHOES') {
    let newState = [...state];
    newState.push({ id: action.id, size: action.size, count: action.count,price:action.price,name:action.name,src:action.src });
    return newState;
  }
  return state;
}

function record (state=[],action) {
  if (action.type === "RECORD") {
    let newState = [...state];
    newState.push({ id: action.id, size: action.size, count: action.count,price:action.price,name:action.name,src:action.src });
    return newState;
  }
  return state
}

let rootReducers = combineReducers({
  shoes,
  record
})

export default rootReducers