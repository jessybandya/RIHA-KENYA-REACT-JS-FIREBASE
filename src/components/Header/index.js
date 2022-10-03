import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div>
    <div>
    {/*====== HEADER PART START ======*/}
        {/*====== PRELOADER PART START ======*/}
        <div className="preloader">
        <div className="loader rubix-cube">
          <div className="layer layer-1" />
          <div className="layer layer-2" />
          <div className="layer layer-3 color-1" />
          <div className="layer layer-4" />
          <div className="layer layer-5" />
          <div className="layer layer-6" />
          <div className="layer layer-7" />
          <div className="layer layer-8" />
        </div>
      </div>
    <header id="header-part">
      <div className="header-logo-support pt-30 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="logo">
                <a href="/"  className='header_left'>
                  <img style={{height:50}} src="/wp-content/uploads/2020/08/download.png" alt="Logo" />
                  
                  <span>
                  <div style={{color:'#36db00',fontWeight:'bold'}}>
                  RURAL HUMANITARIAN INITIATIVE
                  </div>
                  <div style={{color:'#36db00'}}>
                  RIHA KENYA (NON-GOVERNMENTAL ORGANIZATION)
                  </div>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="support-button float-right d-none d-md-block">
                <div className="button float-left">
                  <a href="#" style={{color:'#fff'}} className="main-btn">Donate</a>
                </div>
              </div>
            </div>
          </div> {/* row */}
        </div> {/* container */}
      </div> {/* header logo support */}
      <div className="navigation">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-9 col-8">
              <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                  <a href="/">Home</a>
                </li>

                    <li className="nav-item">
                      <a>About Us</a>
                      <ul className="sub-menu">
                        <li><a href="/organization-overview">Organisation's Overview</a></li>
                        <li><a href="/vision-and-mission">Vision And Mission Statement</a></li>
                        <li><a href="/core-and-values">Core Values</a></li>
                        <li><a href="/board-and-management">Board And Management</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a>Issues Of Action</a>
                      <ul className="sub-menu">
                        <li><a href="/water-sanitation-and-hygiene">Water, Sanitation & Hygiene</a></li>
                        <li><a href="/education">Education</a></li>
                        <li><a href="/health">Health</a></li>
                        <li><a href="/environmental-conservation">Environmental Conservation</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                    <a href="/our-blogs">Blogs</a>
                  </li>
                    <li className="nav-item">
                      <a>Join Us</a>
                      <ul className="sub-menu">
                        <li><a href="/join-friends-of-riha-kenya">Join Friends of RIHA Kenya</a></li>
                        <li><a href="/partnership">Partnership</a></li>
                        <li><a href="/fundraise-for-us">Fundraise For Us</a></li>
                        <li><a href="/volunteer-with-us">Volunteer With Us</a></li>
                        <li><a href="/internships-and-vacancies">Internship & Vancancies</a></li>
                        <li><a href="/make-donation">Make Donation</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                    <a href="/our-gallery">Gallery</a>
                  </li>
                  <li className="nav-item">
                  <a href="/contact-us">Contact</a>
                </li>
                  </ul>
                </div>
              </nav> {/* nav */}
            </div>
            <div className="col-lg-2 col-md-2 col-sm-3 col-4">
              <div className="right-icon text-right">
                <ul> 
                  <li><a href="#" id="search"><SearchIcon style={{color:'#36db00'}} className="fa fa-search" /></a></li>
                </ul>
              </div> {/* right icon */}
            </div>
          </div> {/* row */}
        </div> {/* container */}
      </div>
    </header>
    {/*====== HEADER PART ENDS ======*/}
    {/*====== SEARCH BOX PART START ======*/}
    <div className="search-box">
      <div className="serach-form">
        <div className="closebtn">
          <span />
          <span />
        </div>
        <form action="#">
          <input type="text" placeholder="Search by keyword" />
          <button><SearchIcon style={{color:'#36db00'}} className="fa fa-search" /></button>
        </form>
      </div> {/* serach form */}
    </div>
    {/*====== SEARCH BOX PART ENDS ======*/}
  </div>
    </div>
  )
}

export default Header