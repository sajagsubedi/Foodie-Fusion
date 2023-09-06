const compareValue = (arg1, arg2) => {
  return JSON.stringify(arg1) == JSON.stringify(arg2);
};
const changeFilterReducer = (state, action) => {
  const defaultState = {
    isAction: false,
    isquery: false,
    searchQuery: "",
    selectFilters: [
      {
        active: false,
        selectedOpt: "",
      },
      {
        active: false,
        selectedOpt: "",
      },
      {
        active: false,
        selectedOpt: "",
      },
    ],
  };
  if (!state) {
    state = { ...defaultState };
  }
  const { type, payload } = action;
  if (type == "change") {
    let toComparePayload = { ...payload, isquery: false, isAction: false };
    if (compareValue(toComparePayload, defaultState)) {
      state = { ...defaultState };
      return defaultState;
    } else {
      state = { ...payload, isquery: true };
      return { ...payload, isquery: true };
    }
  } else if (type === "clear") {
    if (
      !compareValue(payload.selectFilters, defaultState.selectFilters) ||
      payload.searchQuery !== defaultState.searchQuery
    ) {
      state = { ...defaultState, isAction: true };
      return { ...defaultState, isAction: true };
    }
  }
  return state;
};
export default changeFilterReducer;
