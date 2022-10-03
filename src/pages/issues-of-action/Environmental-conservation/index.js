import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

function EnvironmentalConservation() {
  return (
    <div>
    <Header />
    <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{backgroundImage: 'url(images/image1.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-banner-cont">
            <h2>Environmental Conservation</h2>
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
            <h5>Environmental Conservation</h5>
          </div> {/* section title */}
          <div className="about-cont">
          <article id="post-446" className="post-446 page type-page status-publish hentry">
          <div className="entry-content">
            <p>Sustainable Forestry Ventures.</p>
            <p>Response to environmental conservation challenges, climate change and environmental problems in the rural areas; for instance close attention to:</p>
            <p>i) General degradation of landscape and damage to habitats<br />ii) Decline in environmental quality and threats to biodiversity<br />iii) Pollution etc.</p>
            <p />
            <p />
          </div>{/* .entry-content */}
        </article>{/* #post-## */}        </div>
        </div> {/* about cont */}
      </div> {/* row */}
    </div> {/* container */}
  </section>
    <Footer />
    </div>
  )
}

export default EnvironmentalConservation