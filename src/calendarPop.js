import React, { Component } from "react";
import { Calendar, momentLocalizer }  from 'react-big-calendar';
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
// import Modal from './popover';
// import { Modal, ModalHeader, ModalBody } from 'reactstrap';
// import Popover from 'react-tiny-popover'
// import ReactTooltip from 'react-tooltip'




import './calendar.css';
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class calendarPop extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(),
        title: "JC22522",
        heading: "Pavement Restoration",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        teamId: '11AD45GH',
        teamLead: 'John Maxwell',

      },
      {
        start: new Date(),
        end: new Date(),
        title: "JC22523",
        heading: "Pavement Building",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        teamId: '11AD45GH',
        teamLead: 'Chris Johns',
      },
      {
        start: new Date(),
        end: new Date(),
        title: "JC22524",
        heading: "Pavement Structuring",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        teamId: '11AD45GH',
        teamLead: 'Varghese Maxwell',
      },
      {
        start: new Date(),
        end: new Date(),
        title: "JC22525",
        heading: "Pathway Restoration",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        teamId: '11AD45GH',
        teamLead: 'John Varghese',
      },
      {
        start: new Date(),
        end: new Date(),
        title: "JC22526",
        heading: "Building Restoration",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        teamId: '11AD45GH',
        teamLead: 'David Maxwell',
      },
      {
        start: new Date(),
        end: new Date(),
        title: "JC22527",
        heading: "Pavement Restoration",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        teamId: '11AD45GH',
        teamLead: 'John David',
      }
    ],
    modal: false,
    selectedEvent: {},
    isPopoverOpen: false,
  };

//   onEventResize = (type, { event, start, end, allDay }) => {
//     this.setState(state => {
//       state.events[0].start = start;
//       state.events[0].end = end;
//       return { events: state.events };
//     });
//   };

//   onEventDrop = ({ event, start, end, allDay }) => {
//     console.log(start);
//   };
toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
}
// function Event({ event }) {
//     return (
//       <span>
//         <strong>{event.title}</strong>
//         {event.desc && ':  ' + event.desc}
//       </span>
//     )
//   }
  moveEvent = ({ event, start, end, allDay: droppedOnAllDaySlot }) => {
    const { events } = this.state

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

    alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  resizeEvent = ({ event, start, end }) => {
    // const { events } = this.state

    // const nextEvents = events.map(existingEvent => {
    //   return existingEvent.id === event.id
    //     ? { ...existingEvent, start, end }
    //     : existingEvent
    // })

    // this.setState({
    //   events: nextEvents,
    // })

    // alert(`${event.title} was resized to ${start}-${end}`)
  }

  newEvent(event) {
    // let idList = this.state.events.map(a => a.id)
    // let newId = Math.max(...idList) + 1
    // let hour = {
    //   id: newId,
    //   title: 'New Event',
    //   allDay: event.slots.length === 1,
    //   start: event.start,
    //   end: event.end,
    // }
    // this.setState({
    //   events: this.state.events.concat([hour]),
    // })
  }

  onSelectEvent = (event) => {
    const { isPopoverOpen } = this.state

    // const idx = events.indexOf(event);
    console.log(event, 'event');
    this.setState({selectedEvent: event, isPopoverOpen: !isPopoverOpen});
    // this.toggle();
  }

  render() {
    const {selectedEvent, isPopoverOpen} = this.state;
    return (
      <div className="App">
            <DnDCalendar
            defaultDate={new Date()}
            defaultView="month"
            events={this.state.events}
            localizer={localizer}
            //   onEventDrop={this.onEventDrop}
            //   onEventResize={this.onEventResize}
            resizable
            style={{ height: "100vh" }}
            selectable
                onEventDrop={this.moveEvent}
                onEventResize={this.resizeEvent}
                onSelectSlot={this.newEvent}
                onDragStart={console.log}
                // onSelectEvent={event => this.onSelectEvent(event)}
                components = {{
                    event: Event,
                }}
            />
    
            {/* <Modal isOpen={this.state.modal} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{selectedEvent.heading}</ModalHeader>
                <ModalBody>
                    <div>
                      <p style={{color: '#8888', marginBottom:0}}>Job Description</p>
                      <p style={{paddingBottom: '2%',borderBottom: '2px dashed #efefef'}}>{selectedEvent.details}</p>
                    </div>
                    <div style={{display:'flex', borderBottom:'2px dashed #efefef', marginBottom:'2%'}}>
                      <div style={{flex:1}}>
                        <p style={{color: '#8888', marginBottom:0}}>Scheduled Date</p>
                        <p style={{color: '#0173C7'}}>12/08/2019</p>
                      </div>
                      <div style={{flex:1}}>
                        <p style={{color: '#8888', marginBottom:0}}>To be completed by</p>
                        <p style={{color: '#0173C7'}}>20/08/2019</p>
                      </div>
                    </div>
                    <div style={{display:'flex'}}>
                      <div style={{flex:1}}>
                          <p style={{color: '#8888', marginBottom:0}}>Team Id</p>
                          <p style={{color: '#0173C7'}}>{selectedEvent.teamId}</p>
                      </div>
                      <div style={{flex:1}}>
                          <p style={{color: '#8888', marginBottom:0}}>Team Lead</p>
                          <p style={{color: '#0173C7'}}>{selectedEvent.teamLead}</p>
                      </div>
                    </div>
                </ModalBody>
            </Modal> */}
      </div>
    );
  }
}

export default calendarPop;
