import React from 'react'
import { Link } from 'react-router-dom'

const BlogContainer = (props) => {
  return (
    <>
    <Link className="blog-container">
                <div className="img">
                <img src={props.img} alt="" />
                </div>
                <h3>Blog name and best title goes here</h3>
                <p>We are pleased to announce various open positions in Desktop Application Development, Web Application Development and other creative services in our Company.</p>
            </Link>
    </>
  )
}

export default BlogContainer