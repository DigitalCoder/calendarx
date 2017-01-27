import React from 'react'
import moment from 'moment'
import Event from './Event'

import { isThisMonth } from '../../helpers/calendarUtil'

const getHeaderFormat = (numDays) => {
  if (numDays <= 4) return 'dddd M/D'
  if (numDays <= 10) return 'ddd M/D'
  return 'M/D'
}

const setViewClasses = (numDays) => {
  if (numDays <= 4) return 'dayView'
  if (numDays <= 10) return 'weekView'
  return 'monthView'
}

const DateColumn = ({ referenceDate, daysInView, day, events, width }) => {
  return (
    <div
      className={`dateColumn ${setViewClasses(daysInView)}`}
      style={{
        width,
        opacity: (isThisMonth(referenceDate, day) || daysInView > 10) ? 1 : 0.4,
        overflow: 'hidden'
      }}
    >
      <p className={`header ${moment(day).isSame(moment(), 'day') ? 'today' : ''}`}>
        {moment(day).format(getHeaderFormat(daysInView)).toUpperCase()}
      </p>
      {
        events.filter((e) => {
          return moment(e.time).isSame(day, 'day')
        }).map((calEvent, index) => {
          return (
            <Event
              key={calEvent.id}
              details={calEvent}
              view={'MONTH'}
              daysInView={daysInView}
              style={{ zIndex: 500 - index }}
            />
          )
        })
      }
    </div>
  )
}

export default DateColumn
