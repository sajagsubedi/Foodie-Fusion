import React, { useEffect, useState } from "react";
import { RecipeSortMenu, SortToggleBtn } from "@/styles/ComponentStyles";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "@/state/index";
import { bindActionCreators } from "redux";

const SortMenu = ({ state }) => {
  const {
    isSortMenuActive,
    toggleSort,
    changeLoading,
    prevSortFilter,
    changePrevSortFilter,
  } = state;
  const sortfilter = useSelector((state) => state.sortfilter);
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const {
    fetchRecipes,
    changeSortFilters,
    clearSortFilter,
    fetchFilteredRecipes,
  } = bindActionCreators(actionCreators, dispatch);
  const sortData = [
    {
      heading: "Select Diet",
      id: "dietSort",
      options: [
        "Vegan",
        "Vegeterian",
        "Ketogenic",
        "Pescetarian",
        "Gluten Free",
        "Primal",
        "Paleo",
        "Whole30",
        "Lacto-Vegeterian",
        "Low FODMAP",
      ],
    },
    {
      heading: "Select cusine",
      id: "cusineSort",
      options: [
        "Asian",
        "American",
        "British",
        "Chinese",
        "European",
        "Italian",
        "Indian",
        "Japanese",
        "Korean",
        "Mexican",
      ],
    },
    {
      heading: "Select Meal",
      id: "mealSort",
      options: [
        "Main course",
        "Side Dish",
        "Dessert",
        "Salad",
        "Breakfast",
        "Soup",
        "Beverage",
        "Marinade",
        "Snack",
        "drink",
      ],
    },
  ];

  const handelSortChange = (ind, i) => {
    let newsortfilter = { ...sortfilter };
    newsortfilter.currentState.selectFilters[ind] = {
      active: false,
      selectedOpt: sortData[ind].options[i],
    };
    changeSortFilters(newsortfilter);
  };

  const toggleSelectMenu = (ind) => {
    let newsortfilter = { ...sortfilter };
    newsortfilter.currentState.selectFilters[ind] = {
      ...newsortfilter.currentState.selectFilters[ind],
      active: !newsortfilter.currentState.selectFilters[ind].active,
    };
    changeSortFilters(newsortfilter);
  };

  const handleSearchChange = (e) => {
    changeSortFilters({
      ...sortfilter,
      currentState: {
        ...sortfilter.currentState,
        searchQuery: e.target.value,
      },
    });
  };

  const handleApply = () => {
    let newObj = { ...sortfilter };
    newObj.isAction = true;
    let selectFilters = newObj.currentState.selectFilters.map((item) => {
      return { ...item, active: false };
    });
    newObj.currentState.selectFilters = [...selectFilters];
    changeSortFilters(newObj);
    toggleSort();
  };
  const handleClear = () => {
    let newObj = { ...sortfilter };
    let selectFilters = newObj.currentState.selectFilters.map((item) => {
      return { ...item, active: false };
    });
    newObj.currentState.selectFilters = [...selectFilters];
    clearSortFilter(newObj);
    toggleSort();
  };
  const validateAct = () => {
    if (sortfilter.isAction == true) {
      changeLoading(true);
      window.scrollTo(0, 0);
      if (sortfilter.currentState.isquery == true) {
        const newSortFilter = JSON.parse(JSON.stringify(sortfilter));
        fetchFilteredRecipes(newSortFilter, () => {
          console.log("callbackRun")
          changeSortFilters({
            ...sortfilter,
            isAction: false,
            fetchState: { ...sortfilter.currentState },
          });
        });
      } else {
        fetchRecipes();
      }
      changeLoading(false);
    }
  };

  useEffect(() => {
    validateAct();
  }, [sortfilter]);
  return (
    <RecipeSortMenu isactive={`${isSortMenuActive}`}>
      <div className="closeBtnContainer">
        <div onClick={toggleSort}>
          <svg
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            width="1.5em"
          >
            <path
              fill="currentColor"
              d="M24 26.1 13.5 36.6q-.45.45-1.05.45-.6 0-1.05-.45-.45-.45-.45-1.05 0-.6.45-1.05L21.9 24 11.4 13.5q-.45-.45-.45-1.05 0-.6.45-1.05.45-.45 1.05-.45.6 0 1.05.45L24 21.9l10.5-10.5q.45-.45 1.05-.45.6 0 1.05.45.45.45.45 1.05 0 .6-.45 1.05L26.1 24l10.5 10.5q.45.45.45 1.05 0 .6-.45 1.05-.45.45-1.05.45-.6 0-1.05-.45Z"
            />
          </svg>
        </div>
      </div>
      <div className="sortHead">
        <h4 className="sortHeading">Sort Recipes</h4>
      </div>
      <div className="sortBody">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search for recipe"
            className="PrimaryInput"
            value={sortfilter.searchQuery}
            onChange={handleSearchChange}
          />
          <button className="btn PrimaryBtn" onClick={handleApply}>
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              width="1.5em"
            >
              <path
                fill="currentColor"
                d="M38.7 40.85 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L40.95 38.7q.45.4.45 1.025 0 .625-.5 1.125-.45.45-1.1.45-.65 0-1.1-.45Zm-19.85-12.3q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"
              />
            </svg>
          </button>
        </div>
        {sortData.map((data, ind) => {
          return (
            <div key={data.id} className="dietSort">
              <h5>{data.heading}</h5>
              <div
                className={`select-menu 
                ${
                  sortfilter.currentState.selectFilters[ind].active
                    ? "active"
                    : ""
                }`}
              >
                <div
                  className="select-btn"
                  onClick={() => toggleSelectMenu(ind)}
                >
                  <span className="sBtn-text">
                    {sortfilter.currentState.selectFilters[ind].selectedOpt
                      ? sortfilter.currentState.selectFilters[ind].selectedOpt
                      : "Select your option"}
                  </span>
                  <svg
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5em"
                    width="1.5em"
                  >
                    <path
                      fill="currentColor"
                      d="M24 30.15q-.3 0-.55-.1-.25-.1-.5-.35l-9.9-9.9q-.4-.4-.375-1.075.025-.675.425-1.075.5-.5 1.075-.425.575.075 1.025.475l8.8 8.8 8.8-8.8q.4-.4 1.075-.45.675-.05 1.075.45.5.4.425 1.05-.075.65-.475 1.1l-9.85 9.85q-.25.25-.5.35-.25.1-.55.1Z"
                    />
                  </svg>
                </div>

                <ul className="options">
                  {data.options.map((text, i) => {
                    return (
                      <li
                        key={i}
                        className="option"
                        onClick={() => handelSortChange(ind, i)}
                      >
                        <span className="option-text">{text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}

        <div className="ingridentSort">
          <h5>Add Ingridents available</h5>
        </div>
      </div>

      <div className="actionBtnContainer">
        <button className="SecondaryBtn btn" onClick={handleClear}>
          Clear
        </button>
        <button className="PrimaryBtn btn" onClick={handleApply}>
          Apply
        </button>
      </div>
    </RecipeSortMenu>
  );
};
export default SortMenu;
