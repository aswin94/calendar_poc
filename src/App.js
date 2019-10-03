import React from 'react';
import './App.css';
import Cal from './calendar';
import Calpop from './calendarPop';

function App() {
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
                    <label htmlFor="checkbox1">
                        <input type="checkbox" name="checkbox1" value="checkbox1" />
                        Job Type
                    </label>
                    <label htmlFor="checkbox1">
                        <input type="checkbox" name="checkbox1" value="checkbox1" />
                        Team ID
                    </label>
                    <label htmlFor="checkbox1">
                        <input type="checkbox" name="checkbox1" value="checkbox1" />
                        Job Number
                    </label>
                </div>
            </div>
            <div className="month">
                <h2>Month</h2>
                <div className="calendar">
                    <h3>September 2019</h3>
                    <ul>
                        <li className="cal-header">Sun</li>
                        <li className="cal-header">Mon</li>
                        <li className="cal-header">Tue</li>
                        <li className="cal-header">Wed</li>
                        <li className="cal-header">Thu</li>
                        <li className="cal-header">Fri</li>
                        <li className="cal-header">Sat</li>
                        <li className="past">1</li>
                        <li className="past">2</li>
                        <li className="past">3</li>
                        <li className="past">4</li>
                        <li className="past">5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
                        <li>16</li>
                        <li>17</li>
                        <li>18</li>
                        <li>19</li>
                        <li>20</li>
                        <li>21</li>
                        <li>22</li>
                        <li>23</li>
                        <li>24</li>
                        <li>25</li>
                        <li className="active">26</li>
                        <li>27</li>
                        <li>28</li>
                        <li>29</li>
                        <li>30</li>
                        <li>31</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </div>
                <div className="calendar">
                    <h3>October 2019</h3>
                    <ul>
                        <li className="cal-header">Sun</li>
                        <li className="cal-header">Mon</li>
                        <li className="cal-header">Tue</li>
                        <li className="cal-header">Wed</li>
                        <li className="cal-header">Thu</li>
                        <li className="cal-header">Fri</li>
                        <li className="cal-header">Sat</li>
                        <li className="past">1</li>
                        <li className="past">2</li>
                        <li className="past">3</li>
                        <li className="past">4</li>
                        <li className="past">5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
                        <li>16</li>
                        <li>17</li>
                        <li>18</li>
                        <li>19</li>
                        <li>20</li>
                        <li>21</li>
                        <li>22</li>
                        <li>23</li>
                        <li>24</li>
                        <li>25</li>
                        <li>26</li>
                        <li>27</li>
                        <li>28</li>
                        <li>29</li>
                        <li>30</li>
                        <li>31</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="main">
            <Calpop />
        </div>
      </div>
  );
}

export default App;
