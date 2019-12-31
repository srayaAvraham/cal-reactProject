import React, { useEffect, useState } from 'react';
import {holiday, prasha} from '../helpers/hebcal';
import { connect } from "react-redux";
// import * as moment from 'moment';
import Hebcal from 'hebcal';

import './day.css';

function Day(props) {
    let {date,view, hebcal} = props;
    let inThisMonth = view.currentStart.getMonth() === date.getMonth();

    //before redux
    //let holidays = holiday(date) || [];
    //let prashas = prasha(date) || [];

    let holiday = hebcal.holidays[Hebcal.HDate(date).toString()] || [];
    let prashas = hebcal.prasha[Hebcal.HDate(date).toString()] || [];

    if (holiday.length > 0){
    return (
    <div className="day" style={(holiday.length + prashas.length) > 3  ? {'line-height':'0.6vw'}:{}}>
        {date.getDay()===6 ? <div className={inThisMonth ? 'holiday': 'holiday unactive'}>  {prashas}</div>:''}
        {holiday.map((e,i)=>{
            if(e.desc[0] != "Erev Shabbat" && e.desc[0] != "Shabbat")
                return <div className={inThisMonth ? 'holiday': 'holiday unactive'} key={i}> {e.getDesc('h')}</div>
        })}
    </div>
    )}
    else return ''}

const mapStateToProps = state => {
    return { hebcal: state.hebcal};
  };
  export default connect(mapStateToProps, {})(Day);