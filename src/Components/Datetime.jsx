import  React, { useState , useEffect } from 'react'

export const Datetime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className='date_s'>
            <div className="item">Date : {date.toLocaleDateString()} <span>Time</span></div>
            <div className='item'>{date.toLocaleTimeString()}</div>
        

        </div>
    )
}
export default Datetime;