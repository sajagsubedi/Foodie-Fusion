const changeSelectedRecipe = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "fetch":
      return { ...state, ...payload };
      break;
    default:
      return state;
  }
};
export default changeSelectedRecipe;
