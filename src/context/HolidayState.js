import React, { useReducer } from "react";
import axios from "axios";
import HolidayContext from "./HolidayContext";
import HolidayReducer from "./HolidayReducer";

import { CLEAR_DATA, GET_HOLIDAY_DATA, SET_LOADING } from "./types";

;
const HolidayState = (props) => {
  const initialState = {
    data: [],
    filteredData: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(HolidayReducer, initialState);

  //Search uers
  const getData = () => {
    // setLoading();
    //API CALL
    const groupBy = (arr, key) => {
      const initialValue = {};
      return arr.reduce((acc, cval) => {
        const myAttribute = cval[key];
        acc[myAttribute] = [...(acc[myAttribute] || []), cval]
        return acc;
      }, initialValue);
    };


    fetch("https://date.nager.at/api/v2/publicholidays/2022/GB")
      .then((response) => response.json())
      .then((ResponseData) => {
        // const res = groupBy(ResponseData, "date");
        // console.log("Grouped result", res)
        dispatch({
          type: GET_HOLIDAY_DATA,
          payload: ResponseData,
        });
      });



  };

  //clear user
  const clearUsers = () => dispatch({ type: CLEAR_DATA });
  //set loading

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <HolidayContext.Provider
      value={{
        data: state.data,
        filteredData: state.filteredData,
        loading: state.loading,
        getData,
        clearUsers,
      }}
    >
      {props.children}
    </HolidayContext.Provider>
  );
};

export default HolidayState;
