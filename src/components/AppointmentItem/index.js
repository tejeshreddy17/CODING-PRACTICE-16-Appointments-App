// Write your code here
import './index.css'

import {format} from 'date-fns'

const AppointmentItem = props => {
  const {eachappointment, starred} = props
  const {id, title, date, isStarred} = eachappointment
  const onclickingStarred = () => {
    starred(id)
  }
  const imgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="appoint-container">
      <div className="title-container">
        <p className="appointment-title-style">{title}</p>
        <button
          className="star-button-style"
          onClick={onclickingStarred}
          type="button"
          testid="star"
        >
          <img alt="star" src={imgUrl} />
        </button>
      </div>
      <p className="date-style">
        Date: {format(new Date(date), 'dd MMMM yyyy, EEEE')}
      </p>
    </li>
  )
}

export default AppointmentItem
