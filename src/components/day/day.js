import React, { useEffect, useState } from 'react';
import {holiday, prasha} from '../helpers/hebcal';
// import * as moment from 'moment';
import Hebcal from 'hebcal';

import './day.css';

function Day(props) {
    let {date,view} = props;
    let inThisMonth = view.currentStart.getMonth() === date.getMonth();
     
    let holidays = holiday(date) || [];
    let prashas = prasha(date) || [];

    if (holidays.length > 0){
    return (
    <div className="day" style={(holidays.length + prashas.length) > 3  ? {'line-height':'0.6vw'}:{}}>
        {date.getDay()===6 ? <div className={inThisMonth ? 'holiday': 'holiday unactive'}>  {prashas}</div>:''}
        {holidays.map((e,i)=>{
            if(e.desc[0] != "Erev Shabbat" && e.desc[0] != "Shabbat")
                return <div className={inThisMonth ? 'holiday': 'holiday unactive'} key={i}> {e.getDesc('h')}</div>
        })}
    </div>
    )}
    else return ''}

export default  Day;