// Write your code here
import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {appointments: [], title: '', date: '', starredButton: false}

  onchangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onchangeDate = event => {
    this.setState({date: event.target.value})
  }

  onsubmittingAppointment = () => {
    const {title, date} = this.state
    if (title !== '' && date !== '') {
      this.setState(prevState => ({
        appointments: [
          ...prevState.appointments,
          {id: v4(), title, date, isStarred: false},
        ],
        title: '',
        date: '',
      }))
    }
  }

  starred = id => {
    this.setState(prevState => ({
      appointments: prevState.appointments.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  showingStarredAppointments = () => {
    this.setState(prevState => ({
      starredButton: !prevState.starredButton,
    }))
  }

  render() {
    const {appointments, title, date, starredButton} = this.state

    const appointmentsToDisplayed = starredButton
      ? appointments.filter(
          eachAppointment => eachAppointment.isStarred === true,
        )
      : appointments
    const selectedstarredbutton = starredButton ? 'selected-starred-button' : ''
    return (
      <div className="background-card">
        <div className="appointment-card">
          <h1>Add Appointment</h1>
          <div className="appointment-card-image-container">
            <form className="input-field-container">
              <label htmlFor="title">TITLE</label>
              <input
                id="title"
                className="input-card-style"
                onChange={this.onchangeTitle}
                placeholder="Title"
                type="text"
                value={title}
              />
              <label htmlFor="date">DATE</label>
              <input
                id="date"
                className="input-card-style"
                onChange={this.onchangeDate}
                placeholder="dd/mm/yyyy"
                type="date"
                value={date}
              />
              <button
                type="button"
                className="add-button"
                onClick={this.onsubmittingAppointment}
              >
                Add
              </button>
            </form>
            <img
              className="image-style"
              alt="appointments"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
            />
          </div>
          <div className="appointments-display-container">
            <div className="apointment-starred-button-container">
              <h1>Appointments</h1>
              <button
                className={`starred-button ${selectedstarredbutton}`}
                type="button"
                onClick={this.showingStarredAppointments}
              >
                Starred
              </button>
            </div>
          </div>
          <ul className="appointments-container">
            {appointmentsToDisplayed.map(eachAppointment => (
              <AppointmentItem
                eachappointment={eachAppointment}
                starred={this.starred}
                key={eachAppointment.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
