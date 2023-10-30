import React from 'react'
import { Link } from 'react-router-dom'

const Btn = (props) => {


  return (
    <Link to={props.link} className="bt btn" style={{marginTop:`${props.marginTop ? props.marginTop : ""}`, marginBottom: `${props.marginBottom ? props.marginBottom : ""}` }} >
            <span></span>
            <span></span>
            <span></span>
            <span></span> {props.title}</Link>
  )
}

export default Btn