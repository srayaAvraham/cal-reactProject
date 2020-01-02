import React, { useEffect, useState } from 'react';
import { } from '../helpers/hebcal';
import { connect } from "react-redux";
// import * as moment from 'moment';
import Hebcal from 'hebcal';
import Timeline from 'react-time-line'
import './timeOfDay.css';

function TimeOfDay(props) {
    let { hebcal } = props;
    const zman = Hebcal.HDate().setCity('Jerusalem').getZemanim();
    const events = [];
    for (const property in zman) {
        events.push({ts:zman[property], text: property})
        // console.log(`${property}: ${zman[property]}`);
      }
      
    return (
        <div className="time-of-day">
            <div class="card">
                {/* <img src="img_avatar.png" alt="Avatar" style={{"width":'100%'}} /> */}
                <div class="container">
                <Timeline items={events} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { hebcal: state.hebcal };
};
export default connect(mapStateToProps, {})(TimeOfDay);