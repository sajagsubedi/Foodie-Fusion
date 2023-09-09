export const fetchRecipes = (payload) => {
  return async (dispatch) => {
    let url =
      "https://api.spoonacular.com/recipes/random?apiKey=3ca61df6115c4e5a88ff46ef66e7d657&number=10";
    let resp = await fetch(url);
    resp = await resp.json();
    dispatch({
      type: "fetch",
      payload: {
        recipes: resp.recipes,
        url,
      },
    });
  };
};
export const fetchFilteredRecipes = (payload,callBack) => {
  return async (dispatch, getState) => {
    const mystate = getState().sortfilter;
    if (
      JSON.stringify(payload.currentState) ===
      JSON.stringify(mystate.fetchState)
    ) {
      return;
    }
    const { searchQuery, selectFilters } = payload.currentState;
    const diet = selectFilters[0].selectedOpt;
    const cuisine = selectFilters[1].selectedOpt;
    const meal = selectFilters[2].selectedOpt;
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=3ca61df6115c4e5a88ff46ef66e7d657&number=10`;
    if (searchQuery) {
      url = url + "&query=" + searchQuery;
    }
    if (diet) {
      url = url + "&diet=" + diet;
    }
    if (cuisine) {
      url = url + "&cuisine=" + cuisine;
    }
    if (meal) {
      url = url + "&type=" + meal;
    }
    let resp = await fetch(url);
    resp = await resp.json();
    const { number, offset, totalResults } = resp;
    callBack()
    dispatch({
      type: "fetch",
      payload: {
        recipes: resp.results,
        number,
        offset,
        totalResults,
        url,
      },
    });
  };
};
export const fetchSelectedRecipe = (payload) => {
  return (dispatch) => {
    dispatch({ type: "fetch", payload });
  };
};
export const fetchMoreRecipes = (payload) => {
  return async (dispatch) => {
    const { offset, url, number, sortfilter } = payload;
    let payloadData = {};
    let newUrl = url;
    if (sortfilter.isquery == true) {
      const skipVal = offset + number;
      newUrl = `${newUrl}&offset=${skipVal}`;
      payloadData.offset = skipVal;
      let resp = await fetch(newUrl);
      resp = await resp.json();
      payloadData.recipes = resp.results;
    } else {
      payloadData.offset = 0;
      payloadData.totalResults = -1;
      let resp = await fetch(newUrl);
      resp = await resp.json();
      payloadData.recipes = resp.recipes;
    }
    dispatch({
      type: "add",
      payload: { ...payloadData },
    });
  };
};

export const changeSortFilters = (payload) => {
  return async (dispatch) => {
    await dispatch({ type: "change", payload: payload });
  };
};
export const clearSortFilter = (payload) => {
  return (dispatch) => {
    dispatch({ type: "clear", payload: payload });
  };
};
