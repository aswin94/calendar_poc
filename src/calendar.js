import React, { Component } from "react";
import { Calendar, momentLocalizer }  from 'react-big-calendar';
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
// import Modal from './popover';
// import Alert from 'react-bootstrap/Alert'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, ModalHeader, ModalBody, 
  // Form, FormGroup, Label, Input,Button 
} from 'reactstrap';
import { Form, Field } from 'react-final-form';
import Styles from './formStyle';
// import {
//   DatePicker,
//   MuiPickersUtilsProvider,
// } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';
import ls from 'local-storage';


import './calendar.css';
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


class calendar extends Component {
  state = {
    events: [
      {
        id:1,
        start: new Date(),
        end: new Date(),
        title: "JC22522 - Pavement Restoration",
        heading: "Pavement Restoration",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        teamId: '11AD45GH',
        teamLead: 'John Maxwell',
        fixed: true,
      },
      {
        id:2,
        start: new Date(),
        end: new Date(),
        title: "JC22523 - Pavement Building",
        heading: "Pavement Building",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        teamId: '11AD45GH',
        teamLead: 'Chris Johns',
        fixed: false,
      },
      {
        id:3,
        start: '2019-10-07T18:30:00.000Z',
        end: '2019-10-10T18:30:00.000Z',
        title: "JC22524 - Pavement Structuring",
        heading: "Pavement Structuring",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        teamId: '11AD45GH',
        teamLead: 'Varghese Maxwell',
        fixed: true,
      },
      {
        id:4,
        start: '2019-10-09T18:30:00.000Z',
        end: '2019-10-11T18:30:00.000Z',
        title: "JC22525 - Pathway Restoration",
        heading: "Pathway Restoration",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        teamId: '11AD45GH',
        teamLead: 'John Varghese',
        fixed: false,
      },
      {
        id:5,
        start: new Date(),
        end: new Date(),
        title: "JC22526 - Building Restoration",
        heading: "Building Restoration",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        teamId: '11AD45GH',
        teamLead: 'David Maxwell',
        fixed: false,
      },
      {
        id:6,
        start: '2019-10-12T18:30:00.000Z',
        end: '2019-10-17T18:30:00.000Z',
        title: "JC22527 - Pavement Restoration",
        heading: "Pavement Restoration",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        teamId: '11AD45GH',
        teamLead: 'John David',
        fixed: false,
      }
    ],
    modal: false,
    selectedEvent: {},
    editModal: false,
    data: {},
    jobTitle: '',
    jobName: '',
    jobDesc: '',
    teamId: '',
    teamLead: '',
    startDate: new Date(),
    endDate: new Date(),
  };

  // componentDidMount() {
  //   const {events} = this.state;
  //   const data = {
  //     id: 7,
  //     start: new Date(),
  //     end: ls.get('end') || [],
  //     title: ls.get('jobCardNo') || [],
  //     heading: ls.get('title') || [],
  //     details: ls.get('description') || [],
  //     teamId: ls.get('teamId') || [],
  //     teamLead: ls.get('teamLead') || [],
  //   };
  //   const updatedEvents = [...events, data];
  //   console.log(data, 'data');
  //   this.setState({events: updatedEvents});
  // }

  // DatePickerWrapper = (props) => {
  //   const {
  //     input: { name, onChange, value, ...restInput },
  //     meta,
  //     ...rest
  //   } = props;
  //   const showError =
  //     ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
  //     meta.touched;
  
  //   return (
  //     <MuiPickersUtilsProvider utils={DateFnsUtils}>
  //       <DatePicker
  //         {...rest}
  //         name={name}
  //         helperText={showError ? meta.error || meta.submitError : undefined}
  //         error={showError}
  //         inputProps={restInput}
  //         onChange={this.handleDateChange}
  //         value={value === '' ? null : value}
  //       />
  //     </MuiPickersUtilsProvider>
  //   );
  // }

  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

//   onEventDrop = ({ event, start, end, allDay }) => {
//     console.log(start);
//   };
toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
}
handleDateChange = date => {
  this.setState({
    endDate: date
  });
};
editToggle = () => {
  this.setState(prevState => ({
    editModal: !prevState.editModal
  }));
}
  moveEvent = ({ event, start, end, allDay: droppedOnAllDaySlot }) => {
    const { events } = this.state
    if(!event.fixed) {
      const idx = events.indexOf(event)
      let allDay = event.allDay
  
      if (!event.allDay && droppedOnAllDaySlot) {
        allDay = true
      } else if (event.allDay && !droppedOnAllDaySlot) {
        allDay = false
      }
  
      const updatedEvent = { ...event, start, end, allDay }
  
      const nextEvents = [...events]
      nextEvents.splice(idx, 1, updatedEvent)
  
      this.setState({
        events: nextEvents,
      })
      // return(
      //   <Alert color="success">
      //     {event.title} was dropped onto {updatedEvent.start}
      //   </Alert>
      // );
      alert(`${event.title} was dropped onto ${updatedEvent.start}`);
    } else {
      alert(`${event.title} cant be moved, It's fixed.`);
    }
    
  }

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    alert(`${event.title} was resized to ${start}-${end}`)
  }

  newEvent = ({ start, end }) => {
    this.setState({startDate: start, endDate: end});
    this.editToggle();
  }

  onSelectEvent = (event) => {
    // const { events } = this.state

    // const idx = events.indexOf(event);
    this.setState({selectedEvent: event});
    this.toggle();
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = async values => {
    await sleep(300);
    const data = {
      id:7,  
      ...values,
      end: this.state.endDate,
      start: this.state.startDate,
    }
    // window.alert(JSON.stringify(data, 0, 2));
    ls.set('data', data);
    this.reloadEvents();
    this.editToggle();
  }
  reloadEvents = () => {
    const {events} = this.state;
    const data = JSON.parse( localStorage.getItem( "data" ) );
    const updatedEvents = [...events, data];
    this.setState({events: updatedEvents});
  }

  render() {
    const {selectedEvent, 
      // jobTitle, jobName, jobDesc, teamId, teamLead, data, events
    } = this.state;
    return (
      <div className="App">
        <DnDCalendar
          culture='en-GB'
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
        //   onEventDrop={this.onEventDrop}
        //   onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
          selectable
          popup
          popupOffset={30}
            onEventDrop={this.moveEvent}
            onEventResize={this.resizeEvent}
            onSelectSlot={this.newEvent}
            onDragStart={console.log}
            onSelectEvent={event => this.onSelectEvent(event)}
        />
            <Modal isOpen={this.state.modal} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{selectedEvent.heading}</ModalHeader>
                <ModalBody>
                    <div>
                      <p style={{color: '#999', marginBottom:0}}>Job Description</p>
                      <p style={{paddingBottom: '2%',borderBottom: '2px dashed #efefef'}}>{selectedEvent.details}</p>
                    </div>
                    <div style={{display:'flex', borderBottom:'2px dashed #efefef', marginBottom:'2%'}}>
                      <div style={{flex:1}}>
                        <p style={{color: '#999', marginBottom:0}}>Scheduled Date</p>
                        <p style={{color: '#0173C7'}}>{selectedEvent && selectedEvent.start?moment(selectedEvent.start).format('DD/MM/YYYY'):'12/08/2019'}</p>
                      </div>
                      <div style={{flex:1}}>
                        <p style={{color: '#999', marginBottom:0}}>To be completed by</p>
                        <p style={{color: '#0173C7'}}>{selectedEvent && selectedEvent.end?moment(selectedEvent.end).format('DD/MM/YYYY'):'20/08/2019'}</p>
                      </div>
                    </div>
                    <div style={{display:'flex'}}>
                      <div style={{flex:1}}>
                          <p style={{color: '#999', marginBottom:0}}>Team Id</p>
                          <p style={{color: '#0173C7'}}>{selectedEvent.teamId}</p>
                      </div>
                      <div style={{flex:1}}>
                          <p style={{color: '#999999', marginBottom:0}}>Team Lead</p>
                          <p style={{color: '#0173C7'}}>{selectedEvent.teamLead}</p>
                      </div>
                    </div>
                </ModalBody>
            </Modal>
            <Modal isOpen={this.state.editModal} className={this.props.className}>
                <ModalHeader toggle={this.editToggle}>Create new Job card</ModalHeader>
                <ModalBody>
                      {/* <div style={{borderBottom: '2px dashed rgb(239, 239, 239)', marginBottom:'2%'}}>
                        <FormGroup style={{display:'flex'}}>
                          <Label style={{flex:1}} for="jobCarNo">Job Card No : </Label>
                          <Input style={{flex:1}} type="text" name="jobCarNo" id="jobCarNo" onChange={this.onChange} />
                        </FormGroup>
                        <FormGroup style={{display:'flex'}}>
                          <Label style={{flex:1}} for="jobTitle">Job Title :</Label>
                          <Input style={{flex:1}} type="text" name="jobTitle" id="jobTitle" onChange={this.onChange} />
                        </FormGroup>
                        <FormGroup style={{display:'flex'}}>
                          <Label style={{flex:1}} for="jobDesc">Job Description :</Label>
                          <Input style={{flex:1}} type="textarea" name="jobDesc" id="jobDesc" onChange={this.onChange} />
                        </FormGroup>
                        <FormGroup style={{display:'flex'}}>
                          <Label style={{flex:1}} for="endDate">Completion Date :</Label>
                          <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleDateChange}
                          />
                        </FormGroup>
                      </div>
                      <div style={{borderBottom: '2px dashed rgb(239, 239, 239)', marginBottom:'2%'}}>
                        <FormGroup style={{display:'flex'}}>
                          <Label style={{flex:1}} for="teamId">Team Id :</Label>
                          <Input style={{flex:1}} type="text" name="teamId" id="teamId" onChange={this.onChange} />
                        </FormGroup>
                        <FormGroup style={{display:'flex'}}>
                          <Label style={{flex:1}} for="teamLead">Team Lead :</Label>
                          <Input style={{flex:1}} type="text" name="teamLead" id="teamLead" onChange={this.onChange} />
                        </FormGroup>
                      </div>
                      <div style={{marginBottom:'5%'}}>
                        <p style={{marginBottom:0}}>Permits :</p>
                        <FormGroup check>
                          <Label check>
                            <Input type="checkbox" /> Applied for Permits
                          </Label>
                        </FormGroup>
                      </div>
                      {/* <button type="submit" className="btn btn-primary">Submit</button>{' '}
                      <button type="cancel" className="btn btn-primary">Cancel</button> */}
                      {/* <div style={{float: 'right'}}>
                        <Button type="submit" color="primary"  >Submit</Button>{' '}
                        <Button color="secondary" onClick={this.editToggle} >Cancel</Button>
                      </div> */}
                      <Styles>
                        <Form
                          onSubmit={this.onSubmit}
                          render={({ handleSubmit, form, submitting, pristine, values }) => (
                            <form onSubmit={handleSubmit}>
                              <div>
                                <div>
                                  <label>Job Card No :</label>
                                  <Field
                                    name="title"
                                    component="input"
                                    type="text"
                                  />
                                </div>
                                <div>
                                  <label>Title :</label>
                                  <Field
                                    name="heading"
                                    component="input"
                                    type="text"
                                  />
                                </div>
                                <div>
                                  <label>Description :</label>
                                  <Field name="details" component="textarea" />
                                </div>
                                <div>
                                  <label>Completion Date :</label>
                                  <Field
                                    name="end"
                                    // component={this.DatePickerWrapper} 
                                  >
                                    {props => (
                                      <DatePicker
                                        selected={this.state.endDate}
                                        onChange={this.handleDateChange}
                                      />
                                    )}
                                    </Field>
                                </div>
                              </div>
                              <div>
                                <div>
                                  <label>Team ID :</label>
                                  <Field
                                    name="teamId"
                                    component="input"
                                    type="text"
                                  />
                                </div>
                                <div>
                                  <label>Team Lead :</label>
                                  <Field
                                    name="teamLead"
                                    component="input"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div>
                                <p style={{marginBottom:0}}>
                                  <label>Permits :</label>
                                </p>
                                <div>
                                  <label>Applied for Permits</label>
                                  <Field name="permits" component="input" type="checkbox" />
                                </div>
                              </div>
                              <div className="buttons">
                                <button type="submit">
                                  Submit
                                </button>
                                <button
                                  type="button"
                                  onClick={this.editToggle}
                                >
                                  Cancel
                                </button>
                              </div>
                            </form>
                          )}
                        />
                      </Styles>
                </ModalBody>
            </Modal>
      </div>
    );
  }
}

export default calendar;
