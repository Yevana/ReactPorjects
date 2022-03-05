import React from 'react'

function SideNavBar() {
  return (
    <>
     <div className='Navdiv'>
      <nav id="sidebar" className="sidebar-wrapper">
       
        <div className='navHead'>
            <div className='navImg'>
            <i className="fa fa-bars" aria-hidden="true"></i>
            <div className='logoimg'>
            <img src="assets/images/wyblo_logo_color 1.png" alt=""/>
              <i className="fa-solid fa-chevron-down py-1"></i>
            </div>
        </div>
      <div className='navLink'>
                <ul className="nav" id="menu">
                    <li className="navItem">
                      <a href="" className="navLink"><img src='assets/images/Vector.png'/> <span className="ms-1 d-inline">Overcview</span>
                      </a>
                    </li>
                    <li className="navItem">
                      <a href="" className="navLink"><img src='assets/images/VectorDash.png'/><span className="ms-1 d-inline">DashBoard</span>
                      </a>
                    </li>
                    <li className="navItem active">
                      <a href="" className="navLink"><i className="fa fa-book-open"></i><span className="ms-1 d-inline">Courses</span>
                      </a>
                    </li>
                    <li className="navItem">
                      <a href="" className="navLink"><i className="fa-solid fa-message"></i><span className="ms-1 d-inline">Discussion</span>
                      </a>
                    </li><li className="navItem">
                      <a href="" className="navLink"><img src='assets/images/VectorExam.png'/><span className="ms-1 d-inline">Exams</span>
                      </a>
                    </li><li className="navItem">
                      <a href="" className="navLink"><i className="fa-solid fa-user-group"></i><span className="ms-1 d-inline">CRM</span>
                      </a>
                    </li><li className="navItem">
                      <a href="" className="navLink"><i className="fa-solid fa-chart-pie"></i><span className="ms-1 d-inline">Survey</span>
                      </a>
                    </li><li className="navItem">
                      <a href="" className="navLink"><i className="fa-solid fa-certificate"></i><span className="ms-1 d-inline">Certificate</span>
                      </a>
                    </li><li className="navItem">
                      <a href="" className="navLink"><img src='assets/images/Vectorlibrary.png'/><span className="ms-1 d-inline">Library</span>
                      </a>
                    </li>
                </ul>
               </div>
            <div className='navFooter'>
              <div className='overlayBtn'>
              <div className='navBottomImg'>
              <img src="assets/images/wyblo_logo_color 1.png " alt=""/>
              </div>
              <div className='btnSetting'>
              <button className='btnSet'><i className="fa-solid fa-gear"></i></button>                
              </div>
              </div>
              
              <h3 className='navFooterhead'>Version 1.0</h3>
            </div>
        </div>
        </nav>

    </div>
    </>
  )
}

export default SideNavBar