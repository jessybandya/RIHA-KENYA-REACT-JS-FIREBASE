import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

function VisionAndMission() {
  return (
    <div>
    <Header />
    <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{backgroundImage: 'url(images/image1.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-banner-cont">
            <h2>Vision and Mission Statements</h2>
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
            <h5>Vision and Mission Statements</h5>
          </div> {/* section title */}
          <div className="about-cont">
          <article id="post-428" className="post-428 page type-page status-publish hentry">
            <div className="entry-content">
              <div id="pl-gb428-6265828f2fea4" className="panel-layout"><div id="pg-gb428-6265828f2fea4-0" className="panel-grid panel-no-style"><div id="pgc-gb428-6265828f2fea4-0-0" className="panel-grid-cell"><div id="panel-gb428-6265828f2fea4-0-0-0" className="widget_text so-panel widget widget_custom_html panel-first-child" data-index={0}><div className="textwidget custom-html-widget">
                        <title>Vision</title>
                        <h2>Vision</h2>
                        <hr/>
                        <span style={{marginBottom:20}}>Overseeing an empowered, diligent, rural community free from hunger, poverty and violence.</span>
                        {/* Mirrored from www.rihakenya.org/vision-and-mission/ by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 24 Apr 2022 17:06:05 GMT */}
                      </div></div><div id="panel-gb428-6265828f2fea4-0-0-1" className="widget_text so-panel widget widget_custom_html panel-last-child" data-index={1}><div className="textwidget custom-html-widget">
                        <title style={{marginBottom:20}}>Mission</title>
                        <h2>Mission</h2>
                        <hr/>
                        <span style={{marginTop:20}}>To facilitate the rural people in marginalized areas towards creating a productive, united, healthy, literate, socially and economically empowered, prosperous and peaceful community for themselves.</span>
                      </div></div></div></div></div>	</div>{/* .entry-content */}
          </article>{/* #post-## */}          </div>
        </div> {/* about cont */}
      </div> {/* row */}
    </div> {/* container */}
  </section>
    <Footer />
    </div>
  )
}

export default VisionAndMission