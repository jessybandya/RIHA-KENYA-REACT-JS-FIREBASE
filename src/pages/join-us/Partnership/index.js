import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'

function Partnership() {
  return (
    <div>
    <Header />
    <section id="page-banner" className="pt-105 pb-110 bg_cover" data-overlay={8} style={{backgroundImage: 'url(images/image1.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-banner-cont">
            <h2>Partnership</h2>
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
            <h5>Partnership</h5>
          </div> {/* section title */}
          <div className="about-cont">
          <article id="post-467" className="post-467 page type-page status-publish hentry">
          <div className="entry-content">
            <p><strong>Partners of the Organisation</strong></p>
            <p><br />RIHA KENYA partners and cooperates with local communities, local and international non-profit organisations, development cooperation organisations or humanitarian agencies with the same or similar vision and mission.</p>
            <p>We also collaborate in development with individuals, families, schools, colleges, universities, different Churches and religious organisations and other corporate bodies like government agencies, conferences, associations and companies.</p>
            <div className="so-widget-sow-button so-widget-sow-button-atom-5c9de4d82cbc"><div className="ow-button-base ow-button-align-center">
                <a href="#" className="ow-icon-placement-left ow-button-hover">
                  <span>
                    Contact us now		</span>
                </a>
              </div>
            </div>	</div>{/* .entry-content */}
        </article>{/* #post-## */}     </div>
        </div> {/* about cont */}
      </div> {/* row */}
    </div> {/* container */}
  </section>
    <Footer />
    </div>
  )
}

export default Partnership