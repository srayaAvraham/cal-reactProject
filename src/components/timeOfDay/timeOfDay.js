import React, { useEffect, useState } from 'react';
import { } from '../helpers/hebcal';
import { connect } from "react-redux";
import * as moment from 'moment';
import Hebcal from 'hebcal';
import Timeline from '../timeline/timeline'
import './timeOfDay.css';

function TimeOfDay(props) {
    let { date } = props;
    console.log(date)
    const zman = Hebcal.HDate().setCity('Jerusalem').getZemanim();
    const day = Hebcal.HDate();
    const events = [];
    for (const property in zman) {
        if(property != "alot_hashacher")
        events.push({ ts: moment(zman[property]), text: property })
        // console.log(`${property}: ${zman[property]}`);
    }
    let sortedArray = events.sort((a, b) => a.ts.valueOf() - b.ts.valueOf())
    return (
        <div className="time-of-day">
            <div className="container">
                <div className="header">
                    <div className="color-overlay">
                        <div className="">
            <div className="day-number">{date.day.date()}</div>
                            <div className="date-right">
                                <div className="day-name">{date.day.format("dddd")}</div>
                                <div className="month">{date.day.format("MMMM YYYY")}</div>
                            </div>
                        </div>
                        <div className="heb-day">
                            <div className="date-right">
                                <div className="day-name">ראשון</div>
                                <div className="month">{date.hebDay.dateString.year} {date.hebDay.dateString.month}</div>
                            </div>
                            <div className="day-number">{date.hebDay.dateString.day}</div>
                        </div>

                    </div>
                    {/* <div className="actionbutton">+</div> */}
                </div>

                <Timeline zmanim={sortedArray}></Timeline>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { date: state.hebcal.byDate };
};
export default connect(mapStateToProps, {})(TimeOfDay);

// {/* <div className="timeline">
// <ul>
//     {sortedArray.map((el)=>{
//      return <li>
//         <div className="bullet pink"></div>
//     <div className="time">{el.ts.format('Do,HH:mm:ss')}</div>
//         <div className="desc">
//             <h3>{el.text}</h3>
//             {/* <h4>{el.text}</h4> */}
//         </div>
//     </li>
//     })}
// </ul>
// </div> */}