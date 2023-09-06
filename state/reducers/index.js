import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer";
import changeSelectedRecipe from "./selectedRecipeReducer";
import changeFilterReducer from "./changeFilterReducer";

const reducers = combineReducers({
  recipes: fetchReducer,
  selectedRecipe: changeSelectedRecipe,
  sortfilter: changeFilterReducer,
});

export default reducers;
