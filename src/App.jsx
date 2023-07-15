import React from 'react'
import Products from './Components/Products'
import Sdata from './Components/Sdata'
import './assets/index.css';
import pic1  from './assets/imags/pic1.png'
import pic2  from './assets/imags/pic2.png'
import pic3  from './assets/imags/pic3.png'
import pic4  from './assets/imags/pic4.png'
import pic5  from './assets/imags/pic5.png'
import pic6  from './assets/imags/pic6.png'
export default function App() {
  return (
     
<>
       <div className="container">
        <div className="items">
           <Products 
         imgsrc ={pic1}
         type={Sdata[0].type}
         name={Sdata[0].name}
         time={Sdata[0].time}/>
         </div>
         <div className="items">
           <Products 
         imgsrc ={pic2}
         type={Sdata[1].type}
         name={Sdata[1].name}
         time={Sdata[1].time}/>
         </div>
         <div className="items">
           <Products 
         imgsrc ={pic3}
         type={Sdata[2].type}
         name={Sdata[2].name}
         time={Sdata[2].time}/>
         </div>
         <div className="items">
           <Products 
         imgsrc ={pic4}
         type={Sdata[3].type}
         name={Sdata[3].name}
         time={Sdata[3].time}/>
         </div>
         
         <div className="items">
           <Products 
         imgsrc ={pic5}
         type={Sdata[4].type}
         name={Sdata[4].name}
         time={Sdata[4].time}/>
         </div>
         <div className="items">
           <Products 
         imgsrc ={pic6}
         type={Sdata[5].type}
         name={Sdata[5].name}
         time={Sdata[5].time}/>
         </div>
       </div>
        
        
    </>
  )
}
