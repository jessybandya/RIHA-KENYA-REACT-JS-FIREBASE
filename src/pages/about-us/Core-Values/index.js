import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

function CoreValues() {
  return (
    <div>
    <Header />
    <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{backgroundImage: 'url(images/image1.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-banner-cont">
            <h2>Core Values</h2>
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
            <h5>Organisation’s Overview</h5>
          </div> {/* section title */}
          <div className="about-cont">
          <article id="post-431" className="post-431 page type-page status-publish hentry">
          <div className="entry-content">
            <div id="pl-gb431-62658291a09c2" className="panel-layout"><div id="pg-gb431-62658291a09c2-0" className="panel-grid panel-no-style"><div id="pgc-gb431-62658291a09c2-0-0" className="panel-grid-cell"><div id="panel-gb431-62658291a09c2-0-0-0" className="widget_text so-panel widget widget_custom_html panel-first-child panel-last-child" data-index={0}><div className="textwidget custom-html-widget">
                      <h4>Integrity</h4>
                      <hr/>
                      <span>Overseeing an empowered, diligent, rural community free from hunger, poverty and violence.</span><br/>
                      <h4 style={{marginTop:20}}>Team work</h4>
                      <hr/>
                      <span>We are united and work as one team to achieve our organization’s aim and objectives. We value strong Relationships, Respect and Sharing in our work.</span><br/>
                      <h4 style={{marginTop:20}}>Commitment</h4>
                      <hr/>
                      <span>We work effectively together with our beneficiaries for achievement, with dedication and perseverance to serve the neediest; to relieve them from their sufferings and to promote the transformation of their condition of life</span><br/>
                      <h4 style={{marginTop:20}}>Partnership</h4>
                      <hr/>
                      <span> We are partners with the marginalized communities, friends and with other humanitarian organizations in sustaining development.</span>
                      {/* Mirrored from www.rihakenya.org/core-values/ by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 24 Apr 2022 17:06:08 GMT */}
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

export default CoreValues
