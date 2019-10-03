import React from "react";
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import moment from 'moment';


class MyComponent extends React.Component {
    calendarRef = React.createRef();
    calendarInst = null;
    state = {
        dateRange: '',
        view: 'month',
        viewModeOptions: [
          {
            title: 'Monthly',
            value: 'month'
          },
          {
            title: 'Weekly',
            value: 'week'
          },
          {
            title: 'Daily',
            value: 'day'
          }
        ]
    };
    componentDidMount() {
        console.log(this.calendarRef, 'ref');
        this.calendarInst = this.calendarRef.current.getInstance();
        this.setState({view: this.props.view});
  
        this.setRenderRangeText();
      }
  
      onAfterRenderSchedule(res) {
        console.group('onAfterRenderSchedule');
        console.log('Schedule Info : ', res.schedule);
        console.groupEnd();
      }
  
      onBeforeDeleteSchedule(res) {
        console.group('onBeforeDeleteSchedule');
        console.log('Schedule Info : ', res.schedule);
        console.groupEnd();
  
        const idx = this.state.scheduleList.findIndex((item) => item.id === res.schedule.id);
        this.setState({scheduleList: [...this.state.scheduleList.splice(idx, 1)]});
      }
  
      onChangeSelect(ev) {
        this.setState({view: ev.target.value});
  
        this.setRenderRangeText();
      }
  
      onClickDayname(res) {
        // view : week, day
        console.group('onClickDayname');
        console.log(res.date);
        console.groupEnd();
      }
  
      onClickNavi(event) {
        if (event.target.tagName === 'BUTTON') {
          const {target} = event;
          let action = target.dataset ? target.dataset.action : target.getAttribute('data-action');
          action = action.replace('move-', '');
  
          this.calendarInst[action]();
          this.setRenderRangeText();
        }
      }
  
      onClickSchedule(res) {
        console.group('onClickSchedule');
        console.log('MouseEvent : ', res.event);
        console.log('Calendar Info : ', res.calendar);
        console.log('Schedule Info : ', res.schedule);
        console.groupEnd();
      }
  
      onClickTimezonesCollapseBtn(timezonesCollapsed) {
        // view : week, day
        console.group('onClickTimezonesCollapseBtn');
        console.log('Is Collapsed Timezone? ', timezonesCollapsed);
        console.groupEnd();
  
        const theme = {};
        if (timezonesCollapsed) {
          theme['week.daygridLeft.width'] = '200px';
          theme['week.timegridLeft.width'] = '200px';
        } else {
          theme['week.daygridLeft.width'] = '100px';
          theme['week.timegridLeft.width'] = '100px';
        }
  
        this.calendarInst.setTheme(theme);
      }
  
      setRenderRangeText() {
        const view = this.calendarInst.getViewName();
        const calDate = this.calendarInst.getDate();
        const rangeStart = this.calendarInst.getDateRangeStart();
        const rangeEnd = this.calendarInst.getDateRangeEnd();
        let year = calDate.getFullYear();
        let month = calDate.getMonth() + 1;
        let date = calDate.getDate();
        let dateRangeText = '';
        let endMonth, endDate, start, end;
  
        switch (view) {
          case 'month':
            dateRangeText = `${year}-${month}`;
            break;
          case 'week':
            year = rangeStart.getFullYear();
            month = rangeStart.getMonth() + 1;
            date = rangeStart.getDate();
            endMonth = rangeEnd.getMonth() + 1;
            endDate = rangeEnd.getDate();
  
            start = `${year}-${month < 10 ? '0' : ''}${month}-${date < 10 ? '0' : ''}${date}`;
            end = `${year}-${endMonth < 10 ? '0' : ''}${endMonth}-${
              endDate < 10 ? '0' : ''
            }${endDate}`;
            dateRangeText = `${start} ~ ${end}`;
            break;
          default:
            dateRangeText = `${year}-${month}-${date}`;
        }
  
        this.setState({dateRange: dateRangeText});
      }

    handleClickButton = () => {
        this.calendarRef.current.getRootElement().classList.add('calendar-root');
    };
    render() {
        const {dateRange, view, viewModeOptions} = this.state;
        const selectedView = view || this.props.view;
      return ( 
          <div>
              <div>
                <select onChange={this.onChangeSelect.bind(this)} value={view}>
                {viewModeOptions.map((option, index) => (
                    <option value={option.value} key={index}>
                    {option.title}
                    </option>
                ))}
                </select>
                <span>
                <button
                    type="button"
                    className="btn btn-default btn-sm move-today"
                    data-action="move-today"
                    onClick={this.onClickNavi.bind(this)}
                >
                    Today
                </button>
                <button
                    type="button"
                    className="btn btn-default btn-sm move-day"
                    data-action="move-prev"
                    onClick={this.onClickNavi.bind(this)}
                >
                    Prev
                </button>
                <button
                    type="button"
                    className="btn btn-default btn-sm move-day"
                    data-action="move-next"
                    onClick={this.onClickNavi.bind(this)}
                >
                    Next
                </button>
                </span>
                <span className="render-range">{dateRange}</span>
            </div>
              <Calendar
                height="900px"
                ref={this.calendarRef}
                calendars={[
                    {
                        id: '0',
                        name: 'Private',
                        bgColor: '#9e5fff',
                        borderColor: '#9e5fff'
                    },
                    {
                        id: '1',
                        name: 'Company',
                        bgColor: '#00a9ff',
                        borderColor: '#00a9ff'
                    }
                ]}
                viewModeOptions={[
                    {
                    title: 'Monthly',
                    value: 'month'
                    },
                    {
                    title: 'Weekly',
                    value: 'week'
                    },
                    {
                    title: 'Daily',
                    value: 'day'
                    }
                ]} 
                disableDblClick={true}
                disableClick={false}
                isReadOnly={false}
                month={{
                    startDayOfWeek: 0
                }}
                schedules={[
                {
                    id: '1',
                    calendarId: '0',
                    title: 'TOAST UI Calendar Study',
                    category: 'time',
                    dueDateClass: '',
                    start: moment().format(),
                    end: moment().format(),
                },
                {
                    id: '2',
                    calendarId: '0',
                    title: 'Practice',
                    category: 'milestone',
                    dueDateClass: '',
                    start: moment().format(),
                    end: moment().format(),
                    isReadOnly: true
                },
                {
                    id: '3',
                    calendarId: '0',
                    title: 'FE Workshop',
                    category: 'allday',
                    dueDateClass: '',
                    start: moment().format(),
                    end: moment().format(),
                    isReadOnly: true
                },
                {
                    id: '4',
                    calendarId: '0',
                    title: 'Report',
                    category: 'time',
                    dueDateClass: '',
                    start: moment().format(),
                    end: moment().format(),
                }
                ]}
                scheduleView
                draggable={true}
                taskView
                template={{
                milestone(schedule) {
                    return `<span style="color:#fff;background-color: ${schedule.bgColor};">${
                    schedule.title
                    }</span>`;
                },
                milestoneTitle() {
                    return 'Milestone';
                },
                allday(schedule) {
                    return `${schedule.title}<i class="fa fa-refresh"></i>`;
                },
                alldayTitle() {
                    return 'All Day';
                },
                popupIsAllDay: function() {
                    return 'All Day';
                },
                popupStateFree: function() {
                    return 'Free';
                },
                popupStateBusy: function() {
                    return 'Busy';
                },
                titlePlaceholder: function() {
                    return 'Subject';
                },
                locationPlaceholder: function() {
                    return 'Location';
                },
                startDatePlaceholder: function() {
                    return 'Start date';
                },
                endDatePlaceholder: function() {
                    return 'End date';
                },
                popupSave: function() {
                    return 'Save';
                },
                popupUpdate: function() {
                    return 'Update';
                },
                popupDetailDate: function(isAllDay, start, end) {
                    var isSameDate = moment(start).isSame(end);
                    var endFormat = (isSameDate ? '' : 'YYYY.MM.DD ') + 'hh:mm a';
            
                    if (isAllDay) {
                    return moment(start).format('YYYY.MM.DD') + (isSameDate ? '' : ' - ' + moment(end).format('YYYY.MM.DD'));
                    }
            
                    return (moment(start).format('YYYY.MM.DD hh:mm a') + ' - ' + moment(end).format(endFormat));
                },
                popupDetailLocation: function(schedule) {
                    return 'Location : ' + schedule.location;
                },
                popupDetailUser: function(schedule) {
                    return 'User : ' + (schedule.attendees || []).join(', ');
                },
                popupDetailState: function(schedule) {
                    return 'State : ' + schedule.state || 'Busy';
                },
                popupDetailRepeat: function(schedule) {
                    return 'Repeat : ' + schedule.recurrenceRule;
                },
                popupDetailBody: function(schedule) {
                    return 'Body : ' + schedule.body;
                },
                popupEdit: function() {
                    return 'Edit';
                },
                popupDelete: function() {
                    return 'Delete';
                }
                }}
                // theme={myTheme}
                timezones={[
                {
                    timezoneOffset: 540,
                    displayLabel: 'GMT+09:00',
                    tooltip: 'Seoul'
                },
                {
                    timezoneOffset: -420,
                    displayLabel: 'GMT-08:00',
                    tooltip: 'Los Angeles'
                }
                ]}
                useDetailPopup
                useCreationPopup
                view={'month'} // You can also set the `defaultView` option.
                week={{
                    showTimezoneCollapseButton: true,
                    timezonesCollapsed: true
                }}
            />
        </div>         
      );
    }
  }
export default MyComponent;