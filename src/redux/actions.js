import { CHANGE_YEAR, GET_PRASHA } from "./actionTypes";



export const changeYear = date => ({
    type: CHANGE_YEAR,
    payload: {date}
  });
  
  export const getPrasha = date => ({
    type: GET_PRASHA,
    payload: { date }
  });