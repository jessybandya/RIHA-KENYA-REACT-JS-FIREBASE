import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


function Post({title, timestamp, desc}) {
  return (
    <div className="col-lg-6">
    <div className="singel-event-list mt-30">
      <div className="event-thum">
        <img src="wp-content/uploads/2020/09/Launching-of-Water-Borehole-at-Nakwamekwi.jpg" alt="Event" />
      </div>
      <div className="event-cont">
        <span><CalendarMonthIcon style={{color:'#36db00'}} className="fa fa-calendar" />{timestamp}</span>
        <a href="/blog-single/1/2"><h4>{title}</h4></a>
        <p>{
            desc.length > 50 ?(
                <span>
                {desc?.slice(0, 50)}...
                </span>
            ):(
                <>{desc}</>
            )
        }</p>
      </div>
  </div>
    </div>
  )
}

export default Post