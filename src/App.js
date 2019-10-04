import React from 'react';
import './App.css';
import moment from "moment";
import Cal from './calendar';
// import Calpop from './calendarPop';
// import CalTest from './testCal';

function App() {
    const currMonthName  = moment().format('MMMM YYYY');
    const nextMonthName  = moment().add(1, "month").format('MMMM YYYY');

    let calendar = [];
    let nextMonthcalendar = [];
    const startDay = moment().clone().startOf('month').startOf('week');
    const endDay = moment().clone().endOf('month').endOf('week');
    const nextMonthStart = moment().clone().add(1, "month").startOf('month').startOf('week');
    const nextMonthEnd = moment().clone().add(1, "month").endOf('month').endOf('week');

    let date = startDay.clone().subtract(1, 'day');
    let nextMonthdate = nextMonthStart.clone().subtract(1, 'day');


    while (date.isBefore(endDay, 'day')) {
        calendar.push({
            days: Array(7).fill(0).map(() => date.add(1, 'day').clone())
        })
    }
    while (nextMonthdate.isBefore(nextMonthEnd, 'day')) {
        nextMonthcalendar.push({
            nextMonthdays: Array(7).fill(0).map(() => nextMonthdate.add(1, 'day').clone())
        })
    }
  return (
    <div className="container">
         {/* <div className="header">
            
           <div className="navigation">
                <ul>
                    <li><a href="#">Day</a></li>
                    <li><a href="#">Work Week</a></li>
                    <li className="active"><a href="#">Week</a></li>
                    <li><a href="#">Month</a></li>
                </ul>
            </div> 
        </div>*/}
        <div className="sidepanel">
        <div className="add-new-card">
                <a href="#/"><span>+</span> Create New Job Card</a>
            </div>
            <div className="flter-by">
                <h2>Filter By</h2>
                <div className="filter-checkbox">
                    <label htmlFor="checkbox1">
                        <input type="checkbox" name="checkbox1" value="checkbox1" />
                        Location
                    </label>
                    <label htmlFor="checkbox2">
                        <input type="checkbox" name="checkbox2" value="checkbox2" />
                        Job Type
                    </label>
                    <label htmlFor="checkbox3">
                        <input type="checkbox" name="checkbox3" value="checkbox3" />
                        Team ID
                    </label>
                    <label htmlFor="checkbox4">
                        <input type="checkbox" name="checkbox4" value="checkbox4" />
                        Job Number
                    </label>
                </div>
            </div>
            <div className="month">
                <h2>Month</h2>
                <div className="calendar">
                    <h3>{currMonthName}</h3>
                    <ul>
                        <li className="cal-header">Sun</li>
                        <li className="cal-header">Mon</li>
                        <li className="cal-header">Tue</li>
                        <li className="cal-header">Wed</li>
                        <li className="cal-header">Thu</li>
                        <li className="cal-header">Fri</li>
                        <li className="cal-header">Sat</li>
                    </ul>
                    {calendar && calendar.map((week, key)=>{
                        return(
                            <>
                            <ul>
                            {week.days.map((day, keyD)=>{
                                return (
                                    <li className={moment().format('L')===day.format('L')?'active':
                                        moment().format('MMM')!==day.format('MMM')?'past':null
                                        } key={keyD}>{day.format('D')}</li>
                                )
                            })}
                            </ul>
                            </>
                        )
                    })}
                </div>
                <div className="calendar">
                    <h3>{nextMonthName}</h3>
                    <ul>
                        <li className="cal-header">Sun</li>
                        <li className="cal-header">Mon</li>
                        <li className="cal-header">Tue</li>
                        <li className="cal-header">Wed</li>
                        <li className="cal-header">Thu</li>
                        <li className="cal-header">Fri</li>
                        <li className="cal-header">Sat</li>
                    </ul>
                    {nextMonthcalendar && nextMonthcalendar.map((week, key)=>{
                        return(
                            <>
                            <ul>
                            {week.nextMonthdays.map((day, keyD)=>{
                                return (
                                    <li className={moment().add(1, "month").format('MMM')!==day.format('MMM')?'past':null} key={keyD}>{day.format('D')}</li>
                                )
                            })}
                            </ul>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className="main">
            <Cal />
        </div>
      </div>
  );
}

export default App;
