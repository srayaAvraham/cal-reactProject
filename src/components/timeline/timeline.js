import React, { useEffect, useState } from 'react';
import './timeline.scss';
import * as moment from 'moment';
function Timeline(props) {
    let zmanim = props.zmanim;
    let create = () => {
        let time = moment();
        time.hour(0); time.minute(0); time.second(0);
        let timeline = [];
        let timelineDone = [];
        for (let index = 0; index < 24; index++) {
            let zman = zmanim[0];
            if (zman != undefined && zman.ts.isBefore(time)) {
                zmanim.shift();
                if (time.isBefore(moment())) {
                    timelineDone.push(<li className="timeline__event is--first-day is--monday is--complete">
                        <p className="timeline__event__date">{zman.ts.format('HH:mm:ss')}</p>
                        <figure className="dot">
                            <span className="ratio svg dot__icon">
                                <canvas width="9px" height="9px"></canvas>
                                <svg viewBox="0 0 9 9"><use xlinkHref="/src/svg/symbols/symbols.svg#tick"></use></svg>
                            </span>				</figure>
                        <h5 className="timeline__event__title">{zman.text}</h5>
                        <h6 className="timeline__event__difference"></h6>
                    </li>)
                } else {
                    timeline.push(<li className="timeline__event">

                        <p className="timeline__event__date">{zman.ts.format('HH:mm:ss')}</p>

                        <figure className="dot">
                        </figure>

                        <h5 className="timeline__event__title">{zman.text}</h5>

                        <h6 className="timeline__event__difference"></h6>

                    </li>)
                }
            } else {
                if (time.isBefore(moment())) {
                    timelineDone.push(
                        <li className="timeline__event" data-time={time.format('HH:mm:ss')}>
                            <p className="timeline__event__date">{time.format('HH:mm:ss')}</p>
                        </li>
                    )
                } else {
                    timeline.push(
                        <li className="timeline__event" data-time={time.format('HH:mm:ss')}>
                            <p className="timeline__event__date">{time.format('HH:mm:ss')}</p>
                        </li>)
                }
                time.add(60, 'minutes');
            }
        }
        return [timeline, timelineDone];
    }
    return (<div className="g--flex">
        <article>

            <ul className="timeline">

                <div className="timeline__endured">

                    <div className="aside filled">

                        <div className="aside__line filled__line">

                            <div className="filled__line__completed" style={{ "height": "100%" }} >

                            </div>

                        </div>

                    </div>
                    {create()[1]}
                </div>
                {create()[0]}
                <div className="aside unfilled">

                    <div className="aside__line">

                    </div>

                </div>

            </ul>

        </article>
    </div>)
}

export default Timeline;
{/* <ul className="timeline">
    
<div className="timeline__endured">

    <div className="aside filled">

        <div className="aside__line filled__line">

            <div className="filled__line__completed" style={{"height": "100%"}} >

            </div>

        </div>

    </div>

    <li className="timeline__event is--first-day is--monday is--complete">

        <p className="timeline__event__date">Monday 1st August</p>

        <figure className="dot">
            
    <span className="ratio svg dot__icon">
        <canvas width="9px" height="9px"></canvas>
        <svg viewBox="0 0 9 9"><use xlinkHref="/src/svg/symbols/symbols.svg#tick"></use></svg>
    </span>				</figure>

        <h5 className="timeline__event__title">Project Start</h5>

        <h6 className="timeline__event__difference"></h6>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Tuesday 2nd August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Wednesday 3rd August</p>

    </li>

    <li className="timeline__event is--complete">

        <p className="timeline__event__date">Thursday 4th August</p>

        <figure className="dot">
            
    <span className="ratio svg dot__icon">
        <canvas width="9px" height="9px"></canvas>
        <svg viewBox="0 0 9 9"><use xlinkHref="/src/svg/symbols/symbols.svg#tick"></use></svg>
    </span>				</figure>

        <h5 className="timeline__event__title">Status Report</h5>

        <h6 className="timeline__event__difference"></h6>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Friday 5th August</p>

    </li>

    <li className="timeline__event is--weekend">

        <p className="timeline__event__date">Saturday 6th August</p>

    </li>

    <li className="timeline__event is--weekend">

        <p className="timeline__event__date">Sunday 7th August</p>

    </li>

    <li className="timeline__event is--monday is--today">

        <p className="timeline__event__date">Monday 8th August</p>

        <figure className="dot">
            
    <span className="ratio svg dot__icon is--waiting">
        <canvas width="13px" height="3px"></canvas>
        <svg viewBox="0 0 13 3"><use xlinkHref="/src/svg/symbols/symbols.svg#waiting"></use></svg>
    </span>				</figure>

        <h5 className="timeline__event__title">Wireframing Starts</h5>

        <h6 className="timeline__event__difference"></h6>

    </li>

</div>

    <li className="timeline__event">

        <p className="timeline__event__date">Wednesday 3rd August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Thursday 4th August</p>

        <figure className="dot">
        </figure>

        <h5 className="timeline__event__title">Status Report</h5>

        <h6 className="timeline__event__difference"></h6>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Friday 5th August</p>

    </li>

    <li className="timeline__event is--weekend">

        <p className="timeline__event__date">Saturday 6th August</p>

    </li>

    <li className="timeline__event is--weekend">

        <p className="timeline__event__date">Sunday 7th August</p>

    </li>

    <li className="timeline__event is--monday">

        <p className="timeline__event__date">Monday 1st August</p>

        <figure className="dot">
        </figure>

        <h5 className="timeline__event__title">Design Starts</h5>

        <h6 className="timeline__event__difference"></h6>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Tuesday 2nd August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Wednesday 3rd August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Thursday 4th August</p>

        <figure className="dot">
        </figure>

        <h5 className="timeline__event__title">Status Report</h5>

        <h6 className="timeline__event__difference"></h6>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Friday 5th August</p>

    </li>

    <li className="timeline__event is--weekend">

        <p className="timeline__event__date">Saturday 6th August</p>

    </li>

    <li className="timeline__event is--weekend">

        <p className="timeline__event__date">Sunday 7th August</p>

    </li>

    <li className="timeline__event is--monday">

        <p className="timeline__event__date">Monday 1st August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Tuesday 2nd August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Wednesday 3rd August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Thursday 4th August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Friday 5th August</p>

    </li>

    <li className="timeline__event is--weekend">

        <p className="timeline__event__date">Saturday 6th August</p>

    </li>

    <li className="timeline__event is--weekend">

        <p className="timeline__event__date">Sunday 7th August</p>

    </li>

    <li className="timeline__event is--monday">

        <p className="timeline__event__date">Monday 1st August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Tuesday 2nd August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Wednesday 3rd August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Thursday 4th August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Friday 5th August</p>

    </li>

    <li className="timeline__event is--weekend">

        <p className="timeline__event__date">Saturday 6th August</p>

    </li>

    <li className="timeline__event is--weekend">

        <p className="timeline__event__date">Sunday 7th August</p>

    </li>

    <li className="timeline__event is--monday">

        <p className="timeline__event__date">Monday 1st August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Tuesday 2nd August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Wednesday 3rd August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Thursday 4th August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Friday 5th August</p>

    </li>

    <li className="timeline__event is--weekend">

        <p className="timeline__event__date">Saturday 6th August</p>

    </li>

    <li className="timeline__event is--weekend">

        <p className="timeline__event__date">Sunday 7th August</p>

    </li>

    <li className="timeline__event is--monday">

        <p className="timeline__event__date">Monday 1st August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Tuesday 2nd August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Wednesday 3rd August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Thursday 4th August</p>

    </li>

    <li className="timeline__event">

        <p className="timeline__event__date">Friday 5th August</p>

    </li>

    <li className="timeline__event is--weekend">

        <p className="timeline__event__date">Saturday 6th August</p>

    </li>

    <li className="timeline__event is--weekend">

        <p className="timeline__event__date">Sunday 7th August</p>

    </li>

    <div className="aside unfilled">

        <div className="aside__line">

        </div>

    </div>

</ul> */}