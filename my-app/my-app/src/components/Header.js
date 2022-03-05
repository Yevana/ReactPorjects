import React from 'react'

function Header() {
  return (
    <>

            <div className="row">
              <div className="col-4">
                <div className="as_search_wrapper">
                
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input type="text" name="" className="formControl" id="" placeholder="Search..."/>
                    <a href="" className="imgLink"><img src='assets/images/Vector-1.png'/></a>
                    
                
                  
                </div>
              </div>
              <div className="col-8">
                <div className='as_button_wrapper'>
                <button className='Btncircle rounded-circle'><i className="fa-solid fa-lightbulb"></i></button>
                  <button className='headBtn'><i className="fa-solid fa-graduation-cap"></i> E-Learning</button>
                  <button className='headBtn'><i className="fa-solid fa-plus"></i>Add courses</button>
              
                </div>
                  </div>
                  </div>
              
        
    </>
  )
}

export default Header