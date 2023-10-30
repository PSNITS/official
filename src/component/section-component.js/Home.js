import React from 'react'
import Scroll from '../../redux/advance/Smooth'

const Home = ({children}) => {
  return (
    <>
    <div class="custom-cursor">
    </div>
    <Scroll/>
    <main className="scroller" >
{children}
</main>
    </>
  )
}

export default Home