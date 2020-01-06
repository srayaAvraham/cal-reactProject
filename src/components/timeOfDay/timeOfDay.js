import React, { useEffect, useState } from 'react';
import { } from '../helpers/hebcal';
import { connect } from "react-redux";
import * as moment from 'moment';
import Hebcal from 'hebcal';
import Timeline from 'react-time-line'
import './timeOfDay.css';

function TimeOfDay(props) {
    let { hebcal } = props;
    const zman = Hebcal.HDate().setCity('Jerusalem').getZemanim();
    const day = Hebcal.HDate();
    const events = [];
    for (const property in zman) {
        events.push({ ts: moment(zman[property]), text: property })
        // console.log(`${property}: ${zman[property]}`);
    }
    let sortedArray = events.sort((a, b) => a.ts.valueOf() - b.ts.valueOf())
    return (
        <div className="time-of-day">
            <div class="container">
                {/* <div class="navbar">
                    <a href="#">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </a>
                    <div class="profile-pic">
                        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" alt="" />
                        <div class="notification"></div>
                    </div>
                    <span>Timeline</span>
                </div> */}

                <div class="header">
                    <div class="color-overlay">
                        <div class="day-number">8</div>
                        <div class="date-right">
                            <div class="day-name">Monday</div>
                            <div class="month">February 2015</div>
                        </div>
                    </div>
                    {/* <div class="actionbutton">+</div> */}
                </div>

                <div class="timeline">
                    <ul>
                        {sortedArray.map((el)=>{
                         return <li>
                            <div class="bullet pink"></div>
                        <div class="time">{el.ts.format('Do,HH:mm:ss')}</div>
                            <div class="desc">
                                <h3>{el.text}</h3>
                                {/* <h4>{el.text}</h4> */}
                            </div>
                        </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { hebcal: state.hebcal };
};
export default connect(mapStateToProps, {})(TimeOfDay);