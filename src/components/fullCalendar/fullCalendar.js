import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './fullCalendar.css';
import {sedra, holidays,getHebDay, changeYear1,candleLighting , havdalah} from '../helpers/hebcal';
import Day from '../day/day'
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
//import * as moment from 'moment';
import Hebcal from 'hebcal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as Logo } from '../../s.svg';
import { connect } from "react-redux";
import { changeYear } from "../../redux/actions";


const calendarRef = React.createRef();

function MyFullCalendar({holidays, changeYear}) {
  // console.log(getHolidays(new Date()));
    const [parshaEvents, setParshaEvents] = useState([]);
    const [holidaysEvents, setHolidays] = useState([]);
    const getEvents = () =>{
        let CA = calendarRef.current.getApi();
        //setParshaEvents(sedra(CA.state.dateProfile.currentRange.start,CA.state.dateProfile.currentRange.end));
        //setHolidays(holidays(CA.state.dateProfile.currentRange.start,CA.state.dateProfile.currentRange.end));
    }
    //First time
    let event = [];
    useEffect(()=> {
        //getEvents();
         //const table = document.getElementsByTagName('table');
        // table[0].dir = 'rtl'
        const button = document.getElementsByClassName("fc-button-group")[0];
        button.addEventListener("click", () => {
          //getEvents();
        });
     },[]);
 
     //Only if parshaEvents and holidaysEvents change
     useEffect(()=> {
        // const button = document.getElementsByClassName("fc-button-group")[0];
        // button.addEventListener("click", () => {
        //   //getEvents();
        // });
     },[parshaEvents,holidaysEvents]);
    let num = 1;
  return (
    <div className="full-calendar">
         <FullCalendar  
         locale="he" 
         ref={calendarRef} 
         views= {{
            dayGridMonth:{ // name of view
              titleFormat: { year: 'numeric', month: 'long' }    
              // other view-specific options here
            }
         }}
         aspectRatio={2.2} 
         defaultView="dayGridMonth" 
         plugins={[ dayGridPlugin ]} 
         viewSkeletonRender={({el,view})=> {
          //console.log(el,view)},
         }}
         datesRender = {({el,view})=>{ 
          //console.log(view)
          //changeYear1(view.currentStart); 
          //  console.log(num);
          //  num++;
          if(view.currentStart.getFullYear() != holidays.year){
           changeYear(view.currentStart)
          }
  
          let arr = el.getElementsByClassName('fc-day-top');
          for(let i = 0; i < arr.length; i++){
            let hebDay = React.createElement('span', {className: "fc-day-number heb-day a",key: i }, getHebDay(arr[i].getAttribute('data-date')));
            let numberDay = React.createElement('span', {className: "fc-day-number a",key: i+1}, arr[i].getElementsByTagName('span')[0].innerText);
            let holidaysOfDay = React.createElement('div', {className: "holidays-continer", key: i+2}, <Day date={new Date(arr[i].getAttribute('data-date'))} view={view}></Day>);
            let container = React.createElement('div', {className: "day-continer",key: i+3}, [hebDay,holidaysOfDay,numberDay]);
            ReactDOM.render([container], arr[i]);
          }         
          }}
          dayRender = {({date,el,view})=>{
            let inThisMonth = view.currentStart.getMonth() === date.getMonth();
            let content = '';
             if(date.getDay() === 5 && inThisMonth)
                 content =  <div className={inThisMonth ? 'candle': 'candle unactive'}><span><Logo className="candle-svg"/></span><span className="time">הדלקת נרות : {candleLighting(date).getHours()}:{ candleLighting(date).getMinutes()}</span><span><Logo className="candle-svg"/></span></div>;
             if(date.getDay() === 6 && inThisMonth)  
                 content =  <div className={inThisMonth ? 'candle': 'candle unactive'}>צאת השבת : {havdalah(date).getHours()}:{ havdalah(date).getMinutes()} </div>;
              ReactDOM.render(content, el);
          }}
          eventRender={({ event, el }) => {
            // console.log(el)
            // const content = <div>{event.title}<div>{event.description}</div></div>;
            // ReactDOM.render(content, el);
            // return el;
          }}
         events={[...holidaysEvents, ...parshaEvents]}
         header={{
            right: "",
            center: 'title',
            left : "next,prev today"
          }}
         />
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state.hebcal)
  return { holidays: state.hebcal};
};
export default connect(mapStateToProps, {changeYear})(MyFullCalendar);
