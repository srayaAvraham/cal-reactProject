import Hebcal from 'hebcal';
import * as moment from 'moment';

const city = 'Jerusalem'
//export let year = new Hebcal.GregYear().setCity(city);
// export let HDate = Hebcal.HDate().setCity(city)

export const sedra =  function (start, end) {
    start = moment(start);
    end = moment(end);
    let prashaEvent = [];
    for (let day = start; day.isBefore(end); day.add(1, 'days')){
        if(day.weekday() === 6){
            let prasha =  new Hebcal.HDate(day._d).setCity(city).getParsha('h');
            prashaEvent[new Hebcal.HDate(day._d).toString()] = prasha;
    }}
   // year['prashaEvent'] = prashaEvent;
    return prashaEvent;
}
     //sedra(moment().startOf('year'),moment().endOf('year'));
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
       // return year.holidays[Hebcal.HDate(date).toString()];
    }

    export const prasha = function (date) {
       // return year.prashaEvent[Hebcal.HDate(date).toString()];
    }

    export const candleLighting = function (date) {
        return new Hebcal.HDate(date).setCity(city).candleLighting()
    }

    export const havdalah = function (date) {
        return new Hebcal.HDate(date).setCity(city).havdalah()
    }
    // export const changeYear1 = function(date){
    //     if(date.getFullYear()  > year.year)
    //         year = year.next();
    //         //sedra(moment().startOf('year'),moment().endOf('year'));
    //     else if(date.getFullYear()  < year.year)
    //         year = year.prev();
    //     return year
    // }

    export const  getHebDay = function (date) {
        date = moment(date);
        let hebDay = Hebcal.gematriya(new Hebcal.HDate(date._d).getDate()); 
        return hebDay;
    }

    export const getDateString = function (date){
       let Hdate =  Hebcal.HDate().toString();
       Hdate = Hdate.split(' ');
       return {
           year: Hdate[Hdate.length-1],
           day: Hdate[0],
           month: Hdate.slice(1, Hdate.length-1).toString()
       }
    }
