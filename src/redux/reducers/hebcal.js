import { CHANGE_YEAR, GET_PRASHA } from "../actionTypes";
import Hebcal from 'hebcal';
import * as moment from 'moment';

const city = 'Jerusalem'
let year = new Hebcal.GregYear().setCity(city);

const initialState = {
    //! init all year event from hebcal
    
  holedays: year.holidays,
  byDate: {},
  year:year.year
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_YEAR: {
      console.log("CHANGE_YEAR!!!")
     year.next();
      const { date } = action.payload;
      return { holidays: ['ghj'], year: 2020};

    }
    case GET_PRASHA: {
        console.log("GET_PRASHA!!!")
      const { date } = action.payload;
      return state.prasha[date];

    }
    default:
      return state;
  }
}