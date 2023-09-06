const defaultState = {
  recipes: [],
  url: "",
  offset: 0,
  number: 0,
  totalResults: 0,
};

const fetchReducer = (state, action) => {
  if (!state) {
    state = { ...defaultState };
  }
  const { type, payload } = action;
  if (type == "fetch") {
    let newState = { ...state, ...payload };
    state = { ...newState };
    return newState;
  } else if (type == "add") {
    let newState = {
      ...state,
      offset: payload.offset,
      recipes: state.recipes.concat(payload.recipes),
    };
    state = { ...newState };
    return newState;
  } else {
    return state;
  }
};
export default fetchReducer;
