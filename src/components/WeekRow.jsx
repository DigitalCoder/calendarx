import React from 'react'
import DateColumn from './DateColumn'

const WeekRow = (props) => {
  const { days, numSibs } = props
  return (
    <div
      className="weekRow"
      style={{
        width: '100%',
        height: `${(100) / numSibs}%`,
        boxSizing: 'border-box'
      }}
    >
      {
        days.map((day) => {
          return (
            <DateColumn
              width={`${100 / days.length}%`}
              key={day}
              day={day}
              {...props}
            />
          )
        })
      }
    </div>
  )
}

export default WeekRow