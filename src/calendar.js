import React, { Component } from "react";
import { Calendar, momentLocalizer }  from 'react-big-calendar';
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
// import Modal from './popover';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


import './calendar.css';
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class calendar extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(),
        title: "Some serious works"
      },
      {
        start: new Date(),
        end: new Date(),
        title: "Some serious works1"
      },
      {
        start: new Date(),
        end: new Date(),
        title: "Some serious works2"
      },
      {
        start: new Date(),
        end: new Date(),
        title: "Some serious works3"
      },
      {
        start: new Date(),
        end: new Date(),
        title: "Some serious works4"
      },
      {
        start: new Date(),
        end: new Date(),
        title: "Some serious works5"
      }
    ],
    modal: false,
    selectedEvent: {},
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
    // const { events } = this.state

    // const idx = events.indexOf(event);
    console.log(event, 'event');
    this.setState({selectedEvent: event});
    this.toggle();
  }

  render() {
    const {selectedEvent} = this.state;
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
            onSelectEvent={event => this.onSelectEvent(event)}
        />
            <Modal isOpen={this.state.modal} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{selectedEvent.title}</ModalHeader>
                <ModalBody>
                    {/* StartDate: {selectedEvent.start}<br/>
                    EndDate: {selectedEvent.end} */}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
      </div>
    );
  }
}

export default calendar;
