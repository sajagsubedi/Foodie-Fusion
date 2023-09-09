const compareValue = (arg1, arg2) => {
  return JSON.stringify(arg1) == JSON.stringify(arg2);
};
const changeFilterReducer = (state, action) => {
  const stateStructure = {
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
  const defaultState = {
    isAction: false,
    fetchState: { ...stateStructure },
    currentState: { ...stateStructure },
  };
  if (!state) {
    state = { ...defaultState };
  }
  const { type, payload } = action;
  if (type == "change") {
    let toComparePayload = {
      ...payload.currentState,
      isquery: false,
    };
    if (compareValue(toComparePayload, defaultState.currentState)) {
      state = { ...defaultState };
      return defaultState;
    } else {
      let newState = {
        ...payload,
      };
      newState.currentState.isquery = true;
      state = { ...newState };
      return newState;
    }
  } else if (type === "clear") {
    if (
      !compareValue(
        payload.currentState.selectFilters,
        defaultState.currentState.selectFilters
      ) ||
      payload.currentState.searchQuery !== defaultState.currentState.searchQuery
    ) {
      let newState = {
        ...defaultState,
        isAction: true,
        currentState: { ...defaultState.currentState },
      };
      state = { ...newState };
      return newState;
    }
  }
  return state;
};
export default changeFilterReducer;
