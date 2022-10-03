import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

function Health() {
  return (
    <div>
    <Header />
    <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{backgroundImage: 'url(images/image1.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-banner-cont">
            <h2>Health</h2>
          </div>  {/* page banner cont */}
        </div>
      </div> {/* row */}
    </div> {/* container */}
  </section>
  {/*====== PAGE BANNER PART ENDS ======*/}
  {/*====== ABOUT PART START ======*/}
  <section id="about-page" className="pt-70 pb-110">
    <div className="container">
      <div className="row">
        <div className="">
          <div className="section-title mt-50">
            <h5>Health</h5>
          </div> {/* section title */}
          <div className="about-cont">
          <article id="post-443" className="post-443 page type-page status-publish hentry">
          <div className="entry-content">
            <p><strong>Health care support:</strong><br />Support to rural community health care and services; including prevention and response to HIV/AIDS and other dreaded diseases; provision of Clean Water, Sanitation and Hygiene in the rural areas.</p>
          </div>{/* .entry-content */}
        </article>{/* #post-## */}      </div>
        </div> {/* about cont */}
      </div> {/* row */}
    </div> {/* container */}
  </section>
    <Footer />
    </div>
  )
}

export default Health