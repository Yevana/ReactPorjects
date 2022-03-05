import React from 'react'
import Header from './Header'
import MainContent from './MainContent'
import MenuHead from './MenuHead'
import SideNavBar from './SideNavBar'

function Main() {
  return (
    <>
    <div className='main row'>
<SideNavBar/>
<main className='content-page col-10'>
<Header />
<MenuHead />
<div className="col-12">

<div className="row">
<div className="col-10">
<MainContent />

                  </div>

                  </div>

</div>


</main>

    </div>
    </>
  )
}

export default Main