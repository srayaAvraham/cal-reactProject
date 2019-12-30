import Hebcal from 'hebcal';
import * as moment from 'moment';

const city = 'Jerusalem'
export let year = new Hebcal.GregYear().setCity(city);
// export let HDate = Hebcal.HDate().setCity(city)

export const sedra = async function (start, end) {
    start = moment(start);
    end = moment(end);
     let prashaEvent = [];
    for (let day = start; day.isBefore(end); day.add(1, 'days')){
        if(day.weekday() === 6){
            let prasha =  new Hebcal.HDate(day._d).getParsha('h');
            console.log(new Hebcal.HDate(day._d).toString());
            console.log(prasha);
            prashaEvent[new Hebcal.HDate(day._d).toString()] = prasha;
        //     prashaEvent.push({
        //         allDay: true,
        //         //className: "parashat",
        //        // hebrew: "פרשת וישלח",
        //         start: day.format('YYYY-MM-DD'),
        //         title: `פרשת ${prasha}`,
        //     })};
        // }
        // return prashaEvent;
    }}
    year['prashaEvent'] = prashaEvent;
}
     sedra(moment().startOf('year'),moment().endOf('year'));
    export const holidays = function (start, end) {
        start = moment(start);
        end = moment(end);
         let holidaysEvents = [];
        for (let day = start; day.isBefore(end); day.add(1, 'days')){
            //console.log(" hols " + day._d)
                let holidays = new Hebcal.HDate(day._d).holidays('h');
                holidays.forEach(element => {
                        holidaysEvents.push({
                            allDay: true,
                            className: "holiday",
                           // hebrew: "פרשת וישלח",
                            start: day.format('YYYY-MM-DD'),
                            title: element.getDesc('h'),
                        })
                    });

                }
            return holidaysEvents;
    }

    // export const holiday = function (date) {
    //     date = moment(date);
    //     let holiday = new Hebcal.HDate(date._d).holidays(); 
    //     return holiday;
    // }

    export const holiday = function (date) {
        return year.holidays[Hebcal.HDate(date).toString()];
    }

    export const prasha = function (date) {
        return year.prashaEvent[Hebcal.HDate(date).toString()];
    }

    export const candleLighting = function (date) {
        return new Hebcal.HDate(date).setCity(city).candleLighting()
    }

    export const havdalah = function (date) {
        return new Hebcal.HDate(date).setCity(city).havdalah()
    }
    export const changeYear = function(date){
        if(date.getFullYear()  > year.year)
            year = year.next();
            // sedra(moment().startOf('year'),moment().endOf('year'));
        else if(date.getFullYear()  < year.year)
            year = year.prev();
        return year
    }

    export const  getHebDay = function (date) {
        date = moment(date);
        let hebDay = Hebcal.gematriya(new Hebcal.HDate(date._d).day); 
        return hebDay;
    }