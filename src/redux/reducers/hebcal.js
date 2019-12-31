import { CHANGE_YEAR, GET_PRASHA } from "../actionTypes";
import Hebcal from 'hebcal';
import * as moment from 'moment';
import { sedra } from '../../components/helpers/hebcal'

const city = 'Jerusalem'
let year = new Hebcal.GregYear().setCity(city);

const initialState = {
    //! init all year event from hebcal
    holidays: year.holidays,
    prasha: sedra(moment().startOf('year'), moment().endOf('year')),
    byDate: {},
    year: year.year
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_YEAR: {
            const { date } = action.payload;
            let prasha = [];
            if (date.getFullYear() > year.year) {
                year = year.next();
                prasha = sedra(moment(date).startOf('year'), moment(date).endOf('year'));
            }
            else if (date.getFullYear() < year.year) {
                year = year.prev();
                prasha = sedra(moment(date).startOf('year'), moment(date).endOf('year'));
            }
            return { ...state, holidays: year.holidays, year: year.year, prasha: prasha };

        }
        default:
            return state;
    }
}