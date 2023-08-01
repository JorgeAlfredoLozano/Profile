// reducers/idiomaReducer.js

const initialState = {
    idioma: "ENG",
  };
  
  const idiomaReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_LANGUAGE":
        return {
          ...state,
          idioma: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default idiomaReducer;
  
  
  
  
  