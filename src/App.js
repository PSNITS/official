import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Main from './pages/Main';
import About from './pages/About';
import Career from './pages/Career';
import WhatWeDo from './pages/WhatWeDo';
import Releases from './pages/Releases';
import Canvas from './component/Canvas';
import Header from './component/Header';
import Advance from './redux/advance/Advance';
import {useSelector }from "react-redux";
import Drawer from './component/Drawer';
import HireUs from './pages/HireUs';
import HireUsDrawer from './component/section-component.js/HireUsDrawer';
import Blogs from './pages/Blogs';
import WebsiteDevelopement from './pages/WebsiteDevelopement';
import OurWork from './pages/OurWork';


function App() {
  const drawerData = useSelector(state => state.userReducer.Drawer);
  console.log(drawerData);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
<>
<BrowserRouter>
{drawerData && <Drawer/>}
<Header/>
<Advance/>
<Canvas/>
<HireUsDrawer/>
<Routes>

<Route path='/' element={<Main/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/career' element={<Career/>}/>
<Route path='/what-we-do' element={<WhatWeDo/>}/>
<Route path='/releases' element={<Releases/>}/>
<Route path='/hire-us' element={<HireUs/>}/>
<Route path='/blogs' element={<Blogs/>}/>
<Route path='/website-development' element={<WebsiteDevelopement/>}/>
<Route path='/our-work' element={<OurWork/>}/>

</Routes>
</BrowserRouter>
</>
  );
}

export default App;




// export  const Component = () => {
//   const [isLoading, setIsLoading] = React.useState(true);
  
//   // const handleLoading = () => {
//   // setIsLoading(false);
//   // }
  
//   useEffect(()=>{
//   // window.addEventListener("load",handleLoading);
//   // return () => window.removeEventListener("load",handleLoading);
//   window.onload = setIsLoading(false)
//   },[])
  
//   return !isLoading ? <App/>:<h1>loading</h1>
//   // return <App/>
// }
