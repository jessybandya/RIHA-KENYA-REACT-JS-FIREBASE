import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

function JoinFreindsOfRihaKenya() {
  return (
    <div>
    <Header />
    <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{backgroundImage: 'url(images/image1.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-banner-cont">
            <h2>Join Friends of RIHA Kenya</h2>
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
            <h5>Join Friends of RIHA Kenya</h5>
          </div> {/* section title */}
          <div className="about-cont">
          <article id="post-464" className="post-464 page type-page status-publish hentry">
          <div className="entry-content">
            <p><strong>Friends of RIHA Kenya </strong><br />Friends of RIHA KENYA are committed, generous and open-hearted people who are non members of the organisation but people with interest in the development of the organisation. These include benefactors or benefactresses, philanthropists, anonymous supporters and development partners.</p>
            <p>As a friend of RIHA KENYA, you can support the organisation in any way you can; for example in mobilization, giving us pieces of information, ideas, in volunteerism and donations. Please, consider becoming our friend, contact us today and join us.</p>
          </div>{/* .entry-content */}
        </article>{/* #post-## */}     </div>
        </div> {/* about cont */}
      </div> {/* row */}
    </div> {/* container */}
  </section>
    <Footer />
    </div>
  )
}

export default JoinFreindsOfRihaKenya