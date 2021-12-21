import * as at from "../actions/actionTypes";

// REDUCER;
const allCampuses = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_ALL_CAMPUSES:
      return action.payload;
    case at.ADD_CAMPUS:
      return [...state, action.payload]
    case at.DELETE_CAMPUS:
      return state.filter(campus => campus.id!==action.payload); //removes campus with id 
    case at.EDIT_CAMPUS:
      //returns the updated campus object for the campus using its campus id
      return state.map(campus => { 
        return (
          campus.id===action.payload.id ? action.payload : campus 
        );
      });
    
    default:
      return state;
  }
};

export default allCampuses;