import React from 'react'

function MenuHead() {
  return (
        <div className="row">
    <div className="col-3 menuHead">
     <h3>Courses</h3>
     </div>
     <div className="col-7  menuBtn">
     <button className='rounded-lg'><i className="fa-solid fa-calendar-days"></i>Calendar</button>
      <button className='rounded-lg'><i className="fa-solid fa-chart-line"></i>Analytics</button>
      <button className='rounded-lg'><i className="fas fa-file-export"></i>Export</button>

      <a href="" className=""><img src='assets/images/Vector-2.png'/>Filter</a>
      <a href="" className=""><img src='assets/images/Vector-3.png'/>Column Settings</a>

  </div>
  </div>
  )
}

export default MenuHead