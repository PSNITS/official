import React from 'react'

const StepsWeeksSimple = (props) => {
  return (
    <div className="sm-container">
            <div className="img">
              {props.svg}
            </div>
            <h3>{props.h3}</h3>
            <p>{props.p}</p>
        </div>
  )
}

export default StepsWeeksSimple